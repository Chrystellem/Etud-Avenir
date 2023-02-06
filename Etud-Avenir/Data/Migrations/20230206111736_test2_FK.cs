using Microsoft.EntityFrameworkCore.Migrations;

namespace Etud_Avenir.Data.Migrations
{
    public partial class test2_FK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TestId",
                table: "Test2",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Test2_TestId",
                table: "Test2",
                column: "TestId");

            migrationBuilder.AddForeignKey(
                name: "FK_Test2_Test_TestId",
                table: "Test2",
                column: "TestId",
                principalTable: "Test",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Test2_Test_TestId",
                table: "Test2");

            migrationBuilder.DropIndex(
                name: "IX_Test2_TestId",
                table: "Test2");

            migrationBuilder.AlterColumn<int>(
                name: "TestId",
                table: "Test2",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
