import React from 'react';
import { observer, inject } from 'mobx-react';

import './MovieDetails.css';

@inject('filmsStores')
@observer
class MovieDetails extends React.Component {

    async componentDidMount() {
        const { filmsStores: { gettingDetailsFilms }, match: { params: { id } } } = this.props;
        await gettingDetailsFilms(id);
        let { favoriteList } = this.props.filmsStores;
        let localList = localStorage.getItem('idFavorit');
        localList = JSON.parse(localList);
        if( localList !== null && favoriteList.length < 1 ) favoriteList.push(...localList);
    };

    renderGenre = ((genre,i,arr) => {
        return (i < arr.length - 1) ? genre.name + ', ' : genre.name;
    });


    addFaforits = () => {
        let {id} =  this.props.filmsStores.detailsFilms;
        let { favoriteList } = this.props.filmsStores;

        favoriteList.push(id);
        localStorage.setItem('idFavorit', JSON.stringify(favoriteList));
    }

    removeFaforits = () => {
        let {id} =  this.props.filmsStores.detailsFilms;
        let { favoriteList } = this.props.filmsStores;

        favoriteList.splice(favoriteList.indexOf(id), 1);
        localStorage.removeItem('idFavorit');
        if(favoriteList.length > 0) {
            localStorage.setItem('idFavorit', JSON.stringify(favoriteList));
        }
        return;  
    }

    chooseButton = () => {
        let { favoriteList } = this.props.filmsStores;
        let {id} = this.props.match.params;
        return favoriteList.includes(+id) ? <button className='filmsButton ' onClick={this.removeFaforits}>remove favorits</button> : 
        <button className='filmsButton ' onClick={this.addFaforits}>add favorits</button>
    }

    render() {
        const { detailsFilms } = this.props.filmsStores;
                
        return(
            <section className='filmsDetails'>
                <div className="detailsHeader">
                    <img src={`https://image.tmdb.org/t/p/original${detailsFilms.backdrop_path}`} alt="/"/>
                </div>
                <div className="detailsInfo">
                    <div className="filmsLogo">
                        <img src={`https://image.tmdb.org/t/p/original${detailsFilms.poster_path}`} alt="/"/>
                        { this.chooseButton() }
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