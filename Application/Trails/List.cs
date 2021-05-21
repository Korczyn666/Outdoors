using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application
{
    public class List
    {
        public class Query : IRequest<List<Trail>> { }

        public class Handler : IRequestHandler<Query, List<Trail>>
        {
            private readonly OutdoorsContext _context;
            public Handler(OutdoorsContext context)
            {
                _context = context;
            }

            public async  Task<List<Trail>> Handle(Query request, CancellationToken cancellationToken)
            {
               return await _context.Trails.ToListAsync();
            }
        }
    }
}