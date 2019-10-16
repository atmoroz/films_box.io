import React from 'react';
import { observer, inject } from 'mobx-react';

import Movie from '../Movie/Movie';
import Pagination from '../Pagination/Pagination';
import './Main.css';


@inject('filmsStores')

@observer class Main extends React.Component {

    async componentDidMount() {
        const { page } = this.props.match.params;
        const { gettingMovie, gettingGenres } = this.props.filmsStores;
        await Promise.all([gettingMovie(page), gettingGenres()]);
    }

    renderMovies = (item => {
        const {genres} = this.props.filmsStores;
        return(
            <Movie
                key={ item.id }
                id={ item.id } 
                item={ item }
                genreObj={ genres }
            />
        )
    })

    render() {
        const {films} = this.props.filmsStores;
        return(
            <section className="main">
                <div className="main_content layout">
                    { films.map(this.renderMovies) }                  
                </div>
                {<Pagination />}
            </section>
        );
    }
}

export default Main;