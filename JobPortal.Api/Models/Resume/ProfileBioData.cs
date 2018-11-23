using JobPortal.Api.Models.Account;

namespace JobPortal.Api.Models.Resume
{
    public class ProfileBioData
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string BioData { get; set; }

        public ApplicationUser User { get; set; }
    }
}