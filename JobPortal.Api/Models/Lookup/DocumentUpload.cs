using JobPortal.Api.Models.Account;

namespace JobPortal.Api.Models.Lookup
{
    public class DocumentUpload
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FilePath { get; set; }
        public string FileOwnerId { get; set; }
        public Category Category { get; set; }
        public ApplicationUser FileOwner { get; set; }
    }
}