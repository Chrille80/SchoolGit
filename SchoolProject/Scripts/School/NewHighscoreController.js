(function () {

	var app = angular.module("app");

	var NewHighscoreController = function ($scope, $http) {


		$scope.submitHighscore = function (score) {
			$http({
				method: 'GET',
				url: '/Highscore/Add?Category=' + $scope.game.gameMode.categoryId + '&Name=' + $scope.name + '&Score=' + $scope.game.score
			}).then(function successCallback(response) {
				$scope.showHighscores();
				
			}, function errorCallback(response) {
				alert("error");
			});
		}

	};

	app.controller("NewHighscoreController", ["$scope", "$http", NewHighscoreController]);

}());