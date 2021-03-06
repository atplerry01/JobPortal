namespace JobPortal.Api.ViewModel.Account
{
    public class AccountUpdateResource
    {
        public string UserId { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }

        public int SidClientId { get; set; }
    }
}