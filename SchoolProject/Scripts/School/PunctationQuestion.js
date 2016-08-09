(function () {
    var app = angular.module("app");

    app.controller("PunctationQuestionController", function ($scope) {

        // Pågående pillande        
        //ex. "Hej, hur är läget? Roligt att höra!".replace(/[\,,\.,\?,\!]/g, "*"); -> "Hej* hur är läget* Roligt att höra*"

        // $scope.qg = questionGenerator;


        $scope.userInput = "";
        //$scope.question = "Test";
       $scope.answer = "";
        //$scope.noOfPChars
       // $scope.punctuationQuestionSelect = 0;
        $scope.isCorrectAnswer = false, $scope.answerMade = false;

        var punctuationSentences = ["Hej!", "Hej! Hur är läget?", "Mors lilla Olle i skogen gick. Rosor på kinden, solsken i blick!"];
        var punctuationCharsRegExp = /[\,,\.,\?,\!]/g;   // Todo: Lägg till fler
        var replaceChar = "*";


        $scope.guess = function guessedColor(guessed)
		{
		    if ($scope.answer == guessed) {
		        $scope.textanswer = "Ditt svar var korrekt";
		        $scope.points = 1;
		    }
		    else
		    {
		        $scope.textanswer = "Ditt svar var inte korrekt";
		        $scope.points = 0;
		    }
        }


        $scope.question = function ()
        {
            return $scope.answer.replace(punctuationCharsRegExp, replaceChar);
        };

        $scope.checkAnswer = function () {
            if ($scope.answer == $scope.userInput) {
                //$scope.isCorrectAnswer = true
                $scope.textanswer = "Ditt svar var korrekt";
                $scope.points = 1;
                $scope.answerMade = true;
            }
            else {
                //$scope.isCorrectAnswer = false
                $scope.textanswer = "Ditt svar var inte korrekt";
                $scope.points = 0;
                $scope.answerMade = true;
            }
            //return isCorrectAnswer;
        };

        $scope.RandomizePunctuationQuestion = function ()
        {
            $scope.punctuationQuestionSelect = Math.floor(Math.random() * 3);
            console.log("Inne i RandomizePunctuationQuestion()");

            console.log("random number:" + $scope.punctuationQuestionSelect);
            console.log("punctuationSentences" + punctuationSentences);

            //if ($scope.punctuationQuestionSelect == 0)
            //{
            //    $scope.answer = punctuationSentences[0];
            //}
            //if ($scope.punctuationQuestionSelect == 1)
            //{
            //    $scope.answer = punctuationSentences[1];
            //}
            //if ($scope.punctuationQuestionSelect == 2)
            //{
            //    $scope.answer = punctuationSentences[2];
            //} 
            $scope.answer = punctuationSentences[$scope.punctuationQuestionSelect];
           // $scope.answer = punctuationSentences[0];
        }

    });

}());