/**
 * Created by Alexander Bogush on 2/19/2015.
 */
angular.module('MindCards.Directives')
    .directive('cardTraining', function() {
        return {
            restrict : 'E',
            scope : {
                card : '=',
                collection : '@',
                rateCardKnowledge: '&',
                nextCard: '&'
            },
            templateUrl : '/directives/card-training/cardTraining.html',
            controller : function($scope, $timeout) {
                $scope.knowledgeOk = function($event) {
                    $scope.rateCardKnowledge({rate : 1});
                    $scope.toggleNextCard();
                };

                $scope.knowledgeNotOk = function($event) {
                    $scope.rateCardKnowledge({rate : 0});
                    $scope.toggleNextCard();
                };

                $scope.toggleNextCard = function() {
                    $timeout($scope.nextCard, 200);
                };

            },
            link : function($scope, element, attrs) {
                element.bind('click', function() {
                    element.find('.flipper').toggleClass('flipped');
                });
            }
        };
    });