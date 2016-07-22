(function () {
	var app = angular.module("app");

	app.controller("SentenceQuestionController", function ($scope) {
	    $scope.initialSentence = "hockeylag  -  är  -  bästa  -  sveriges  -  brynäs";
	    $scope.wordAttemptOne = "";
	    $scope.wordAttemptTwo = "";
	    $scope.wordAttemptThree = "";
	    $scope.wordAttemptFour = "";
	    $scope.wordAttemptFive = "";
	    $scope.correctSentenceOne = ["brynäs", "är", "sveriges", "bästa", "hockeylag"];
	    $scope.correctSentenceTwo = ["sveriges", "bästa", "hockeylag", "är", "brynäs"];

	    $scope.CheckSentence = function () {
	        
	    }
	});

}());