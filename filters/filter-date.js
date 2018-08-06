angular.module('app').filter('filterDate', () => {
    return (date) => {
        return date.substring(0, 10)
    }
})