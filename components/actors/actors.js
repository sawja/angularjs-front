angular.module('app').component('actors', {
    restrict: 'E',
    bindings: {
        actors: '='
    },
    templateUrl: 'components/actors/actors.html',
    controller: function() {
        this.test = () => {
            console.log(this.actors)
        }
    }    
})