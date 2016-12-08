namespace SoftuniBlog.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Models;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Microsoft.AspNet.Identity;

    internal sealed class Configuration : DbMigrationsConfiguration<SoftuniBlog.Models.BlogDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
            ContextKey = "SoftuniBlog.Models.BlogDbContext";
        }

        protected override void Seed(SoftuniBlog.Models.BlogDbContext context)
        {
            if (!context.Roles.Any())
            {
                this.CreateRole(context, "Admin");
                this.CreateRole(context, "User");

            }

            if (!context.Users.Any())
            {
                this.CreateUser(context, "admin@admin.bg", "Admin", "123");
                this.SetRoleToUser(context, "admin@admin.bg", "Admin");
            }
        }

        private void SetRoleToUser(BlogDbContext context, string email, string role)
        {
            //creates user manager
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            //get user from database
            var user = context.Users.Where(u => u.Email == email).First();
            //adds role to user
            var result = userManager.AddToRole(user.Id, role);
            //validates result
            if (!result.Succeeded)
            {
                throw new Exception(string.Join("; ", result.Errors));
            }
        }

        private void CreateUser(BlogDbContext context, string email, string fullName, string password)
        {
            //create user manager
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            //set user manager password validator
            userManager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 1,
                RequireDigit = false,
                RequireLowercase = false,
                RequireNonLetterOrDigit = false,
                RequireUppercase = false
            };

            //create user object
            var admin = new ApplicationUser
            {
                UserName = email,
                Email = email,
                FullName = fullName
            };
            //create user
            var result = userManager.Create(admin, password);
            //validate result
            if (!result.Succeeded)
            {
                throw new Exception(string.Join("; ", result.Errors));
            }
        }

        private void CreateRole(BlogDbContext context, string roleName)
        {
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            var result = roleManager.Create(new IdentityRole(roleName));

            if (!result.Succeeded)
            {
                throw new Exception(string.Join("; ", result.Errors));
            }

       }
    }
}
