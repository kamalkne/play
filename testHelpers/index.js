const tmdbGateway = require('../src/gateways/tmdbGateway')
const movieGateway = require('../src/gateways/movieGateway')

const mockAllGateways = () => {
    const _tmdbGateway = {}
    Object.keys(tmdbGateway).map((method) => {
        _tmdbGateway[method] = jest.fn()
    })

    const _movieGateway = {}
    Object.keys(movieGateway).map((method) => {
        _movieGateway[method] = jest.fn()
    })

    return {
        tmdbGateway: _tmdbGateway,
        movieGateway: _movieGateway
    }
}

module.exports = mockAllGateways
