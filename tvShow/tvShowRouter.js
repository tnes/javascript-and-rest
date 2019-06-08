const express = require ('express');

const tvShowService = require('./tvShowService');

const tvShowRouter = express.Router();

const tSS = new tvShowService();

tvShowRouter.get('/', (req, res) => {
    res.json(tSS.getAll());
    });

tvShowRouter.route('/:tvShowId')

    .get((req, res) => {
        const tvShowId = req.params.tvShowId;
        console.log(`Fetching Tv Show with id ${tvShowId}`);
        res.send(tSS.getById(tvShowId)); })
    .delete((req, res) => {
        const tvShowId = req.params.tvShowId;
        res.send(tSS.deleteTvShow(tvShowId));
    })
    .put((req, res) => {
        const tvShowId = req.params.tvShowId;
        res.send(tSS.updateShow(tvShowId, req.body));

    });

tvShowRouter.post('/', (req, res) => {
    const name = req.body.name;
    const genre = req.body.genre;

    const newTvShow = tSS.createTvShow(name, genre);

    res.send(newTvShow);
});




module.exports = tvShowRouter;