(function () {
    var app = angular.module("app");

    app.controller("PunctationQuestionController", function ($scope) {

        // Pågående pillande        

        $scope.qg = questionGenerator;

        //ex. "Hej, hur är läget? Roligt att höra!".replace(/[\,,\.,\?,\!]/g, "*");
        var question;
        var answer;

        var punctuationCharsRegExp = /[\,,\.,\?,\!]/g;   // Todo: Lägg till fler
        var replaceChar = "*";
        var punctuationSentences = ["Hej! Hur är läget?", "Mors lilla Olle i skogen gick. Rosor på kinden, solsken i blick!"];

        $scope.answer = punctuationSentences[1];

       var questionGenerator = function () {
            //question = answer.replace(punctuationCharsRegExp, replaceChar);
           console.log("Inne i questionGenerator!");
           return "hej";
        }

    });



}());