angular.module('app').service('ActorService', function() { 
    const service = {
        list: () => {
            return axios.get(axios.$base_url + '/actors/populated')
                    .then(res => {
                        return res.data
                    })
                    .catch(error => {
                        console.log(error);
                    })
        },
        get: (id) => {
            return axios.get(axios.$base_url + '/actors/' + id)
                    .then(res => {
                        return res.data
                    })
                    .catch(error => {
                        console.log(error);
                    })
        },
        delete: (id) => {
            return axios.delete(axios.$base_url + '/actors/' + id)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error);
                    })
        },
        add: (body) => {
            return axios.post(axios.$base_url + '/actors/', body)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })          
        },
        update: (id, body) => {
            return axios.patch(axios.$base_url + '/actors/update' + id, body)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        },
        append: (body) => {
            return axios.patch(axios.$base_url + '/actors/append', body)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        },
        detach: (body) => {
            return axios.patch(axios.$base_url + '/actors/detach', body)
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