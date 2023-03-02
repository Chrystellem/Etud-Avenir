using Microsoft.EntityFrameworkCore.Migrations;

namespace Etud_Avenir.Data.Migrations
{
    public partial class correctionFavorite : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_School_SchoolId",
                table: "Favorite");

            migrationBuilder.RenameColumn(
                name: "SchoolId",
                table: "Favorite",
                newName: "CurriculumId");

            migrationBuilder.RenameIndex(
                name: "IX_Favorite_SchoolId",
                table: "Favorite",
                newName: "IX_Favorite_CurriculumId");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_Curriculum_CurriculumId",
                table: "Favorite",
                column: "CurriculumId",
                principalTable: "Curriculum",
                principalColumn: "CurriculumId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_Curriculum_CurriculumId",
                table: "Favorite");

            migrationBuilder.RenameColumn(
                name: "CurriculumId",
                table: "Favorite",
                newName: "SchoolId");

            migrationBuilder.RenameIndex(
                name: "IX_Favorite_CurriculumId",
                table: "Favorite",
                newName: "IX_Favorite_SchoolId");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_School_SchoolId",
                table: "Favorite",
                column: "SchoolId",
                principalTable: "School",
                principalColumn: "SchoolId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
