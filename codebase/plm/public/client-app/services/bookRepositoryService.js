app.factory('BookRespository', function($resource) {

    return $resource('http://localhost:8000/api/book/:id', {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});