using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JobPortal.Api.Models.Account;
using JobPortal.Api.Persistence;
using JobPortal.Api.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using JobPortal.Api.ViewModel;
using Microsoft.EntityFrameworkCore;
using JobPortal.Api.ViewModel.Account;
using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Http;


namespace JobPortal.Api.Controllers
{
    [Route("api/accounts")]
    public class AccountsController : Controller
    {
        private readonly IMapper mapper;
        private readonly ApplicationDbContext context;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IHostingEnvironment host;

        public AccountsController(IMapper mapper, IHostingEnvironment host, ApplicationDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            this.host = host;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet("Users")]
        public async Task<IEnumerable<ApplicationUserModel>> GetUserAccounts()
        {
            var results = await context.Users.ToListAsync();
            return mapper.Map<IEnumerable<ApplicationUser>, IEnumerable<ApplicationUserModel>>(results);
        }

        [HttpPost("user/create")]
        public async Task<IActionResult> CreateClientUser([FromBody] AccountSaveResource model)
        {
          
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new ApplicationUser()
            {
                UserName = model.Username,
                Email = model.Email,
                EmailConfirmed = true,
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                IsEnabled = true
            };

            IdentityResult addUserResult = await userManager.CreateAsync(user, model.Password);

            if (!addUserResult.Succeeded)
            {
                return StatusCode(400, addUserResult);
            }

            var result = mapper.Map<ApplicationUser, ApplicationUserModel>(user);
            return StatusCode(200, result);
        }

        [HttpPost("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId = "", string code = "")
        {

            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(code))
            {
                ModelState.AddModelError("", "User Id and Code are required");
                return BadRequest(ModelState);
            }

            var user = await userManager.FindByIdAsync(userId);

            IdentityResult result = await userManager.ConfirmEmailAsync(user, code);

            if (result.Succeeded)
            {
                //return Ok();
                return Content("Sucessful", "text/html");
            }
            else
            {
                return Content("Failed", "text/html");
            }

        }

    }
}