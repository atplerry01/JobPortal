using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using JobPortal.Api.Models.Lookup;
using JobPortal.Api.Models.Resume;
using JobPortal.Api.Persistence;
using JobPortal.Api.ViewModel.Lookup;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Api.Controllers
{
    [Route("api/document-upload")]
    public class DocumentUploadController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IHostingEnvironment host;

        public DocumentUploadController(ApplicationDbContext context, IMapper mapper, IHostingEnvironment host)
        {
            this.host = host;
            this.mapper = mapper;
            this.context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            var uploadFolderPath = Path.Combine(host.WebRootPath, "uploads");
            if (Directory.Exists(uploadFolderPath))
                Directory.CreateDirectory(uploadFolderPath);

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(uploadFolderPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return Ok(new { fileName });

        }


        [HttpPost("profile")]
        public async Task<IActionResult> CreateDocumentProfile([FromBody] DocumentUploadModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            DocumentUpload newProfile = await context.DocumentUploads.FirstOrDefaultAsync(u => u.FileOwnerId == model.FileOwnerId && u.Category == model.Category);

            var entity = mapper.Map<DocumentUploadModel, DocumentUpload>(model);

            context.DocumentUploads.Add(entity);
            await context.SaveChangesAsync();

            entity = await context.DocumentUploads
                .Include(p => p.FileOwner)
                .SingleOrDefaultAsync(it => it.Id == entity.Id);

            Document userDoc1 = await context.Documents.FirstOrDefaultAsync(u => u.UserId == model.FileOwnerId);

            if (userDoc1 == null)
            {
                userDoc1 = new Document()
                {
                    UserId = model.FileOwnerId
                };

                context.Documents.Add(userDoc1);
                await context.SaveChangesAsync();
            }

            Document userDoc = await context.Documents.FirstOrDefaultAsync(u => u.UserId == model.FileOwnerId);

            if (userDoc != null && model.Category == Category.Resume)
            {
                //Update Resume
                userDoc.ResumeId = entity.Id;
                context.Entry(userDoc).State = EntityState.Modified;
                await context.SaveChangesAsync();

            }
            else if (userDoc != null && model.Category == Category.CoverLetter)
            {
                //Update Cover
                userDoc.CvId = entity.Id;
                context.Entry(userDoc).State = EntityState.Modified;
                await context.SaveChangesAsync();
            }

           
            var result = mapper.Map<DocumentUpload, DocumentUploadModel>(entity);

            return Ok(result);

        }



    }
}