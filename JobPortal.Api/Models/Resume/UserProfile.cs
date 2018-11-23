using JobPortal.Api.Models.Account;
using JobPortal.Api.Models.Lookup;

namespace JobPortal.Api.Models.Resume
{
    public class UserProfile //: ApplicationUser
    {
        public int Id { get; set; }
        public string UserId { get; set; }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string DateOfBirth { get; set; }
        public int GenderId { get; set; }
        public int CityId { get; set; }

        public Gender Gender { get; set; }
        public City City { get; set; }
        public ApplicationUser User { get; set; }
    }
}