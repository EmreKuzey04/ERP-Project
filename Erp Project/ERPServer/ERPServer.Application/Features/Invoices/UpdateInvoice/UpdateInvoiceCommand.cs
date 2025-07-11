﻿using ERPServer.Domain.Dtos;
using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Result;

namespace ERPServer.Application.Features.Invoices.UpdateInvoice
{
    public sealed record UpdateInvoiceCommand(
        Guid Id,
        DateOnly Date,
        string InvoiceNumber,
        List<InvoiceDetailDto> Details) : IRequest<Result<string>>;
}
