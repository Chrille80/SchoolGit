using SchoolProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolProject.DAL
{
	public class HighscoreService
	{
		SchoolContext _db = new SchoolContext();
		
		public void AddHighscore(int score, string name, Category category)
		{
			Highscore highscoreToAdd = new Highscore();
			highscoreToAdd.Score = score;
			highscoreToAdd.Name = name;
			highscoreToAdd.Date = DateTime.Now;
			highscoreToAdd.Category = category;

			_db.Highscores.Add(highscoreToAdd);
			_db.SaveChanges();
		} 

		public bool IsValidCategory(Category? category)
		{
			if (Array.IndexOf(Enum.GetValues(typeof(Category)), category) != -1)
				return true;
			else
				return false;
		}

		public bool IsNewHighscore(int score, Category category)
		{
			if (_db.Highscores.Where(h => h.Category == category && h.Score > score ).Count() < 10)
				return true;
			else
				return false;
		}

		public IEnumerable<Highscore> GetHighscores(Category category)
		{
			return _db.Highscores.OrderByDescending(h => h.Score).ThenByDescending(h => h.Date).Where(h => h.Category == category).Take(10);
		}
		
	}
}