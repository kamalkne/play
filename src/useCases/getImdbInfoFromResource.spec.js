const getImdbInfoFromResourceFactory = require('./getImdbInfoFromResource')
const mockAllGateways = require('../../testHelpers')
const movieDetails = require('../../testHelpers/mocks/movieDetails.json')

describe('getImdbInfoFromResource', () => {
    let getImdbInfoFromResource
    const gateways = mockAllGateways()

    beforeEach(() => {
        getImdbInfoFromResource = getImdbInfoFromResourceFactory({ gateways })
    })

    describe('Get Imdb Info',() => {
        beforeEach(() => {
            gateways.movieGateway.getMovieDetails.mockResolvedValueOnce(movieDetails)
        })
        test('should return IMDB data',async () => {
            expect(await getImdbInfoFromResource('resourceLink')).toMatchSnapshot()
        })
    })

    describe('Error',() => {
        beforeEach(() => {
            gateways.movieGateway.getMovieDetails.mockResolvedValueOnce(undefined)
        })
        test('should return undefined when movie details are not available',async () => {
            expect(await getImdbInfoFromResource('resourceLink')).toBeUndefined()
        })
    })
})
