using AutoMapper;
using JobPortal.Api.Models;
using JobPortal.Api.Models.Account;
using JobPortal.Api.Models.Lookup;
using JobPortal.Api.Models.Resume;
using JobPortal.Api.ViewModel.Account;
using JobPortal.Api.ViewModel.Lookup;
using JobPortal.Api.ViewModel.Resume;

namespace JobPortal.Api.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
             CreateMap<UserProfile, ProfileModel>();
            CreateMap<Country, CountryModel>();
            CreateMap<State, StateModel>();
            CreateMap<City, CityModel>();
            CreateMap<DocumentUpload, DocumentUploadModel>();
            CreateMap<Document, DocumentModel>();

            // CreateMap<ApplicationUser, ApplicationUserModel>();
            // CreateMap<Department, DepartmentModel>();
            // CreateMap<DepartmentMealProfiling, DepartmentMealProfilingModel>();
            // CreateMap<MealTransaction, MealTransactionModel>();
            // CreateMap<UserMealProfiling, UserMealProfilingModel>();

            CreateMap<ProfileSaveModel, UserProfile>();
            CreateMap<ProfileBioDataModel, UserProfile>();
            CreateMap<DocumentUploadModel, DocumentUpload>();
            // CreateMap<UserMealProfilingSaveModel, UserMealProfiling>();
            // CreateMap<DepartmentMealProfilingSaveModel, DepartmentMealProfiling>();
            // CreateMap<MealTransactionSaveModel, MealTransaction>();
            
        }
    }
}