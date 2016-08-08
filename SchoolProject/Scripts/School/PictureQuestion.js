(function ()
{
	var app = angular.module("app");

	app.controller("PictureQuestionController", function ($scope)
	{
	    $scope.imageURL = "https://www.montereyboats.com/zupload/site-options/328ss-main111.png";
	    $scope.userAnswer = "", correctAnswer = "";
	    $scope.progress = 0;
	    $scope.answerInformation = "";
	    $scope.answerAttempted = false, $scope.taskComplete = false;
	    $scope.points = 0;

	    $scope.CheckPictureGuess = function () 
	    {
	        $scope.answerAttempted = true;

	        if($scope.progress == 0)
	        {
	            $scope.correctAnswer = "Båt";

	            if($scope.userAnswer == $scope.correctAnswer)
	            {
	                $scope.points = $scope.points + 1;
                    $scope.answerInformation = "Rätt!"
	            }
	            else
	            {
	                $scope.answerInformation = "Fel. Rätt svar var Båt";
	            }

	            $scope.progress = 1;
	            $scope.imageURL = "https://pixabay.com/static/uploads/photo/2015/10/01/17/17/car-967387_960_720.png";
	        }

	        else if ($scope.progress == 1)
	        {
	            $scope.correctAnswer = "Bil";

	            if ($scope.userAnswer == $scope.correctAnswer)
	            {
	                $scope.points = $scope.points + 1;
	                $scope.answerInformation = "Rätt!"
	            }
	            else
	            {
	                $scope.answerInformation = "Fel. Rätt svar var Bil";
	            }

	            $scope.progress = 2;
	            $scope.imageURL = "http://product-images.imshopping.com/nimblebuy/67-off-polar-express-728842-regular.jpg";
	        }

	        else if ($scope.progress == 2)
	        {
	            $scope.correctAnswer = "Tåg";

	            if ($scope.userAnswer == $scope.correctAnswer)
	            {
	                $scope.points = $scope.points + 1;
	                $scope.answerInformation = "Rätt! Du fick totalt " + $scope.points + " poäng!"
	            }
	            else
	            {
	                $scope.answerInformation = "Fel. Rätt svar var Tåg. Du fick totalt " + $scope.points + " poäng!";
	            }

	            $scope.taskComplete = true;
	        }
	    }
	});

}());