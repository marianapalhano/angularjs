(function() {
    'use strict';
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter)
        .filter('truth', TruthFilter);
        
        MsgController.$inject = ['$scope', 'lovesFilter'];       

        function MsgController ($scope, lovesFilter) {
            $scope.name = "Mariana";
            
            $scope.sayMessage = function() {
                return lovesFilter("Luke likes cookies");
            }
        }

        function LovesFilter() {
            return function(input) {
                input = input || "";
                input = input.replace("likes", "loves");
                return input;
            }
        }

        function TruthFilter() {
            return function(input, target, replace) {
                input = input || "";
                input = input.replace(target, replace);
                return input;
            }
        }
})();