using ERPServer.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;
using TS.Result;

namespace ERPServer.Application.Features.Productions.GetAllProduction
{
    public sealed record GetAllProductionQuery() : IRequest<Result<List<Production>>>;
}
