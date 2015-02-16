/**
 * Created by Alexander Bogush on 2/15/2015.
 */
angular.module('MindCards.Directives',[])
    .controller('CardPreviewController', function($scope) {
        $scope.delete = function() {
            console.log('deleted ' + $scope.card);
        }

        $scope.edit = function() {
            console.log('edit ' + $scope.card);
        }

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
                var fastCardControls = angular.element('<span class="topRight"/>');
                fastCardControls.append('<a class="btn btn-sm" >get</a><a class="btn btn-sm" ng-click="edit()">edit</a><a class="btn btn-sm" ng-click="delete()">del</a>');
                $compile(fastCardControls)($scope);

                element.bind('mouseenter', function () {
                    element.children(0).append(fastCardControls);
                });

                element.bind('mouseleave', function () {
                    fastCardControls.remove();
                });

                element.bind('click', function() {
                    element.find('.flipper').toggleClass('flipped');
                });
            }
        };
    });