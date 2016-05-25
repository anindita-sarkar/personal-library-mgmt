app.controller('BookViewController', function ($scope, $state, $stateParams, $window, GenreRespository, BookRespository) {
    $scope.book ={};
    $scope.genre ={};
    
    var loadBook = function () {
        $scope.book = BookRespository.find({
            id: $stateParams.id
        }, function () {
            $scope.genre = GenreRespository.find({
                id: $scope.book.Genre_ID
            });
        });

    };


    $scope.deleteBook = function () {

        if ($window.confirm("Do you really want to delete " + $scope.book.Title + " ?")) {
            BookRespository.remove({
                id: $stateParams.id
            }, function () {
                $state.go('books');
            });

        }

    };
    loadBook();
});