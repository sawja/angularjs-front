angular.module('app').filter('filterLimit', () => {
    return (dataArray, index) => {
        return dataArray.slice(0, index)
    }
})