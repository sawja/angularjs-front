angular.module('app').service('MovieService', function() { 
    const service = {
        list: () => {
            return axios.get(axios.$base_url + '/movies/populated')
                    .then(res => {
                        return res.data
                    })
                    .catch(error => {
                        console.log(error);
                    })
        },
        get: (id) => {
            return axios.get(axios.$base_url + '/movies/' + id)
                    .then(res => {
                        return res.data
                    })
                    .catch(error => {
                        console.log(error);
                    })
        },
        delete: (id) => {
            return axios.delete(axios.$base_url + '/movies/' + id)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error);
                    })
        },
        add: (body) => {
            return axios.post(axios.$base_url + '/movies/', body)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })          
        },
        update: (id, body) => {
            return axios.patch(axios.$base_url + '/movies/update/' + id, body)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        },
        append: (body) => {
            return axios.patch(axios.$base_url + '/movies/append', body)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        },
        detach: (body) => {
            return axios.patch(axios.$base_url + '/movies/detach', body)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        },

    }
    return service
})