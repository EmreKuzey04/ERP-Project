using AutoMapper;
using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using GenericRepository;
using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Customers.UpdateCustomer
{
    public sealed class UpdateCustomerCommandHandler(
        ICustomerRepository customerRepository,
        IUnitOfWork unitOfWork,
        IMapper mapper) : IRequestHandler<UpdateCustomerCommand, Result<string>>
    {
        public async Task<Result<string>> Handle(UpdateCustomerCommand request, CancellationToken cancellationToken)
        {
            Customer customer = await customerRepository.GetByExpressionWithTrackingAsync(p => p.Id == request.Id, cancellationToken);

            if (customer is null)
            {
                return Result<string>.Failure("Müşteri Bulunamadı");
            }

            if (customer.TaxNumber != request.TaxNumber)
            {
                bool isTaxNumberExists = await customerRepository.AnyAsync(p => p.TaxNumber == request.TaxNumber, cancellationToken);
                if (isTaxNumberExists)
                {
                    return Result<string>.Failure("Vergi Numaranız Daha Önce Kaydedilmiştir");
                }
            }

            mapper.Map(request, customer);
            await unitOfWork.SaveChangesAsync(cancellationToken);
            return "Müşteri Bilgileri Başarıyla Güncellendi";
        }
    }
}
