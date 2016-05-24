app.controller('GenreListController', function ($scope, GenreRespository) {

    var loadGenres = function () {
        $scope.genres = GenreRespository.query();
    }

    $scope.$on('$stateChangeSuccess', function () {
        loadGenres();
    });
});