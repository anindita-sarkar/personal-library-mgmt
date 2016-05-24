app.factory('GenreRespository', function ($resource) {
    var resource = $resource("http://localhost:8000/api/genre/:id", {
            id: '@id'
        },

        {
            'query': {
                method: 'GET',
                isArray: true
            },
            'find': {
                method: 'GET',
                isArray: false
            },
            'update': {
                method: "PUT"
            },
            'save': {
                method: "POST"
            },
            'remove': {
                method: "DELETE"
            }
        }
    );
    return resource;
});