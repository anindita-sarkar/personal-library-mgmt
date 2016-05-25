app.controller('GenreEditController', function ($scope, $state, $stateParams, GenreRespository) {
    $scope.genre = GenreRespository.find({
        id: $stateParams.id
    });

    $scope.updateGenre = function () {
        GenreRespository.update({
            id: $stateParams.id
        }, $scope.genre, function () {
            $state.go('genres');
        });

    };



});