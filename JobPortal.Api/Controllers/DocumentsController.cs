using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JobPortal.Api.Models.Resume;
using JobPortal.Api.Persistence;
using JobPortal.Api.ViewModel.Resume;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Api.Controllers
{
    [Route("api/documents")]
    public class DocumentsController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public DocumentsController(ApplicationDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet]
        public async Task<IEnumerable<DocumentModel>> GetDocuments()
        {
            var userProfile = await context.Documents.ToListAsync();
            return mapper.Map<IEnumerable<Document>, IEnumerable<DocumentModel>>(userProfile);
        }

        [HttpGet("{userId}")]
        public async Task<IEnumerable<DocumentModel>> GetUserDocuments(string userId)
        {
            var userProfile = await context.Documents
                .Include(u => u.User)
                .Include(c => c.Cv)
                .Include(r => r.Resume)
                .Where(u => u.UserId == userId).ToListAsync();
            return mapper.Map<IEnumerable<Document>, IEnumerable<DocumentModel>>(userProfile);
        }

        
        [HttpPost("profile")]
        public async Task<IActionResult> CreateUserDocument([FromBody] DocumentSaveModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            Document existingEntity = await context.Documents.FirstOrDefaultAsync(u => u.UserId == model.UserId);

            if (existingEntity != null)
            {
                //Todo
                // Update the profile
                //var mealProfile = await context.Profiles.SingleOrDefaultAsync(u => u.Id == newProfile.Id);
            }

            var entity = mapper.Map<DocumentSaveModel, Document>(model);
            context.Documents.Add(entity);
            await context.SaveChangesAsync();

            entity = await context.Documents
                .Include(p => p.User)
                .SingleOrDefaultAsync(it => it.Id == entity.Id);

            var result = mapper.Map<Document, DocumentModel>(entity);

            return Ok(result);
        }



    }
}