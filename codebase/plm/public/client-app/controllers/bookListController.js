app.controller('BookListController', function ($scope, BookRespository) {

    var loadBooks = function () {
        $scope.books = BookRespository.query();
    }

    $scope.$on('$stateChangeSuccess', function () {
        loadBooks();
    });
});