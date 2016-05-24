app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/books');
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider
        .state('books', {
            url: '/books',
            views: {

                '': {
                    templateUrl: 'templates/books/partial-books.html',
                    controller: 'BookController'
                },

                'columnOne@books': {
                    templateUrl: 'templates/books/partial-books-list.html'

                },

                'columnTwo@books': {
                    templateUrl: 'templates/books/partial-book-form.html'

                }

            }
        })
        .state('genres', {
            url: '/genres',
            templateUrl: 'templates/genres/partial-genres.html',
            controller: 'GenreListController'
        })
        .state('genres.newGenre', {
            url: '/new',
            views: {

                'genresDetailView@genres': {
                    templateUrl: 'templates/genres/partial-genre-add.html',
                    controller: 'GenreCreateController'
                }

            }
        })
        .state('genres.viewGenre', {
            url: '/:id/view',
            views: {

                'genresDetailView@genres': {
                    templateUrl: 'templates/genres/partial-genre-view.html',
                    controller: 'GenreViewController'
                }

            }

        })
        .state('genres.viewGenre.editGenre', {
            url: '/:id/edit',
            views: {

                'genresDetailView@genres': {
                    templateUrl: 'templates/genres/partial-genre-edit.html',
                    controller: 'GenreEditController'
                }

                
            }
        })

    ;
});