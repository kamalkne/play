# play
Movie Details


## Endpoints

`/trailer`

REST API for providing clients with trailer URLs.
The API takes a movie resource link (e.g. `https://content.viaplay.se/pc-se/film/arrival-2016`) as input and based on
that return the URL to the trailer for that movie.

## Notes

### Response format

`https://www.youtube.com/watch?v=AMgyWT075KY`

### Viaplay API

**Viaplay Content API**

`http://content.viaplay.se/pc-se/film`

**Viaplay Movie Resource Example Link**

`https://content.viaplay.se/pc-se/film/arrival-2016`

### TMDB Details

**API Key (v3 auth)**

`907987720fdeb20910b042514dbbacc0`

**Example API Request**

`https://api.themoviedb.org/3/movie/550?api_key=907987720fdeb20910b042514dbbacc0`

**API Read Access Token (v4 auth)**

`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDc5ODc3MjBmZGViMjA5MTBiMDQyNTE0ZGJiYWNjMCIsInN1YiI6IjYxOGI1Y2NkNTM0NjYxMDAyYWIyN2RhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PkepSuY3u1LHtGKnO-R1X5tJWO4HXndSQWh5kyolzjw`

