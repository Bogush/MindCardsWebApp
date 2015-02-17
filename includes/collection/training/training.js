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
                answer: 'Answer1'
            },
            {
                id: '2',
                question: 'Question2',
                answer: 'Answer2'
            },
            {
                id: '3',
                question: 'Question3',
                answer: 'Answer3'
            },
            {
                id: '4',
                question: 'Question4',
                answer: 'Answer4'
            },
            {
                id: '5',
                question: 'Question5',
                answer: 'Answer5'
            },
            {
                id: '6',
                question: 'Question6',
                answer: 'Answer6'
            },
            {
                id: '7',
                question: 'Question7',
                answer: 'Answer7'
            },
            {
                id: '8',
                question: 'Question8',
                answer: 'Answer8'
            }
        ];
        $scope.currentCard = $scope.collection.cards[0];//TODO algorithm for better training: the cards you know worse appear more often
        //rate is from 1 to 5. the worse you knew the answer the more often will the card appear
        //TODO move to config
        $scope.rateToFrequencyMap = {
            1: 5, 2: 4, 3: 3, 4: 2, 5: 1
        };

        $scope.changeCard = function () {
            var randomIndex = Math.floor(Math.random() * $scope.cardIds.length);
            var cardId = $scope.cardIds[randomIndex];
            $scope.cardIds.splice(randomIndex, 1);
            for (var card in $scope.collection.cards) {
                if (cardId == card.id) {
                    $scope.currentCard = card;
                    break;
                }
            }
        };

        $scope.updateCurrentCardIds = function (currentCard) {

            for (var i = 0; i < $scope.cardIds.length; i++) {
                if ($scope.cardIds[i] == currentCard.id) {
                    $scope.cardIds.splice(i, 1);
                }
            }

            var frequency = $scope.rateToFrequencyMap[currentCard.knowledgeRate];

            for (var i = 0; i < frequency; i++) {
                $scope.cardIds.push(currentCard.id);
            }

        };

        $scope.rateKnowledge = function (rate) {
            //TODO maybe there is a better name
            $scope.currentCard.knowledgeRate = rate;//TODO logic of keeping already seen times in mind. Or not?
            $scope.updateCurrentCardIds($scope.currentCard);

        };

        $scope.setCollection = function (collectionOfCards) {
            $scope.collection = collectionOfCards;
            $scope.cardIds = [];
            $scope.updateCardIds();
        };

        $scope.updateCardIds = function () {
            for (var card in $scope.collection.cards) {
                var frequency = $scope.rateToFrequencyMap[card.knowledgeRate];
                for (var i = 0; i < frequency; i++) {
                    $scope.cardIds.push(card.id);
                }
            }
        };

    }]);
