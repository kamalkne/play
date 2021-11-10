const gateways = require('../gateways')
const getImdbInfoFromResourceFactory = require('./getImdbInfoFromResource')
const getTrailerLinkFromImdbMovieIdFactory = require('./getTrailerLinkFromImdbMovieId')

const createUseCases = () => {
    const getImdbInfoFromResource = getImdbInfoFromResourceFactory({
        gateways
    })

    const getTrailerLinkFromImdbMovieId = getTrailerLinkFromImdbMovieIdFactory({
        gateways
    })

    return {
        getImdbInfoFromResource,
        getTrailerLinkFromImdbMovieId
    }
}

module.exports = createUseCases
