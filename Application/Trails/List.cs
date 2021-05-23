using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application
{
    public class List
    {
        public class Query : IRequest<Result<List<Trail>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Trail>>>
        {
            private readonly OutdoorsContext _context;
            public Handler(OutdoorsContext context)
            {
                _context = context;
            }

            public async  Task<Result<List<Trail>>> Handle(Query request, CancellationToken cancellationToken)
            {
               return Result<List<Trail>>.Success( await _context.Trails.ToListAsync());
            }
        }
    }
}