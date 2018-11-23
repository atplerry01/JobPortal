namespace JobPortal.Api.ViewModel.Lookup
{
    public class StateModel
    {
        public int Id { get; set; }
        public int CountryId { get; set; }
        
        public CountryModel Country { get; set; }
        public string Name { get; set; }
    }
}