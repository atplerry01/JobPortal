using System;

namespace JobPortal.Api.ViewModel.Account
{
    public class ClientModel
    {
        public int Id { get; set; }
        public string Client { get; set; }
        public string Country { get; set; }
        public DateTime Date { get; set; }
    }
}