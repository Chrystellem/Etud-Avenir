using Microsoft.EntityFrameworkCore.Migrations;

namespace Etud_Avenir.Data.Migrations
{
    public partial class researchUpdates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurriculumSchool");

            migrationBuilder.DropColumn(
                name: "AdmissionType",
                table: "School");

            migrationBuilder.DropColumn(
                name: "Domaine",
                table: "School");

            migrationBuilder.RenameColumn(
                name: "PrivateSchool",
                table: "School",
                newName: "IsPublic");

            migrationBuilder.RenameColumn(
                name: "Localisation",
                table: "School",
                newName: "City");

            migrationBuilder.RenameColumn(
                name: "Apprenticeship",
                table: "School",
                newName: "IsPrivate");

            migrationBuilder.AddColumn<int>(
                name: "ZipCode",
                table: "School",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AdmissionType",
                table: "Curriculum",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Domain",
                table: "Curriculum",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsApprenticeship",
                table: "Curriculum",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsInitialFormation",
                table: "Curriculum",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "SchoolId",
                table: "Curriculum",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "CurriculumCoefficient",
                columns: table => new
                {
                    CurriculumCoefficientId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CurriculumId = table.Column<int>(type: "int", nullable: false),
                    SubjectId = table.Column<int>(type: "int", nullable: false),
                    Value = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurriculumCoefficient", x => x.CurriculumCoefficientId);
                    table.ForeignKey(
                        name: "FK_CurriculumCoefficient_Curriculum_CurriculumId",
                        column: x => x.CurriculumId,
                        principalTable: "Curriculum",
                        principalColumn: "CurriculumId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CurriculumCoefficient_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "SubjectId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Curriculum_SchoolId",
                table: "Curriculum",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_CurriculumCoefficient_CurriculumId",
                table: "CurriculumCoefficient",
                column: "CurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_CurriculumCoefficient_SubjectId",
                table: "CurriculumCoefficient",
                column: "SubjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Curriculum_School_SchoolId",
                table: "Curriculum",
                column: "SchoolId",
                principalTable: "School",
                principalColumn: "SchoolId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Curriculum_School_SchoolId",
                table: "Curriculum");

            migrationBuilder.DropTable(
                name: "CurriculumCoefficient");

            migrationBuilder.DropIndex(
                name: "IX_Curriculum_SchoolId",
                table: "Curriculum");

            migrationBuilder.DropColumn(
                name: "ZipCode",
                table: "School");

            migrationBuilder.DropColumn(
                name: "AdmissionType",
                table: "Curriculum");

            migrationBuilder.DropColumn(
                name: "Domain",
                table: "Curriculum");

            migrationBuilder.DropColumn(
                name: "IsApprenticeship",
                table: "Curriculum");

            migrationBuilder.DropColumn(
                name: "IsInitialFormation",
                table: "Curriculum");

            migrationBuilder.DropColumn(
                name: "SchoolId",
                table: "Curriculum");

            migrationBuilder.RenameColumn(
                name: "IsPublic",
                table: "School",
                newName: "PrivateSchool");

            migrationBuilder.RenameColumn(
                name: "IsPrivate",
                table: "School",
                newName: "Apprenticeship");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "School",
                newName: "Localisation");

            migrationBuilder.AddColumn<string>(
                name: "AdmissionType",
                table: "School",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Domaine",
                table: "School",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CurriculumSchool",
                columns: table => new
                {
                    CurriculumSchoolId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CurriculumId = table.Column<int>(type: "int", nullable: false),
                    SchoolId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurriculumSchool", x => x.CurriculumSchoolId);
                    table.ForeignKey(
                        name: "FK_CurriculumSchool_Curriculum_CurriculumId",
                        column: x => x.CurriculumId,
                        principalTable: "Curriculum",
                        principalColumn: "CurriculumId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CurriculumSchool_School_SchoolId",
                        column: x => x.SchoolId,
                        principalTable: "School",
                        principalColumn: "SchoolId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CurriculumSchool_CurriculumId",
                table: "CurriculumSchool",
                column: "CurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_CurriculumSchool_SchoolId",
                table: "CurriculumSchool",
                column: "SchoolId");
        }
    }
}
