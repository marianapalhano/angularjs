(function() {
    'use strict';
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
        
        MsgController.$inject = ['$scope', '$filter'];       

        function MsgController ($scope, $filter) {
            $scope.name = "Mariana";
            

            $scope.sayMessage = function() {
                return $filter('uppercase')("Hello World!");
            }
        }
})();