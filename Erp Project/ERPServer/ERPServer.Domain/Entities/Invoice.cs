using ERPServer.Domain.Abstractions;
using ERPServer.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERPServer.Domain.Entities
{
    public sealed class Invoice: Entity
    {
        public Guid CustomerId { get; set; }
        public Customer? Customer { get; set; }
        public string InvoiceNumber {  get; set; } = string.Empty;
        public DateOnly Date { get; set; }
        public DateOnly DeliveryDate { get; set; }
        public InvoiceTypeEnum Type { get; set; } = InvoiceTypeEnum.Purchase;
        public List<InvoiceDetail>? Details { get; set; }

    }
}
