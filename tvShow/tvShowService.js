const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class tvShowService{
    constructor(){
        this.tvShows = [new TvShow(createId(), "Supernatural", "Horror"), new TvShow(createId(), "GoT", "Drama")];
    }

    getAll(){
        return this.tvShows;
    }

    getById(id) {
        return this.tvShows.find(tvShow => tvShow.id === id);
    }

    createTvShow(name, genre) {
        const id = createId();
        const tvShow = new TvShow(id, name, genre);
        this.tvShows.push(tvShow);
        return tvShow;

    }

    deleteTvShow(id) {
        const tvShow = this.tvShows.find(tvShow => tvShow.id === id);
        this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);

        return this.tvShows;

    }

    updateShow(id, updatedTvShow) {
        this.tvShows = this.tvShows.map(tvShow => {
            if (tvShow.id === id){
                return Object.assign({}, tvShow, updatedTvShow);
            }
            return tvShow;
        });
        return this.getById(id);
    }
}
module.exports = tvShowService;