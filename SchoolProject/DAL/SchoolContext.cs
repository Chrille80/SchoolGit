using SchoolProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SchoolProject.DAL
{
	public class SchoolContext : DbContext
	{
		public DbSet<Highscore> Highscores { get; set; }
	}
}