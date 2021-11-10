'use strict'

const express = require('express')
const createUseCases = require('./src/useCases')

const app = new express()

const useCases = createUseCases()


// TODO: Create handlers folder and separate files for individual endpoints
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/trailer', async (req, res) => {
    const movieResource = decodeURI(req.query.resource)

    const imdbDetails = await useCases.getImdbInfoFromResource(movieResource)

    if (!imdbDetails) {
        res.status(404).send('Not found')
    }
    const trailerLink = await useCases.getTrailerLinkFromImdbMovieId(imdbDetails.id)

    if (!trailerLink) {
        res.status(404).send('Not found')
    }

    res.send({ trailerLink })
})

app.listen(3000, () => {
    console.log('Server up!')
})
