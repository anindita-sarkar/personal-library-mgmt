app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/books');
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider
        .state('books', {
            url: '/books',
            templateUrl: 'templates/books/partial-books.html',
            controller: 'BookListController'
        })
        .state('books.newBook', {
            url: '/new',
            views: {

                'booksDetailView@books': {
                    templateUrl: 'templates/books/partial-book-add.html',
                    controller: 'BookCreateController'
                }

            }
        })
        .state('books.viewBook', {
            url: '/:id/view',
            views: {

                'booksDetailView@books': {
                    templateUrl: 'templates/books/partial-book-view.html',
                    controller: 'BookViewController'
                }

            }

        })
        .state('books.viewBook.editBook', {
            url: '/:id/edit',
            views: {

                'booksDetailView@books': {
                    templateUrl: 'templates/books/partial-book-edit.html',
                    controller: 'BookEditController'
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