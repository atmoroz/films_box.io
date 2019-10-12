  
import { observable, action, } from "mobx";

class filmsStores {

    @observable films = [];
    @observable genres = {};
    @observable detailsFilms = {};
    @observable favoritFilms = [];

    @observable favoriteList = [];

    @action gettingMovie = async () => {
        try{
            const apiUrlFilm = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US&page=1');
            const dataFilm = await apiUrlFilm.json();
            this.films = dataFilm.results;
        } catch(error){
            console.log(error);
        } 
    };

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
        
    };
    @action gettingDetailsFilms = async (movie_id) => {
        try{
            const apiUrlDetailsFilms = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US`);
            const dataDetails = await apiUrlDetailsFilms.json();
            this.detailsFilms = dataDetails;
        } catch(error) {
            console.log(error)
        }
    };
    @action gettingFavoritsFilms = async () => {
        try{
            const arrIdFavoritsFilms = this.favoriteList.map((item) => fetch(`https://api.themoviedb.org/3/movie/${item}?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US`));
            const apiUrlFavoritsFilms = await Promise.all(arrIdFavoritsFilms);
            const dataFavorits = await Promise.all(apiUrlFavoritsFilms.map(item => item.json()));
            this.favoritFilms = dataFavorits;
        } catch(error) {
            console.log(error)
        }
        
    };
}
// .then(res => Promise.all([res[0].json(), res[1].json()]))
//     .then(res => console.log(res)); // real data :)
export default new filmsStores();