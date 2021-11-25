(function() {
    'use strict';
    angular.module('myApp', [])
        .controller('myController', function($scope) {
            $scope.text = "Hello World";
            $scope.sayHello = function() {
                return "Hello!";
            };
        });
})();