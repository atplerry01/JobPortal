using JobPortal.Api.Models.Lookup;
using JobPortal.Api.Models.Account;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using JobPortal.Api.Models.Resume;

namespace JobPortal.Api.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected ApplicationDbContext()
        {
        }

        public DbSet<RefreshToken> RefreshTokens { get; set; }

        // Lookups
        public DbSet<City> Cities { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<DocumentUpload> DocumentUploads { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<State> States { get; set; }

        // Resume
        public DbSet<CareerPreference> CareerPreferences { get; set; }
        public DbSet<CompetencyAssesment> CompetencyAssesments { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<UserProfile> Profiles { get; set; }
        public DbSet<ProfileBioData> ProfileBioDatas { get; set; }
      
     


        public void InsertNew(RefreshToken token)
        {
            var tokenModel = RefreshTokens.SingleOrDefault(i => i.UserId == token.UserId);
            if (tokenModel != null)
            {
                RefreshTokens.Remove(tokenModel);
                SaveChanges();
            }
            RefreshTokens.Add(token);
            SaveChanges();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RefreshToken>()
                .HasAlternateKey(c => c.UserId)
                .HasName("refreshToken_UserId");
            modelBuilder.Entity<RefreshToken>()
                .HasAlternateKey(c => c.Token)
                .HasName("refreshToken_Token");

            base.OnModelCreating(modelBuilder);
        }




    }

}
