const generateYoutubeVideoLink = (id) =>{
    return `https://www.youtube.com/watch?v=${id}`
}

const getTrailerLinkFromImdbMovieId = ({ gateways: { tmdbGateway } }) => async (imdbMovieId) => {
    const tmdbMovieId = await tmdbGateway.getTmdbMovieId(imdbMovieId)

    if (!tmdbMovieId) {
        return
    }

    const { key: youtubeId } = await tmdbGateway.getMovieVideos(tmdbMovieId)

    if (!youtubeId) {
        return
    }
    return generateYoutubeVideoLink(youtubeId)
}

module.exports = getTrailerLinkFromImdbMovieId
