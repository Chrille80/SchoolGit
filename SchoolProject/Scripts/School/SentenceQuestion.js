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
	    $scope.answerSentence = [];
	    $scope.answerInformation = "Answer information";
	    $scope.points = 0;
	    $scope.correctWords = 0;
	    $scope.incorrectWords = 0;
	    $scope.missingWords = 0;



	    $scope.CheckSentence = function () 
	    {
	        $scope.points = 0;
	        $scope.correctWords = 0;
	        $scope.incorrectWords = 0;
	        $scope.missingWords = 0;

	        $scope.CompareWord($scope.correctSentenceOne[0], $scope.wordAttemptOne);
            //Four more calls
	    }

	    $scope.CompareWord = function (correctWord, attemptWord) 
	    {
	        if(correctWord === attemptWord)
	        {
	            $scope.correctWords = $scope.correctWords + 1;
	            $scope.points = $scope.points + 1;
	        }
	        else if (correctWord != "" && correctWord != attemptWord)
	        {
	            $scope.incorrectWords = $scope.incorrectWords + 1;
	        }
	        else if (attemptWord === "")
	        {
	            $scope.missingWords = $scope.missingWords + 1;
	        }
	    }
	});

}());