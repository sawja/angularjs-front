angular.module('app').component('movieAdd', {
    restrict: 'E',
    bindings: {
        onSubmit: '&'
    },
    templateUrl: 'components/movie-add/movie-add.html',
    controller: function() {
        this.newMovie = {}

        this.callbackSubmit = () => {
            this.onSubmit(
                {
                    newMovie: this.newMovie
                }
            )
        }

    }    
})