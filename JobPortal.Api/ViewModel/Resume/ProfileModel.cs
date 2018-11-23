using JobPortal.Api.Models.Lookup;
using JobPortal.Api.ViewModel.Account;
using JobPortal.Api.ViewModel.Lookup;

namespace JobPortal.Api.ViewModel.Resume
{
    public class ProfileModel
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string DateOfBirth { get; set; }
        public int GenderId { get; set; }
        public int CityId { get; set; }

        public GenderModel Gender { get; set; }
        public CityModel City { get; set; }
        public string Description { get; set; }

    }
}