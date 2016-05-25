app.controller('GenreCreateController', function ($scope, $state, GenreRespository) {
    $scope.genre = {};

    $scope.addGenre = function (isValid) {
        if (isValid) {
            GenreRespository.save($scope.genre, function () {
                $state.go('genres');
            });

        }

    }
});