  
import { observable, action } from "mobx";

class filmsStores {

    @observable films = [];
    @observable genres = {};

    @action gettingMovie = async() => {
        const apiUrlFilm = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US&page=1');
        const dataFilm = await apiUrlFilm.json();
        this.films = dataFilm.results;
    }

    @action gettingGenres = async() => {
        const apiGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US');
        const dataGenres = await apiGenres.json();
        this.genres= dataGenres.genres.reduce((start, item) => ({
            ...start,
            [item.id]: item.name
        }), {})
    }
}

export default new filmsStores();