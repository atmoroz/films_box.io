import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../stores/actions/action";

import  { isChooseButton }  from '../../stores/selector/selector';
import './movieDetails.css';

class MovieDetails extends React.Component {

    async componentDidMount() {
        const { match: { params: {id} }, fetchDetails } = this.props;
        await fetchDetails(id);        
    }

    componentDidUpdate( prevProps ) {
        if( prevProps.favoriteList !== this.props.favoriteList ) {
           return(
               localStorage.setItem("favoriteId", JSON.stringify(this.props.favoriteList))
           )
        }
    };

    renderGenreDetails = (genre, i, arr) => {
        return i < arr.length - 1 ? genre.name + ', ' : genre.name;
    };

    addFavoritMovie = () => {
        const { addToFavorite } = this.props;
        addToFavorite();
    };

    removeFavoriteMovie = () => {
        const { removeIsFavorite } = this.props;
        removeIsFavorite();
    };

    clickChoose = () => {
        const { match: { params: { id } }, favoriteList } = this.props;
        isChooseButton( id, favoriteList ) ? this.removeFavoriteMovie() : this.addFavoritMovie();
    };

    render() {
        const { backdrop_path, genres, original_title, overview, poster_path, release_date } = this.props.movieDetails;
        const { match: { params: { id } }, favoriteList } = this.props;
        return(
            <section className='filmsDetails'>
                <div className="detailsHeader">
                    <img src={ backdrop_path !== null ? process.env.REACT_APP_IMG_URL_ORIGINAL+backdrop_path : `../image/noPoster.png` } alt="/"/>
                </div>
                <div className="detailsInfo">
                    <div className="filmsLogo">
                        <img src={ poster_path !== null ? process.env.REACT_APP_IMG_URL+poster_path : `../image/noImage.svg` } alt="/"/>
                        <button className='filmsButton' onClick={this.clickChoose}>{ isChooseButton( id, favoriteList ) ?  `remove favorits films` : `add favorits films`}</button>
                    </div>
                    <div className="filmsDescriptions">
                        <h2 className="filmsTitle">{original_title}</h2>
                        <div className='filmsOverview'>
                            {overview}
                        </div>
                        <div className="filmsGanres">
                            <span> Жанр: </span>
                            { genres && genres.map(this.renderGenreDetails) }
                        </div>
                        <div className="filmsReliseDate">
                           Дата выхода: {release_date && release_date}
                        </div>     
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(store) {
    return {
        movieDetails: store.movieDetails,
        favoriteList: store.favoriteList,
    };
}
  
function mapDispatcToProps(dispatch) {
    return {
        fetchDetails: (id) => dispatch(actions.fetchDetails(id)),
        addToFavorite: () => dispatch(actions.addToFavorite()),
        removeIsFavorite: () => dispatch(actions.removeIsFavorite())
    }
}
  
export default connect(
mapStateToProps,
mapDispatcToProps
)(MovieDetails);