import React from 'react';

import './Movie.css';

class Movie extends React.Component {
    
    render() {
        const {title, posters, year, rating, genres} = this.props;
        return(
            <div className="movie_preview">
                <div className="movie_img">
                    <img className="movie_img__img" src={`https://image.tmdb.org/t/p/w200${posters}`} alt="logan" width="100%" />
                    <span className="movie_year">{year.split('-')[0]}</span>
                </div>
                <div className="movie_description">
                    <div className="movie_description__item">
                        <h2 className="movie_name">
                            {title}
                        </h2>
                        <div className="movie_ganre">
                            {genres}
                        </div>
                    </div>
                    <div className="movie_rating">
                        {rating}
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;