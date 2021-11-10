const https = require('https')
const tmdbClient = require('../clients')

const tmdbGateway = {
    getTmdbMovieId: async (imdbId) => {
        return new Promise((resolve) => {
            let data = ''
            https.get(tmdbClient.find(imdbId), res => {
                res.on('data', chunk => {
                    data += chunk
                })
                res.on('end', () => {
                    resolve(data !== '' && JSON.parse(data)['movie_results'][0].id)
                })
            })
        })
    },

    getMovieVideos: async (movieId) => {
        return new Promise((resolve) => {
            let data = ''
            https.get(tmdbClient.details(movieId), res => {
                res.on('data', chunk => {
                    data += chunk
                })
                res.on('end', () => {
                    resolve(data !== '' && JSON.parse(data)['results'][0])
                })
            })
        })
    }
}

module.exports = tmdbGateway
