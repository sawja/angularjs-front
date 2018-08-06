angular.module('app').component('movies', {
    restrict: 'E',
    bindings: {
        movies: '='
    },
    templateUrl: 'components/movies/movies.html',
    controller: function(MovieService) {
        this.addMovie = (newMovie) => {
            const copy = JSON.parse(JSON.stringify(newMovie))
            this.movies.push(copy)
            MovieService.add(copy)
        }

        this.deleteMovie = (id, index) => {
            if (confirm("Movie will be removed. Confirm?")) {
                MovieService.delete(id)
                this.movies.splice(index, 1)
            } else {
                
            }      
        }
        
        this.search = ''
        this.runtimeRange = {}
        this.limit
    }    
})