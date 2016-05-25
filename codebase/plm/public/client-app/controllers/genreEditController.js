app.controller('GenreEditController', function ($scope, $state, $stateParams, GenreRespository) {
    $scope.genre = GenreRespository.find({
        id: $stateParams.id
    });

    $scope.updateGenre = function (isValid) {
        if (isValid) {
            GenreRespository.update({
                id: $stateParams.id
            }, $scope.genre, function () {
                $state.go('genres');
            });
        }
    };
});