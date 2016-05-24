 app.controller('BookController', function ($scope,BookRespository) {
    $scope.books = BookRespository.query();
 });