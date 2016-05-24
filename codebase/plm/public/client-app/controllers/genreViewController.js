app.controller('GenreViewController', function ($scope, $state, $stateParams, $window, GenreRespository) {
    $scope.genre = GenreRespository.find({
        id: $stateParams.id
    });
    $scope.deleteGenre = function () {

        if ($window.confirm("Do you really want to delete " + $scope.genre.Name + " ?")) {
            GenreRespository.remove({
                id: $stateParams.id
            }, function () {
                $state.go('genres');
            });

        }

    }
});