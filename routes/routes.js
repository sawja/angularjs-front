routes = [
    {
        name: 'movies',
        url: '/movies',
        component: 'movies',
        resolve: {
            movies: function(MovieService) {
                return MovieService.list()
            }
        }
    },
    {
        name: 'actors',
        url: '/actors',
        component: 'actors',
        resolve: {
            actors: function(ActorService) {
                return ActorService.list()
            }
        }
    },
    {
        name: 'movieEdit',
        url: '/movie-edit/:movieId',
        component: 'movieEdit',
        resolve: {
            movie: function(MovieService, $stateParams) {
                return MovieService.get($stateParams.movieId)
            },
            actors: function(ActorService) {
                return ActorService.list()
            }
        }
    }
    
]