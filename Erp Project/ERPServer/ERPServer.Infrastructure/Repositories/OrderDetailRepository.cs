using ERPServer.Infrastructure.Context;
using GenericRepository;

internal sealed class OrderDetailRepository : Repository<OrderDetail, ApplicationDbContext>, IOrderDetailRepository
{
    public OrderDetailRepository(ApplicationDbContext context) : base(context)
    {
    }
}