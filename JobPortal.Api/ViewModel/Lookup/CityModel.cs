namespace JobPortal.Api.ViewModel.Lookup
{
    public class CityModel
    {
         public int Id { get; set; }
        public int StateId { get; set; }

        public StateModel State { get; set; }
        public string Name { get; set; }

    }
}