using ERPServer.Domain.Entities;
using ERPServer.Infrastructure.Context;
using GenericRepository;

internal sealed class InvoiceDetailRepository : Repository<InvoiceDetail, ApplicationDbContext>, IInvoiceDetailRepository
{
    public InvoiceDetailRepository(ApplicationDbContext context) : base(context)
    {
    }
}
