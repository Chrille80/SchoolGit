(function () {
    var app = angular.module("app");

    app.controller("PictureQuestionController", function ($scope) {
        $scope.imageURL = "";
        $scope.userAnswer = "", $scope.userAnswerLowerCase = "", $scope.correctAnswer = "";
        $scope.answerInformation = "";
        $scope.taskComplete = false;
        $scope.points = 0;
        $scope.pictureSelect = 0;

        $scope.RandomizePicture = function () {
            $scope.pictureSelect = Math.floor(Math.random() * 3);

            if ($scope.pictureSelect == 0) {
                $scope.imageURL = "https://www.montereyboats.com/zupload/site-options/328ss-main111.png";
                $scope.correctAnswer = "båt";
            }
            if ($scope.pictureSelect == 1) {
                $scope.imageURL = "https://www.discountcar.com/images/cars/large/large-car10.png";
                $scope.correctAnswer = "bil";
            }
            if ($scope.pictureSelect == 2) {
                $scope.imageURL = "http://product-images.imshopping.com/nimblebuy/67-off-polar-express-728842-regular.jpg";
                $scope.correctAnswer = "tåg";
            }
        }

        $scope.CheckPictureGuess = function () {
            $scope.userAnswerLowerCase = $scope.userAnswer.toLowerCase();

            if ($scope.userAnswerLowerCase == $scope.correctAnswer) {
                $scope.points = 1;
                $scope.answerInformation = "Rätt!";
            }
            else {
                $scope.answerInformation = "Fel. Rätt svar var: " + $scope.correctAnswer + ".";
            }

            $scope.taskComplete = true;
        }

    });

}());