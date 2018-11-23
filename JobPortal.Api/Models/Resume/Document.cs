using JobPortal.Api.Models.Account;
using JobPortal.Api.Models.Lookup;

namespace JobPortal.Api.Models.Resume
{
    public class Document
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int? ResumeId { get; set; }
        public int? CvId { get; set; }

        public DocumentUpload Resume { get; set; }
        public DocumentUpload Cv { get; set; }
        public ApplicationUser User { get; set; }

    }
}