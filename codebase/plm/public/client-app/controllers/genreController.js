 app.controller('GenreController', function ($scope, GenreRespository, $stateParams) {
     $scope.genres = GenreRespository.query();
     $scope.genre = GenreRespository.find({
         id: $stateParams.id
     });

 });