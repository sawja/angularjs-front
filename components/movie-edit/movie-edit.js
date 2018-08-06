angular.module('app').component('movieEdit', {
    restrict: 'E',
    bindings: {
        movie: '=',
        actors: '='
    },
    templateUrl: 'components/movie-edit/movie-edit.html',
    controller: function(MovieService, ActorService, $state) {
        this.nmovie = {}

        this.options = []
        this.selectedOption = ''

        this.callbackSubmit = () => {
            const body = [
                { 'property': 'name', 'value': this.movie.name },
                { 'property': 'runtime', 'value': this.movie.runtime },
                { 'property': 'releaseDate', 'value': this.nmovie.releaseDate }
            ]
            MovieService.update(this.movie._id, body).then(res => {
                $state.go('movies')
            })
        }

        this.detachActor = (actorId, index) => {
            this.movie.actors.splice(index, 1)
            const body = {
                movieId: this.movie._id,
                actorId: actorId
            }
            MovieService.detach(body)
            ActorService.detach(body)
        }

        this.updateOptions = () => {
            if (this.options.length != 0) return
            for (const actor of this.actors) {
                this.options.push(actor.firstName + ' ' + actor.lastName)
            }
        }

        this.appendActor = () => {
           
            const res = this.selectedOption.split(' ')
            const selectedActor = this.actors.filter((actor) => {
                if (res[0] == actor.firstName && res[1] == actor.lastName) {
                    return true
                } else {
                    return false
                }
            })[0]
            if (selectedActor != undefined) {
                
                this.movie.actors.push(selectedActor)
                const body = {
                    movieId: this.movie._id,
                    actorId: selectedActor._id
                }
                MovieService.append(body)
                ActorService.append(body)

            }
            
        }
    }    
})