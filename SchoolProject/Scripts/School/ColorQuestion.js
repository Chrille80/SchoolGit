(function () {
	var app = angular.module("app");

	app.controller("ColorQuestionController", function ($scope) {
		$scope.test = "Klicka på rutan med samma färg som den här texten!";
		$scope.color = randomWebColor();                                    //Syntax ex: "#FF00FF";

		function randomWebColor(){
		    var colors = new Array("00","FF");
		    return '#'+colors[Math.floor(Math.random()*2)]+colors[Math.floor(Math.random()*2)]+colors[Math.floor(Math.random()*2)]
		}

		$scope.guess = 
		function guessedColor(guessed) {
		    //alert(guessed === $scope.color);
            if (guessed === $scope.color)
            {
                $scope.answer = "Ditt svar var korrekt";
                $scope.points = 1;
            }
            else
            {
                $scope.answer = "Ditt svar var inte korrekt";
                $scope.points = 0;
            }

		}
	});

}());