using ERPServer.Domain.Dtos;

public sealed record RequirementsPlanningByOrderIdCommandResponse(
    DateOnly Date,
    string Title,
    List<ProductDto> Products
    );
