namespace JobPortal.Api.Models.Lookup
{
    public class City
    {
        public int Id { get; set; }
        public int StateId { get; set; }

        public State State { get; set; }
        public string Name { get; set; }

    }
}