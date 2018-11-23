using Microsoft.EntityFrameworkCore.Migrations;

namespace JobPortal.Api.Migrations
{
    public partial class UpdateBioData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Biodata",
                table: "Profiles",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Biodata",
                table: "Profiles");
        }
    }
}
