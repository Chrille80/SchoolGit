namespace SchoolProject.Migrations
{
	using Models;
	using System;
	using System.Data.Entity;
	using System.Data.Entity.Migrations;
	using System.Linq;

	internal sealed class Configuration : DbMigrationsConfiguration<SchoolProject.DAL.SchoolContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(SchoolProject.DAL.SchoolContext context)
        {
			//  This method will be called after migrating to the latest version.

			//  You can use the DbSet<T>.AddOrUpdate() helper extension method 
			//  to avoid creating duplicate seed data. E.g.
			//
			//    context.People.AddOrUpdate(
			//      p => p.FullName,
			//      new Person { FullName = "Andrew Peters" },
			//      new Person { FullName = "Brice Lambson" },
			//      new Person { FullName = "Rowan Miller" }
			//    );
			//

			for (int categoryCounter = 0; categoryCounter < 5; categoryCounter++)
			for (int i = 0; i < 10; i++)
			{
				Highscore postToInsert = new Highscore();
				postToInsert.Date = new DateTime(2014 - i, 12 - i, 20 -i);
				postToInsert.Name = "Olf Dolf " + i;
				postToInsert.Score = i;
				postToInsert.Category = (Category)categoryCounter;
				context.Highscores.AddOrUpdate(p => p.Name, postToInsert);
			}

			context.SaveChanges();
			
		}
    }
}
