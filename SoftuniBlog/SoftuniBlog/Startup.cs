using System.Data.Entity;
using Microsoft.Owin;
using Owin;
using SoftuniBlog.Migrations;
using SoftuniBlog.Models;

[assembly: OwinStartupAttribute(typeof(SoftuniBlog.Startup))]
namespace SoftuniBlog
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<BlogDbContext,Configuration>());

            ConfigureAuth(app);
        }
    }
}
