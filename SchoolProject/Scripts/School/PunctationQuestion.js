(function () {
    var app = angular.module("app");

    app.controller("PunctationQuestionController", function ($scope) {

        // Pågående pillande        
        //ex. "Hej, hur är läget? Roligt att höra!".replace(/[\,,\.,\?,\!]/g, "*"); -> "Hej* hur är läget* Roligt att höra*"

        // $scope.qg = questionGenerator;
        var question,
            answer,
            checkAnswer,
            noOfPChars,
            isCorrectAnswer = false;

        var punctuationSentences = ["Hej!", "Hej! Hur är läget?", "Mors lilla Olle i skogen gick. Rosor på kinden, solsken i blick!"];
        var punctuationCharsRegExp = /[\,,\.,\?,\!]/g;   // Todo: Lägg till fler
        var replaceChar = "*";

        $scope.guess =
		function guessedColor(guessed) {
		    if ($scope.answer == guessed) {
		        $scope.textanswer = "Ditt svar var korrekt";
		        $scope.points = 1;
		    }
		    else {
		        $scope.textanswer = "Ditt svar var inte korrekt";
		        $scope.points = 0;
		    }

		}

        $scope.answer = punctuationSentences[0];
        $scope.question = function () {
            return $scope.answer.replace(punctuationCharsRegExp, replaceChar);
        }();

        $scope.checkAnswer = function () {
            if ($scope.answer == $scope.userInput) {
                $scope.isCorrectAnswer = true
            }
            else {
                $scope.isCorrectAnswer = false
            }
            return isCorrectAnswer;
        };

    });



}());