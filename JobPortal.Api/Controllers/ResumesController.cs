using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using JobPortal.Api.Models.Account;
using JobPortal.Api.Models.Resume;
using JobPortal.Api.Persistence;
using JobPortal.Api.ViewModel.Account;
using JobPortal.Api.ViewModel.Resume;
//using JobPortal.Api.ViewModel.Resume;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Api.Controllers
{
    [Route("api/resume")]
    public class ResumesController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IHostingEnvironment host;
        private readonly UserManager<ApplicationUser> userManager;
        public ResumesController(UserManager<ApplicationUser> userManager, ApplicationDbContext context, IMapper mapper, IHostingEnvironment host)
        {
            this.userManager = userManager;
            this.host = host;
            this.mapper = mapper;
            this.context = context;
        }


        [HttpGet("profiles")]
        public async Task<IEnumerable<ProfileModel>> GetUserProfiles()
        {
            var userProfile = await context.Profiles.ToListAsync();
            return mapper.Map<IEnumerable<UserProfile>, IEnumerable<ProfileModel>>(userProfile);
        }

        [Route("user/{userId:guid}")]
        public async Task<IActionResult> GetUser([FromRoute] string userId)
        {

            var appUser = await userManager.FindByIdAsync(userId);

            if (appUser == null)
            {
                return NotFound();
            }

            var result = mapper.Map<ApplicationUser, ApplicationUserModel>(appUser);

            return Ok(result);
        }


        // Get userProfile
        [HttpGet("profile/{userId:guid}")]
        public async Task<IActionResult> GetUserProfile([FromRoute] string userId)
        {
            var userProfile = await context.Profiles
                .Include(g => g.Gender)
                .Include(c => c.City)
                .ThenInclude(s => s.State)
                .Include(n => n.City.State.Country)
            .SingleOrDefaultAsync(it => it.UserId == userId);

            if (userProfile == null) return NotFound();

            var result = mapper.Map<UserProfile, ProfileModel>(userProfile);

            return Ok(result);
        }


        [HttpPost("profile")]
        public async Task<IActionResult> CreateUserProfile([FromBody] ProfileSaveModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            UserProfile newProfile = await context.Profiles.FirstOrDefaultAsync(u => u.UserId == model.UserId);

            if (newProfile == null)
            {
                //Create a new record
                newProfile = mapper.Map<ProfileSaveModel, UserProfile>(model);
                context.Profiles.Add(newProfile);
                await context.SaveChangesAsync();
            }
            else
            {
                //Todo: check for null mapping
                newProfile.FirstName = model.FirstName;
                newProfile.MiddleName = model.MiddleName;
                newProfile.LastName = model.LastName;
                newProfile.PhoneNumber = model.PhoneNumber;
                newProfile.AddressLine1 = model.AddressLine1;
                newProfile.DateOfBirth = model.DateOfBirth;
                newProfile.GenderId = model.GenderId;
                newProfile.CityId = model.CityId;

                context.Entry(newProfile).State = EntityState.Modified;
                await context.SaveChangesAsync();
            }

            var entity = await context.Profiles
                .Include(p => p.User)
                .Include(g => g.Gender)
                .Include(c => c.City).ThenInclude(s => s.State)
                .SingleOrDefaultAsync(it => it.Id == newProfile.Id);
            var result = mapper.Map<UserProfile, ProfileModel>(entity);

            return Ok();
        }


        [HttpGet("profile/biodata/{userId:guid}")]
        public async Task<IActionResult> GetProfileBioData([FromRoute] string userId)
        {
            var biodata = await context.ProfileBioDatas.Include(p => p.User)
            .SingleOrDefaultAsync(it => it.UserId == userId);
            if (biodata == null) return NotFound();
            var result = mapper.Map<ProfileBioData, ProfileBioDataModel>(biodata);

            return Ok(result);
        }



        [HttpPost("profile/biodata")]
        public async Task<IActionResult> UpdateBioData([FromBody] ProfileBioDataModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            ProfileBioData newProfile = await context.ProfileBioDatas.FirstOrDefaultAsync(u => u.UserId == model.UserId);

            if (newProfile == null)
            {
                //Todo: newProfile <> model
                newProfile = new ProfileBioData();
                newProfile.BioData = model.BioData;
                newProfile.UserId = model.UserId;

                var entity = mapper.Map<ProfileBioDataModel, ProfileBioData>(model);
                context.ProfileBioDatas.Add(entity);
                await context.SaveChangesAsync();

            }
            else
            {
                newProfile.BioData = model.BioData;
                context.Entry(newProfile).State = EntityState.Modified;
                await context.SaveChangesAsync();
            }

            newProfile = await context.ProfileBioDatas.SingleOrDefaultAsync(it => it.Id == newProfile.Id);
            var result = mapper.Map<ProfileBioData, ProfileBioDataModel>(newProfile);

            return Ok(result);
        }


        [HttpGet("document/{userId:guid}")]
        public async Task<IActionResult> GetUserDocument([FromRoute] string userId)
        {
            var userDoc = await context.Documents
                .Include(p => p.User)
                .Include(r => r.Resume)
                .Include(c => c.Cv)
                .SingleOrDefaultAsync(it => it.UserId == userId);

            //if (userProfile == null) return NotFound();
            var result = mapper.Map<Document, DocumentModel>(userDoc);

            return Ok(result);
        }

    }
}