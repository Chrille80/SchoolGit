(function () {
	var app = angular.module("app");

	app.controller("ColorQuestionController", function ($scope) {
		$scope.test = "Klicka på rutan med samma färg som den här texten!";
		$scope.farg = randomWebColor();//"#FF00FF";

		function randomWebColor(){
		    var webcolors = new Array("00","33","66","99","CC","FF");
		    return '#'+webcolors[Math.floor(Math.random()*6)]+webcolors[Math.floor(Math.random()*6)]+webcolors[Math.floor(Math.random()*6)]
		}
	});

}());