using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SchoolProject.Models
{
	public enum Category { Random, Picture, Punctation, Sentence, Color };

	public class Highscore
	{
		[Key]
		public int Id { get; set; }

		public DateTime Date { get;set;}
		public string Name { get; set; }
		public int Score { get; set; }
		public Category Category { get;set;}

	}
}