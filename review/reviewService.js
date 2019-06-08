const Review = require ('./Review');
const createId = require ('../utils/idUtil');

class ReviewService {
    constructor(){
        this.review = [new Review(createId(), "test", "test")];
    }

    createReview(tvShowId, content, score) {
        const id = createId();
        const review = new Review(id, content, score, tvShowId);
        this.review.push(review);

        return review;
    }

    getAll() {
        return this.review;
    }

    getReviewById(id) {
        return this.review.find(review => review.id === id);
    }
}
module.exports = ReviewService;