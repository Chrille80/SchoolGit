using SchoolProject.DAL;
using SchoolProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolProject.Controllers
{
    public class HighscoreController : Controller
    {
		HighscoreService _highscoreService = new HighscoreService();

        public JsonResult All(Category? category)
        {
			if (_highscoreService.IsValidCategory(category))
				return Json(_highscoreService.GetHighscores((Category)category),JsonRequestBehavior.AllowGet);
			else
				return Json(new { success = false },JsonRequestBehavior.AllowGet);
        }

		public JsonResult IsNewHighscore(Category? category, int score)
		{
			if (_highscoreService.IsValidCategory(category) && score > 0)
			{
				bool success = _highscoreService.IsNewHighscore(score, (Category)category);
				return Json(new { success = success }, JsonRequestBehavior.AllowGet);
			}
			else
				return Json(new { success = false }, JsonRequestBehavior.AllowGet);
		}

		public JsonResult Add(Category? category, string name, int score)
		{
			if (_highscoreService.IsValidCategory(category) && score > 0 && string.IsNullOrWhiteSpace(name) == false)
			{
				_highscoreService.AddHighscore(score, name, (Category)category);
				return Json(new { success = true }, JsonRequestBehavior.AllowGet);
			}
			else
				return Json(new { success = false }, JsonRequestBehavior.AllowGet);
		}

	}
}