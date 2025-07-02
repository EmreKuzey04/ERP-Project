using AutoMapper;
using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using GenericRepository;
using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Products.UpdateProduct
{
    public sealed class UpdateProductCommandHandler(
        IProductRepository productRepository,
        IUnitOfWork unitOfWork,
        IMapper mapper
        ) : IRequestHandler<UpdateProductCommand, Result<string>>
    {
        public async Task<Result<string>> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
           Product product = await productRepository.GetByExpressionWithTrackingAsync(p=> p.Id == request.Id,cancellationToken);

            if (product is null)
            {
                Result<string>.Failure("Ürün Kaydı Bulunamadı");            
            }

            if(product?.Name != request.Name)
            {
                bool isNameExists = await productRepository.AnyAsync(p => p.Name == request.Name, cancellationToken);

                if (isNameExists)
                {
                    return Result<string>.Failure(" Bu Ürün Adı Daha Önce Kullanılmıştır");
                }
            }

            mapper.Map(request, product);
            await unitOfWork.SaveChangesAsync(cancellationToken);

            return "Ürün Güncellemesi Başarıyla Tamamlandı";
        }
    }
}
