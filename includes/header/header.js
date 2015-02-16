/**
 * Created by Alexander Bogush on 2/13/2015.
 */

angular.module('MindCards.Header', [])
    .controller('HeaderController', ['$scope', function($scope) {
        $scope.user = undefined;

        $scope.login = function() {
            console.log('logged in');
            $scope.user = {};
        };

        $scope.logout = function() {
            console.log('logged out');
            $scope.user = undefined;
        };

    }])
.directive('header', function() {
        return {
           restrict : 'A',
           templateUrl : 'directives/header/header.html',
            controller : 'HeaderController',
            bindToController: true
        };
    });
