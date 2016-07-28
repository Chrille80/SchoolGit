(function () {
    var app = angular.module("app");

    app.controller("PunctationQuestionController", function ($scope) {

        // Pågående pillande        
        //ex. "Hej, hur är läget? Roligt att höra!".replace(/[\,,\.,\?,\!]/g, "*"); -> "Hej* hur är läget* Roligt att höra*"

        // $scope.qg = questionGenerator;
        var question, answer, questionGenerator;

        var punctuationCharsRegExp = /[\,,\.,\?,\!]/g;   // Todo: Lägg till fler
        var replaceChar = "*";
        var punctuationSentences = ["Hej! Hur är läget?", "Mors lilla Olle i skogen gick. Rosor på kinden, solsken i blick!"];

        $scope.answer = punctuationSentences[1];
        $scope.question = function () {
            console.log("Inne i questionGenerator!");
            return $scope.answer.replace(punctuationCharsRegExp, replaceChar);
        }();

        //app.filter("questionGenerator", function () {
        //    return function (input) {
        //        console.log("Inne i questionGenerator!");

        //        output = $scope.answer.replace(punctuationCharsRegExp, replaceChar);
        //        return output;
        //    }
        //});

    });



}());