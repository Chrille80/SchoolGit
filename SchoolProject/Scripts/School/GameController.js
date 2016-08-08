(function () {

	var app = angular.module("app");

	var GameController = function ($scope, $http) {
		// Updates the ng-include directive, the date is to avoid caching
		var loadView = function (toView) {
			$scope.subView = toView + "?_cache=" + Date.now();
		}
		
		// Game data
		var game = {
			gameMode: {name:"Random", view:"", categoryId:0},
			score: 0,
			gameModes:
				[
					{ name: "Bild", view: "PictureQuestion", categoryId: 1 },
					{ name: "Skiljetecken", view: "PunctationQuestion", categoryId: 2 },
					{ name: "Mening", view: "SentenceQuestion", categoryId: 3 },
					{ name: "Färg", view: "ColorQuestion", categoryId: 4 },

					//{ name: "Kategori1", view: "Kategori1", categoryId: 1 },
					//{ name: "Kategori2", view: "Kategori2", categoryId: 2 },
					//{ name: "Kategori3", view: "Kategori2", categoryId: 3 },
					//{ name: "Kategori4", view: "Kategori3", categoryId: 4 },
				],
			level:0,
			maxLevel: 0,
			isRunning: false
		}

		// Load a new level, depending on the gameMode
		var changeLevel = function () {
			if (game.gameMode.name == 'Random') {
				loadView(game.gameModes[Math.floor(Math.random() * game.gameModes.length)].view);
			}
			else {
				loadView(game.gameMode.view);
			};
		}

		// Complete a level, adds score and loads a new question depending on mode
		var completeLevel = function (score) {
			if (game.isRunning) {
				if (game.level == game.maxLevel) {
					game.score = game.score + score;
					game.isRunning = false;
					$http({
						method: 'GET',
						url: '/Highscore/IsNewHighscore?category=' + game.gameMode.categoryId + '&score=' + game.score
					}).then(function successCallback(response) {
						
						if (response.data.success == true)
							loadView("NewHighscore");
						else
							loadView("EndOfGame");
					}, function errorCallback(response) {
						alert("error");
					});
					
				}
				else {
					game.score = game.score + score;
					game.level = game.level + 1;
					changeLevel();
				}
			}
		}

		// When starting new game
		var startGame = function (mode, maxLevel) {
			game.score = 0;
			game.level = 1;
			game.maxLevel = maxLevel;
			game.isRunning = true;


			// Setup of game.gameMode object
			game.gameMode = mode;
			if (game.gameMode == 'Random')
				game.gameMode = { name: "Random", categoryId:0 };
			else
			{
				// Find the object for specified gameMode in the array and set it as active gameMode
				for (var i = 0; i < game.gameModes.length; i++)
					if (game.gameModes[i].name == game.gameMode)
						game.gameMode = game.gameModes[i];
			}

			// Load a new level 
			changeLevel();
		}

		// These functions can be used by the subviews/controllers. Also gives access to the game object
		// Which holds the state of the game (score, level etc...)
		$scope.game = game;

		$scope.completeLevel = function (score) { completeLevel(score) };
		$scope.startGame = startGame;
		$scope.selectGame = function () { loadView("SelectGame") };
		$scope.showHighscores = function() {loadView("Highscores")};

		loadView("SelectGame");
	};

	app.controller("GameController", ["$scope", "$http", GameController]);

}());