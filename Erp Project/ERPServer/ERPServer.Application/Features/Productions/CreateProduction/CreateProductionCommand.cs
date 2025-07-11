﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TS.Result;

namespace ERPServer.Application.Features.Productions.CreateProduction
{
    public sealed record CreateProductionCommand(
        Guid ProductId,
        Guid DepotId,
        decimal Quantity
        ) : IRequest<Result<string>>;
}
