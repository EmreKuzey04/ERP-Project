using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using GenericRepository;
using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Recipes.CreateRecipe
{
    internal sealed class CreateRecipeCommandHandler(
        IRecipeRepository recipeRepository,
        IUnitOfWork unitOfWork) : IRequestHandler<CreateRecipeCommand, Result<string>>
    {
        public async Task<Result<string>> Handle(CreateRecipeCommand request, CancellationToken cancellationToken)
        {
          
            bool isRecipeExists = await recipeRepository.AnyAsync(p=> p.ProductId == request.ProductId, cancellationToken);

            if (isRecipeExists)
            {
                Result<string>.Failure("Bu ürüne ait reçete daha önce oluşturulmuştur");
            }

            Recipe recipe = new()
            {
                ProductId = request.ProductId,
                Details = request.Details.Select(s =>
                new RecipeDetail()
                {

                    ProductId = s.ProductId,
                    Quantity = s.Quantity

                }).ToList()
            };

            await recipeRepository.AddAsync(recipe);
            await unitOfWork.SaveChangesAsync();
            return "Reçete Kaydı Başarıyla Tamamlandı";

                
        }
    }
}
