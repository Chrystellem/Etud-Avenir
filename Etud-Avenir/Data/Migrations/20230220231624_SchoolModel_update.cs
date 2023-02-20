using Microsoft.EntityFrameworkCore.Migrations;

namespace Etud_Avenir.Data.Migrations
{
    public partial class SchoolModel_update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Label",
                table: "Favorite");

            migrationBuilder.RenameColumn(
                name: "Score",
                table: "School",
                newName: "InsertionRate");

            migrationBuilder.RenameColumn(
                name: "CurriculumID",
                table: "Curriculum",
                newName: "CurriculumId");

            migrationBuilder.AddColumn<string>(
                name: "AdmissionType",
                table: "School",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Apprenticeship",
                table: "School",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<float>(
                name: "AverageSalary",
                table: "School",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "Domaine",
                table: "School",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Localisation",
                table: "School",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "PrivateSchool",
                table: "School",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "StateRecognition",
                table: "School",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdmissionType",
                table: "School");

            migrationBuilder.DropColumn(
                name: "Apprenticeship",
                table: "School");

            migrationBuilder.DropColumn(
                name: "AverageSalary",
                table: "School");

            migrationBuilder.DropColumn(
                name: "Domaine",
                table: "School");

            migrationBuilder.DropColumn(
                name: "Localisation",
                table: "School");

            migrationBuilder.DropColumn(
                name: "PrivateSchool",
                table: "School");

            migrationBuilder.DropColumn(
                name: "StateRecognition",
                table: "School");

            migrationBuilder.RenameColumn(
                name: "InsertionRate",
                table: "School",
                newName: "Score");

            migrationBuilder.RenameColumn(
                name: "CurriculumId",
                table: "Curriculum",
                newName: "CurriculumID");

            migrationBuilder.AddColumn<string>(
                name: "Label",
                table: "Favorite",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
