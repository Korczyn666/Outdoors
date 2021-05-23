using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application
{
    public class Details
    {
        public class Query : IRequest<Result<Trail>>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Trail>>
        {
            private readonly OutdoorsContext _context;
            public Handler(OutdoorsContext context)
            {
                _context = context;
            }

            public async Task<Result<Trail>> Handle(Query request, CancellationToken cancellationToken)
            {
                var trail = await _context.Trails.FirstOrDefaultAsync( u => u.Id == request.Id);

                return Result<Trail>.Success(trail);
            }
        }

    }
}