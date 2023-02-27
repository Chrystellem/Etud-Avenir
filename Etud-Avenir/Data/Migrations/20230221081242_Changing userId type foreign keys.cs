using Microsoft.EntityFrameworkCore.Migrations;

namespace Etud_Avenir.Data.Migrations
{
    public partial class ChanginguserIdtypeforeignkeys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId1",
                table: "Favorite");

            migrationBuilder.DropForeignKey(
                name: "FK_LastSearch_AspNetUsers_UserId1",
                table: "LastSearch");

            migrationBuilder.DropForeignKey(
                name: "FK_Report_AspNetUsers_UserId1",
                table: "Report");

            migrationBuilder.DropIndex(
                name: "IX_Report_UserId1",
                table: "Report");

            migrationBuilder.DropIndex(
                name: "IX_LastSearch_UserId1",
                table: "LastSearch");

            migrationBuilder.DropIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Report");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "LastSearch");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Favorite");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Report",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "LastSearch",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Favorite",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "FavoriteId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LastSearchId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Report_UserId",
                table: "Report",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_FavoriteId",
                table: "AspNetUsers",
                column: "FavoriteId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_LastSearchId",
                table: "AspNetUsers",
                column: "LastSearchId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Favorite_FavoriteId",
                table: "AspNetUsers",
                column: "FavoriteId",
                principalTable: "Favorite",
                principalColumn: "FavoriteId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_LastSearch_LastSearchId",
                table: "AspNetUsers",
                column: "LastSearchId",
                principalTable: "LastSearch",
                principalColumn: "LastSearchId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Report_AspNetUsers_UserId",
                table: "Report",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Favorite_FavoriteId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_LastSearch_LastSearchId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Report_AspNetUsers_UserId",
                table: "Report");

            migrationBuilder.DropIndex(
                name: "IX_Report_UserId",
                table: "Report");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_FavoriteId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_LastSearchId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FavoriteId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastSearchId",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Report",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

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
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "LastSearch",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Favorite",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Favorite",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Report_UserId1",
                table: "Report",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_LastSearch_UserId1",
                table: "LastSearch",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId1",
                table: "Favorite",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_LastSearch_AspNetUsers_UserId1",
                table: "LastSearch",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Report_AspNetUsers_UserId1",
                table: "Report",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
