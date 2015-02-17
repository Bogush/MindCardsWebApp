/**
 * Created by Alexander Bogush on 2/15/2015.
 */
angular.module('MindCards.Directives')
    .controller('CardPreviewController', function($scope) {
        $scope.delete = function($event) {
            console.log('deleted ' + $scope.card.id);
            $event.stopPropagation();
        };

        $scope.edit = function($event) {
            console.log('edit ' + $scope.card.id);
            $event.stopPropagation();
        };

    })
    .directive('cardPreview', function($compile) {
        return {
            restrict : 'E',
            scope : {
                card : '='
            },
            templateUrl : '/directives/card-preview/cardPreview.html',
            controller : 'CardPreviewController',
            link : function($scope, element, attrs) {
                var fastCardControls = angular.element('<span class="fastCardControls"/>');
                fastCardControls.append('<a class="btn btn-sm" >get</a>'
                    +'<a class="btn btn-sm" ng-click="edit($event)">edit</a>'
                    +'<a class="btn btn-sm" ng-click="delete($event)">del</a>');

                element.bind('mouseenter', function () {
                    $compile(fastCardControls)($scope);
                    element.find('.front, .back').append(fastCardControls);
                });

                element.bind('mouseleave', function () {
                    element.find('.fastCardControls').remove();
                });

                element.bind('click', function() {
                    element.find('.flipper').toggleClass('flipped');
                });
            }
        };
    });