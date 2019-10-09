import React from 'react';
import { observer, inject } from 'mobx-react';

import './MovieDetails.css';

@inject('filmsStores')
@observer
class MovieDetails extends React.Component {

    async componentDidMount() {
        const { filmsStores: { gettingDetailsFilms }, match: { params: { id } } } = this.props;
        await gettingDetailsFilms(id);
    }

    renderGenre = ((genre,i,arr) => {
        return (i < arr.length - 1) ? genre.name + ', ' : genre.name;
    })

    render() {
        const { detailsFilms } = this.props.filmsStores;
        console.log(detailsFilms)
        return(
            <section className='filmsDetails'>
                <div className="detailsHeader">
                    <img src={`https://image.tmdb.org/t/p/original${detailsFilms.backdrop_path}`} alt="/"/>
                </div>
                <div className="detailsInfo">
                    <div className="filmsLogo">
                        <img src={`https://image.tmdb.org/t/p/original${detailsFilms.poster_path}`} alt="/"/>
                    </div>
                    <div className="filmsDescriptions">
                        <h2 className="filmsTitle">{ detailsFilms.original_title }</h2>
                        <div className='filmsOverview'>
                            { detailsFilms.overview }
                        </div>
                        <div className="filmsGanres">
                            <span> Genres: </span>
                            {detailsFilms.genres && detailsFilms.genres.map(this.renderGenre)}
                        </div>
                        <div className="filmsReliseDate">
                           Data release: { detailsFilms.release_date && detailsFilms.release_date.split('-')[0] }
                        </div>     
                    </div>
                </div>
            </section>
        )
    }
}

export default MovieDetails;