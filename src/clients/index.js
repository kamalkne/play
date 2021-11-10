const HOST = 'https://api.themoviedb.org/3/'
const API_KEY = '907987720fdeb20910b042514dbbacc0'
const language = 'en-US'

const tmdbClient = {
    find: (imdbId) => `${HOST}find/${imdbId}?api_key=${API_KEY}&language=${language}&external_source=imdb_id`,
    details: (movieId) => `${HOST}movie/${movieId}/videos?api_key=${API_KEY}`
}

module.exports = tmdbClient
