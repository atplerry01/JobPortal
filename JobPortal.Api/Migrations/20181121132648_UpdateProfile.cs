using Microsoft.EntityFrameworkCore.Migrations;

namespace JobPortal.Api.Migrations
{
    public partial class UpdateProfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Profiles",
                newName: "MiddleName");

            migrationBuilder.RenameColumn(
                name: "Biodata",
                table: "Profiles",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Profiles",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Profiles");

            migrationBuilder.RenameColumn(
                name: "MiddleName",
                table: "Profiles",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Profiles",
                newName: "Biodata");
        }
    }
}
