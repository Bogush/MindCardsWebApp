/**
 * Created by Alexander Bogush on 2/17/2015.
 */
angular.module('MindCards.Collection')
    .controller('CollectionTrainingController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.collection = {id: 2, name: 'TrainingCollection', description: 'for testing training'};//TODO loading collection
        $scope.collection.cards = [
            {
                id: '1',
                question: 'Question1Question1Question1 Question1Question1Question1 Question1 Question1Question1 Question1 Question1 Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1',
                answer: 'Answer1',
                knowledgeRate: 1
            },
            {
                id: '2',
                question: 'Question2',
                answer: 'Answer2',
                knowledgeRate: 1
            },
            {
                id: '3',
                question: 'Question3',
                answer: 'Answer3',
                knowledgeRate: 1
            },
            {
                id: '4',
                question: 'Question4',
                answer: 'Answer4',
                knowledgeRate: 1
            },
            {
                id: '5',
                question: 'Question5',
                answer: 'Answer5',
                knowledgeRate: 1
            },
            {
                id: '6',
                question: 'Question6',
                answer: 'Answer6',
                knowledgeRate: 1
            },
            {
                id: '7',
                question: 'Question7',
                answer: 'Answer7',
                knowledgeRate: 1
            },
            {
                id: '8',
                question: 'Question8',
                answer: 'Answer8',
                knowledgeRate: 1
            }
        ];
        $scope.currentCard = $scope.collection.cards[0];//TODO algorithm for better training: the cards you know worse appear more often
        //rate is from 1 to 5. the worse you knew the answer the more often will the card appear
        //TODO move to config
        $scope.rateToFrequencyMap = {
            1: 1, 0: 5
        };

        $scope.nextCard = function () {
            var currentCardId = $scope.cardIds[_.random($scope.cardIds.length-1)];
            $scope.currentCard = _.filter($scope.collection.cards, {id : currentCardId})[0];
        };

        $scope.updateCurrentCardInQueue = function (currentCard) {
            _.pull($scope.cardIds, currentCard.id);
            var frequency = $scope.rateToFrequencyMap[currentCard.knowledgeRate];
            $scope.cardIds = _.shuffle($scope.cardIds.concat(_.times(frequency, function () {
                return currentCard.id;
            })));

        };

        $scope.rateCardKnowledge = function (rate) {
            $scope.currentCard.knowledgeRate = rate;
            $scope.updateCurrentCardInQueue($scope.currentCard);

        };

        $scope.updateCardIds = function () {
            _.forEach($scope.collection.cards, function(card) {
                var frequency = $scope.rateToFrequencyMap[card.knowledgeRate];
                $scope.cardIds = $scope.cardIds.concat(_.times(frequency, function() {return card.id;}));
            });
            $scope.cardIds = _.shuffle($scope.cardIds);
        };

        $scope.cardIds = [];
        $scope.updateCardIds();
    }]);
