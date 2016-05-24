app.controller('GenreCreateController', function ($scope, $state, GenreRespository) {
    $scope.genre = {};

    $scope.addGenre = function () {
        GenreRespository.save($scope.genre);
        $state.go('genres');
    }



});