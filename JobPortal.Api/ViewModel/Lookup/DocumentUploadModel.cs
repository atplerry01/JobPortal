using JobPortal.Api.Models.Lookup;

namespace JobPortal.Api.ViewModel.Lookup
{
    public class DocumentUploadModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FilePath { get; set; }
        public string FileOwnerId { get; set; }
        public Category Category { get; set; }
    }
}