using Microsoft.AspNetCore.Identity;

namespace JobPortal.Api.Models.Account
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsEnabled { get; set; }
    }
}