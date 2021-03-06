﻿(function(){
	var app = angular.module("app", []);

	app.filter("dateFilter", function () {
		return function (item) {
			if (item != null) {
				return new Date(parseInt(item.substr(6)));
			}
			return "";
		}
	});
}());