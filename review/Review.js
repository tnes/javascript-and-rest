class Review {
    constructor(id, content, score, relatedItemId) {
        this.id = id;
        this.content = content;
        this.score = score;
        this.releatedItemId = relatedItemId;
    }
}
module.exports = Review;