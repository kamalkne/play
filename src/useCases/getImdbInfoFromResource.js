const getImdbInfoFromResource = ({ gateways: { movieGateway } }) => async (resourceLink ) => {
    // TODO: Handle TV and other type of resource links

    // Movie
    const movieDetails = await movieGateway.getMovieDetails(resourceLink)
    if (!movieDetails) {
        return
    }
    // TODO: Use Ramda in order to make sure that we dont throw when below structure breaks
    return movieDetails['_embedded']['viaplay:blocks'][0]['_embedded']['viaplay:product'].content['imdb']
}

module.exports = getImdbInfoFromResource
