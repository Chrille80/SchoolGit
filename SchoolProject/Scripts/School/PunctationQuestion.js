(function () {
    var app = angular.module("app");

    app.controller("PunctationQuestionController", function ($scope) {

        // Pågående pillande        
        //ex. "Hej, hur är läget? Roligt att höra!".replace(/[\,,\.,\?,\!]/g, "*"); -> "Hej* hur är läget* Roligt att höra*"

        // $scope.qg = questionGenerator;
        var checkAnswer, question, answer, questionGenerator, isCorrectAnswer = false;

        var punctuationCharsRegExp = /[\,,\.,\?,\!]/g;   // Todo: Lägg till fler
        var replaceChar = "*";
        var punctuationSentences = ["Hej!", "Hej! Hur är läget?", "Mors lilla Olle i skogen gick. Rosor på kinden, solsken i blick!"];

        $scope.answer = punctuationSentences[0];
        $scope.question = function () {
            console.log("Inne i questionGenerator!");
            return $scope.answer.replace(punctuationCharsRegExp, replaceChar);
        }();

        $scope.checkAnswer = function () {
            console.log("Inne i checkAnswer!");
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