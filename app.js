/**
 * Created by Alexander Bogush on 2/13/2015.
 */
var MindCards = angular.module('MindCards', [
    'ngRoute',
    'MindCards.Header',
    'MindCards.Directives',
    'MindCards.Collection'
]).constant('_',_);

MindCards.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/collection', {
            templateUrl: 'includes/collection/collection.html',
            controller: 'CollectionController'
        })
        .when('/collections/:collectionId', {
            templateUrl: 'includes/collection/collection.html',
            controller: 'CollectionController'
        })
        .when('/collections/:collectionId/training', {
            templateUrl: 'includes/collection/training/training.html',
            controller: 'CollectionTrainingController'
        })
        .otherwise({redirectTo: '/collection'});
}]);
