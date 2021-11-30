(function() {
    'use strict';
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
        
        MsgController.$inject = ['$scope'];

        function MsgController ($scope) {
            $scope.name = "Mariana";

            $scope.sayMessage = function() {
                return "Hello World!";
            }
        }
})();