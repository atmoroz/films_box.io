import React from 'react';

import Movie from '../Movie/Movie';
import './Main.css';

class Main extends React.Component {

    async componentDidMount() {
        await Promise.all([this.gettingMovie(), this.gettingGenres()]);
    }

    state = {
        films: [],
        genres: {}
    }
    
    gettingMovie = async() => {
        const apiUrlFilm = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US&page=1');
        const dataFilm = await apiUrlFilm.json();
        this.setState( { films: dataFilm.results } );
    }

    gettingGenres = async() => {
        const apiGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3ba8aa36d9cc706beaa7cd4d393225a3&language=en-US');
        const dataGenres = await apiGenres.json();
        this.setState({
            genres: dataGenres.genres.reduce((start, item) => ({
                ...start,
                [item.id]: item.name
            }), {})
        })
    }

    

    renderMovies = (item => {
        return(
            <Movie
                key={item.id} 
                title={item.title}
                posters={item.poster_path}
                year={item.release_date}
                rating={ Number.isInteger(item.vote_average) ? item.vote_average+'.0' : item.vote_average }
                genres={
                    item.genre_ids.map((item, i, arr) => {
                        return (i < arr.length - 1) ?  this.state.genres[item] + ', ' : this.state.genres[item];
                    })
                }
            />
        )
    })

    render() {
        return(
            <section className="main">
                <div className="main_content layout">
                    { this.state.films.map(this.renderMovies) }                  
                </div>
            </section>
        );
    }
}

export default Main;