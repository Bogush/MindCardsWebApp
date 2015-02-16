/**
 * Created by Alexander Bogush on 2/13/2015.
 */
var MindCards = angular.module('MindCards', [
    'ngRoute',
    'MindCards.Header',
    'MindCards.Directives',
    'MindCards.Collection'
]);

MindCards.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/collection', {
            templateUrl: 'includes/collection/collection.html',
            controller: 'CollectionController'
        })
        .otherwise({redirectTo: '/collection'});
}]);
