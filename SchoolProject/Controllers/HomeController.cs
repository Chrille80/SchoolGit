using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolProject.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult PictureQuestion()
		{
			return View();
		}

		public ActionResult ColorQuestion()
		{
			return View();
		}


		//	public enum Category { Random, Picture, Color, Sentence, Punctuation };

		public ActionResult SentenceQuestion()
		{
			return View();
		}

		public ActionResult PunctationQuestion()
		{
			return View();
		}



		//test
	}
}