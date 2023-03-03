using Microsoft.EntityFrameworkCore.Migrations;

namespace Etud_Avenir.Data.Migrations
{
    public partial class addRecognitionState : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StateRecognition",
                table: "School");

            migrationBuilder.AddColumn<bool>(
                name: "StateRecognition",
                table: "Curriculum",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StateRecognition",
                table: "Curriculum");

            migrationBuilder.AddColumn<bool>(
                name: "StateRecognition",
                table: "School",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
