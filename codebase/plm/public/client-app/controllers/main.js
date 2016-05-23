var app = angular.module('plm', ['ui.router']);

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/books');
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider
        .state('books', {
            url: '/books',
            views: {

                '': {
                    templateUrl: 'templates/partial-books.html',
                    controller: 'BookController'
                },

                'columnOne@books': {
                    templateUrl: 'templates/partial-books-list.html'

                },

                'columnTwo@books': {
                    templateUrl: 'templates/partial-book-form.html'

                }

            }
        })

    .state('genres', {
        url: '/genres',
        views: {

            '': {
                templateUrl: 'templates/partial-genres.html',
                controller: 'GenreController'
            },

            'columnOne@genres': {
                templateUrl: 'templates/partial-genres-list.html'
            },

            'columnTwo@genres': {
                templateUrl: 'templates/partial-genre-form.html'

            }

        }

    });
});