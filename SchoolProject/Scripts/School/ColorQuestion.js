(function () {
	var app = angular.module("app");

	app.controller("ColorQuestionController", function ($scope) {
		$scope.test = "Klicka på rutan med samma färg som den här texten!";
		$scope.color = randomWebColor();                                    //Syntax ex: "#FF00FF";

		function randomWebColor(){
		    var webcolors = new Array("00","FF");
		    return '#'+webcolors[Math.floor(Math.random()*2)]+webcolors[Math.floor(Math.random()*2)]+webcolors[Math.floor(Math.random()*2)]
		}

		$scope.guess = 
		function guessedColor(guessed){
		    alert(guessed === $scope.color);
		}
	});

}());