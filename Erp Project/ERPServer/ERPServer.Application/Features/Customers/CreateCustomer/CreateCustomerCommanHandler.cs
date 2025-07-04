﻿using AutoMapper;
using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using GenericRepository;
using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Customers.CreateCustomer
{
    internal sealed class CreateCustomerCommanHandler(
        ICustomerRepository customerRepository, 
        IUnitOfWork unitOfWork, 
        IMapper mapper
        ) : IRequestHandler<CreateCustomerCommand, Result<string>>
    {
        public async Task<Result<string>> Handle(CreateCustomerCommand request, CancellationToken cancellationToken)
        {
            bool isTaxNumberExists = await customerRepository.AnyAsync(p=> p.TaxNumber == request.TaxNumber, cancellationToken);
            if (isTaxNumberExists)
            {
                return Result<string>.Failure("Vergi Numaranız Daha Önce Kaydedilmiştir");
            }

            Customer customer = mapper.Map<Customer>(request);
            await customerRepository.AddAsync(customer,cancellationToken);
            await unitOfWork.SaveChangesAsync(cancellationToken);

            return "Müşteri Kaydı Başarıyla Tamamlandı";

        }
    }
}