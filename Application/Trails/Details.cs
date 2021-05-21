using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application
{
    public class Details
    {
        public class Query : IRequest<Trail>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Trail>
        {
            private readonly OutdoorsContext _context;
            public Handler(OutdoorsContext context)
            {
                _context = context;
            }

            public async Task<Trail> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Trails.FirstOrDefaultAsync( u => u.Id == request.Id);
            }
        }

    }
}