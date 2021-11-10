const https = require('https')

const movieGateway =  {
    getMovieDetails: async (resourceLink) => {
        return new Promise((resolve) => {
            let data = ''
            https.get(resourceLink, res => {
                res.on('data', chunk => {
                    data += chunk
                })
                res.on('end', () => {
                    resolve(data !== '' && JSON.parse(data))
                })
            })
        })
    }
}

module.exports = movieGateway
