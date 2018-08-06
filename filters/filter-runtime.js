angular.module('app').filter('filterRuntime', () => {
    return (dataArray, start, end) => {
        if (start == undefined || end == undefined) return dataArray
        const newSet = []
        for (const item of dataArray) {
            const runtime = item.runtime
            if (runtime > start && runtime < end) {
                newSet.push(item)
            }
        }
        return newSet
    }
})