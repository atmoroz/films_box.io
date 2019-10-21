import React from 'react';
import { withRouter } from "react-router";

import './Movie.css';

class Movie extends React.Component {

    renderGenre = (genres, i, arr) => {
        return i < arr.length - 1 ? this.props.genreObj[genres] + ', ' : this.props.genreObj[genres];
    
    };
    
    filmDetails = () => {
        const id = this.props.id;
        this.props.history.push(`/movie/${id}`);
    };

    render() {
        const { item } = this.props;
        return(
            <div className='movieWrap' onClick = {this.filmDetails}>
                <div className="movie_preview">
                    <div className="movie_img">
                        <img className="movie_img__img" src={process.env.REACT_APP_IMG_URL+item.poster_path} alt="logan" width="100%" />
                        <span className="movie_year">{item.release_date.split('-')[0]}</span>
                    </div>
                    <div className="movie_description">
                        <div className="movie_description__item">
                            <h2 className="movie_name">
                                { item.original_title }
                            </h2>
                            <div className="movie_ganre">
                                { item.genre_ids.map( this.renderGenre ) }
                            </div>
                        </div>
                        <div className="movie_rating">
                            { item.vote_average }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Movie);