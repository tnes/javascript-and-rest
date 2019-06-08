const express =  require ('express');
const reviewService = require ('./reviewService');

const reviewRouter = express.Router();

const rSS = new reviewService();

reviewRouter.get('/', (req, res) => {
    res.json(rSS.getAll());
});

reviewRouter.route('/:tvShowId')
    .put((req, res) => {
        const id = req.params.tvShowId;
        const content = req.body.content;
        const score = req.body.score;
        res.send(rSS.createReview(id, content, score));
    })
    .get((req, res) => {
        const id = req.params.tvShowId;

        res.send(rSS.getReviewById(id));
    });

module.exports = reviewRouter;