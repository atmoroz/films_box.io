  
import { observable, action, configure } from "mobx";
// configure({enforceActions: 'observed'})

class filmsStores {

    @observable films = [];
    @observable genres = {};
    @observable detailsFilms = {};

    @action gettingMovie = async () => {
        try{
            const apiUrlFilm = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US&page=1');
            const dataFilm = await apiUrlFilm.json();
            this.films = dataFilm.results;
        } catch(error){
            console.log(error);
        } 
    }

    @action gettingGenres = async () => {
        try{
            const apiGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US');
            const dataGenres = await apiGenres.json();
            this.genres= dataGenres.genres.reduce((start, item) => ({
                ...start,
                [item.id]: item.name
            }), {})
        } catch(error) {
            console.log(error);
        }
        
    }
    @action gettingDetailsFilms = async (movie_id) => {
        const apiUrlDetailsFilms = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US`);
        const dataDetails = await apiUrlDetailsFilms.json();
        this.detailsFilms = dataDetails;
    }
}

export default new filmsStores();