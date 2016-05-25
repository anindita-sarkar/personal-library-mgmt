app.controller('BookCreateController', function ($scope, $state, BookRespository, GenreRespository) {
    $scope.book = {};
    $scope.genres = GenreRespository.query();
    $scope.addBook = function () {
        BookRespository.save($scope.book, function () {
            $state.go('books');
        });

    }
});