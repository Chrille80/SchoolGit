(function () {

	var app = angular.module("app");

	var HighscoresController = function ($scope, $http) {

		$scope.highscores = [];
		$scope.highscoreCategory = $scope.game.gameMode.categoryId;

		$scope.showHighscoresForCategory = function (category) {
			$scope.highscoreCategory = category;
			$http({
				method: 'GET',
				url: '/Highscore/All?Category=' + category
			}).then(function successCallback(response) {
				$scope.highscores = response.data;
				for (var i = 0; i < $scope.highscores.length; i++)
					$scope.highscores[i].Position = (i+1);
			}, function errorCallback(response) {
				alert("error");
			});
		}

		$scope.showHighscoresForCategory($scope.highscoreCategory);

	};

	app.controller("HighscoresController", ["$scope", "$http", HighscoresController]);

}());