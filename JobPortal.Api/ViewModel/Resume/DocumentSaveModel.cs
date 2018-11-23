using JobPortal.Api.ViewModel.Account;
using JobPortal.Api.ViewModel.Lookup;

namespace JobPortal.Api.ViewModel.Resume
{
    public class DocumentSaveModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int? ResumeId { get; set; }
        public int? CvId { get; set; }

        public DocumentUploadModel Resume { get; set; }
        public DocumentUploadModel Cv { get; set; }
        public ApplicationUserModel User { get; set; }

    }
}