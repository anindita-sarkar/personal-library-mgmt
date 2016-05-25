app.controller('BookEditController', function ($scope, $state, $stateParams, GenreRespository, BookRespository) {
    $scope.book = BookRespository.find({
        id: $stateParams.id
    });
    $scope.genres = GenreRespository.query();
    
    $scope.updateBook = function () {
        BookRespository.update({
            id: $stateParams.id
        }, $scope.book, function () {
            $state.go('books');
        });

    };

});