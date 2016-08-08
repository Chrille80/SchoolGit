(function () {
	var app = angular.module("app");

	app.controller("SentenceQuestionController", function ($scope) {
	    $scope.initialSentence = "hockeylag  -  är  -  bästa  -  sveriges  -  brynäs";
	    $scope.wordAttemptOne = "", $scope.wordAttemptTwo = "", $scope.wordAttemptThree = "", $scope.wordAttemptFour = "", $scope.wordAttemptFive = "";
	    $scope.correctSentenceOne = ["brynäs", "är", "sveriges", "bästa", "hockeylag"];
	    $scope.correctSentenceTwo = ["sveriges", "bästa", "hockeylag", "är", "brynäs"];
	    $scope.answerInformation = "";
	    $scope.points = 0, $scope.pointsTwo = 0;
	    $scope.correctWords = 0, $scope.correctWordsTwo = 0;
	    $scope.incorrectWords = 0, $scope.incorrectWordsTwo = 0;
	    $scope.missingWords = 0, $scope.missingWordsTwo = 0;
	    $scope.scoreToSend = 0;
	    $scope.answerAttempted = false;


	    $scope.CheckSentence = function () 
	    {
	        $scope.points = 0, $scope.pointsTwo = 0;
	        $scope.correctWords = 0, $scope.correctWordsTwo = 0;
	        $scope.incorrectWords = 0, $scope.incorrectWordsTwo = 0;
	        $scope.missingWords = 0, $scope.missingWordsTwo = 0;

	        $scope.CompareWord($scope.correctSentenceOne[0], $scope.wordAttemptOne, 1);
	        $scope.CompareWord($scope.correctSentenceOne[1], $scope.wordAttemptTwo, 1);
	        $scope.CompareWord($scope.correctSentenceOne[2], $scope.wordAttemptThree, 1);
	        $scope.CompareWord($scope.correctSentenceOne[3], $scope.wordAttemptFour, 1);
	        $scope.CompareWord($scope.correctSentenceOne[4], $scope.wordAttemptFive, 1);

	        $scope.CompareWord($scope.correctSentenceTwo[0], $scope.wordAttemptOne, 2);
	        $scope.CompareWord($scope.correctSentenceTwo[1], $scope.wordAttemptTwo, 2);
	        $scope.CompareWord($scope.correctSentenceTwo[2], $scope.wordAttemptThree, 2);
	        $scope.CompareWord($scope.correctSentenceTwo[3], $scope.wordAttemptFour, 2);
	        $scope.CompareWord($scope.correctSentenceTwo[4], $scope.wordAttemptFive, 2);

	        $scope.answerAttempted = true;

	        if ($scope.points >= $scope.pointsTwo)
	        {
	            $scope.answerInformation = "Du fick " + $scope.points + " poäng! " + $scope.correctWords + " korrekt(a) ord, " + $scope.incorrectWords +
	            " inkorrekt(a) ord, " + $scope.missingWords + " saknade ord.";
	            $scope.scoreToSend = $scope.points;
	        }
	        else
	        {
	            $scope.answerInformation = "Du fick " + $scope.pointsTwo + " poäng! " + $scope.correctWordsTwo + " korrekt(a) ord, " + $scope.incorrectWordsTwo +
	            " inkorrekt(a) ord, " + $scope.missingWordsTwo + " saknade ord.";
	            $scope.scoreToSend = $scope.pointsTwo;
	        } 
	    }

	    $scope.CompareWord = function (correctWord, attemptWord, whatSentence) 
	    {
	        if (whatSentence == 1)
	        {
	            if (correctWord === attemptWord)
	            {
	                $scope.correctWords = $scope.correctWords + 1;
	                $scope.points = $scope.points + 1;
	            }
	            else if (attemptWord != "" && correctWord != attemptWord)
	            {
	                $scope.incorrectWords = $scope.incorrectWords + 1;
	            }
	            else if (attemptWord == "")
	            {
	                $scope.missingWords = $scope.missingWords + 1;
	            }
	        }
	        else
	        {
	            if (correctWord === attemptWord)
	            {
	                $scope.correctWordsTwo = $scope.correctWordsTwo + 1;
	                $scope.pointsTwo = $scope.pointsTwo + 1;
	            }
	            else if (attemptWord != "" && correctWord != attemptWord)
	            {
	                $scope.incorrectWordsTwo = $scope.incorrectWordsTwo + 1;
	            }
	            else if (attemptWord == "")
	            {
	                $scope.missingWordsTwo = $scope.missingWordsTwo + 1;
	            }
	        }   
	    }
	});

}());