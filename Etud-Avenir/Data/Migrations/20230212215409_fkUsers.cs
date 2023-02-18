using Microsoft.EntityFrameworkCore.Migrations;

namespace Etud_Avenir.Data.Migrations
{
    public partial class fkUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SchoolYear",
                table: "Report",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Report",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Report",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "LastSearch",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SchoolId",
                table: "LastSearch",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "LastSearch",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SubjectId",
                table: "Grade",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ReportId",
                table: "Grade",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Favorite",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SchoolId",
                table: "Favorite",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Label",
                table: "Favorite",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Favorite",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SchoolId",
                table: "CurriculumSchool",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CurriculumId",
                table: "CurriculumSchool",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Report_UserId1",
                table: "Report",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_LastSearch_SchoolId",
                table: "LastSearch",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_LastSearch_UserId1",
                table: "LastSearch",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Grade_ReportId",
                table: "Grade",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_Grade_SubjectId",
                table: "Grade",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Favorite_SchoolId",
                table: "Favorite",
                column: "SchoolId");

            migrationBuilder.CreateIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_CurriculumSchool_CurriculumId",
                table: "CurriculumSchool",
                column: "CurriculumId");

            migrationBuilder.CreateIndex(
                name: "IX_CurriculumSchool_SchoolId",
                table: "CurriculumSchool",
                column: "SchoolId");

            migrationBuilder.AddForeignKey(
                name: "FK_CurriculumSchool_Curriculum_CurriculumId",
                table: "CurriculumSchool",
                column: "CurriculumId",
                principalTable: "Curriculum",
                principalColumn: "CurriculumID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CurriculumSchool_School_SchoolId",
                table: "CurriculumSchool",
                column: "SchoolId",
                principalTable: "School",
                principalColumn: "SchoolId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId1",
                table: "Favorite",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_School_SchoolId",
                table: "Favorite",
                column: "SchoolId",
                principalTable: "School",
                principalColumn: "SchoolId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Grade_Report_ReportId",
                table: "Grade",
                column: "ReportId",
                principalTable: "Report",
                principalColumn: "ReportId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Grade_Subject_SubjectId",
                table: "Grade",
                column: "SubjectId",
                principalTable: "Subject",
                principalColumn: "SubjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LastSearch_AspNetUsers_UserId1",
                table: "LastSearch",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_LastSearch_School_SchoolId",
                table: "LastSearch",
                column: "SchoolId",
                principalTable: "School",
                principalColumn: "SchoolId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Report_AspNetUsers_UserId1",
                table: "Report",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CurriculumSchool_Curriculum_CurriculumId",
                table: "CurriculumSchool");

            migrationBuilder.DropForeignKey(
                name: "FK_CurriculumSchool_School_SchoolId",
                table: "CurriculumSchool");

            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId1",
                table: "Favorite");

            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_School_SchoolId",
                table: "Favorite");

            migrationBuilder.DropForeignKey(
                name: "FK_Grade_Report_ReportId",
                table: "Grade");

            migrationBuilder.DropForeignKey(
                name: "FK_Grade_Subject_SubjectId",
                table: "Grade");

            migrationBuilder.DropForeignKey(
                name: "FK_LastSearch_AspNetUsers_UserId1",
                table: "LastSearch");

            migrationBuilder.DropForeignKey(
                name: "FK_LastSearch_School_SchoolId",
                table: "LastSearch");

            migrationBuilder.DropForeignKey(
                name: "FK_Report_AspNetUsers_UserId1",
                table: "Report");

            migrationBuilder.DropIndex(
                name: "IX_Report_UserId1",
                table: "Report");

            migrationBuilder.DropIndex(
                name: "IX_LastSearch_SchoolId",
                table: "LastSearch");

            migrationBuilder.DropIndex(
                name: "IX_LastSearch_UserId1",
                table: "LastSearch");

            migrationBuilder.DropIndex(
                name: "IX_Grade_ReportId",
                table: "Grade");

            migrationBuilder.DropIndex(
                name: "IX_Grade_SubjectId",
                table: "Grade");

            migrationBuilder.DropIndex(
                name: "IX_Favorite_SchoolId",
                table: "Favorite");

            migrationBuilder.DropIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite");

            migrationBuilder.DropIndex(
                name: "IX_CurriculumSchool_CurriculumId",
                table: "CurriculumSchool");

            migrationBuilder.DropIndex(
                name: "IX_CurriculumSchool_SchoolId",
                table: "CurriculumSchool");

            migrationBuilder.DropColumn(
                name: "SchoolYear",
                table: "Report");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Report");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Report");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "LastSearch");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Favorite");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "LastSearch",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "SchoolId",
                table: "LastSearch",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "SubjectId",
                table: "Grade",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ReportId",
                table: "Grade",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Favorite",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "SchoolId",
                table: "Favorite",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "Label",
                table: "Favorite",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SchoolId",
                table: "CurriculumSchool",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "CurriculumId",
                table: "CurriculumSchool",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
