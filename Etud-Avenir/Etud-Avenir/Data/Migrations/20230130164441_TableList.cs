using Microsoft.EntityFrameworkCore.Migrations;

namespace Etud_Avenir.Data.Migrations
{
    public partial class TableList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CurriculumSchool",
                columns: table => new
                {
                    CurriculumSchoolId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SchoolId = table.Column<int>(type: "int", nullable: true),
                    CurriculumId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurriculumSchool", x => x.CurriculumSchoolId);
                });

            migrationBuilder.CreateTable(
                name: "Favorite",
                columns: table => new
                {
                    FavoriteId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SchoolId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true),
                    Label = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favorite", x => x.FavoriteId);
                });

            migrationBuilder.CreateTable(
                name: "LastSearch",
                columns: table => new
                {
                    LastSearchId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SchoolId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true),
                    Score = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LastSearch", x => x.LastSearchId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurriculumSchool");

            migrationBuilder.DropTable(
                name: "Favorite");

            migrationBuilder.DropTable(
                name: "LastSearch");
        }
    }
}
