angular.module('MindCards.Collection', [])
    .controller('CollectionController', [ '$scope', '$routeParams', function($scope, $routeParams) {
        $scope.collection = {name : 'Collection1', description: 'Test Mock Collection'};
        $scope.collection.id = $routeParams.collectionId;
        $scope.collection.cards=[
            {
                id : '1',
                question : 'Question1Question1Question1 Question1Question1Question1 Question1 Question1Question1 Question1 Question1 Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1Question1Question1 Question1 Question1 Question1Question1 Question1 Question1 Question1',
                answer : 'Answer1'
            },
            {
                id : '2',
                question : 'Question2',
                answer : 'Answer2'
            },
            {
                id : '3',
                question : 'Question3',
                answer : 'Answer3'
            },
            {
                id : '4',
                question : 'Question4',
                answer : 'Answer4'
            },
            {
                id : '5',
                question : 'Question5',
                answer : 'Answer5'
            },
            {
                id : '6',
                question : 'Question6',
                answer : 'Answer6'
            },
            {
                id : '7',
                question : 'Question7',
                answer : 'Answer7'
            },
            {
                id : '8',
                question : 'Question8',
                answer : 'Answer8'
            }
        ];

    }]);