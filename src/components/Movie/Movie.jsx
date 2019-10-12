import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import './Movie.css';

@observer class Movie extends React.Component {
    
    renderGenre = ((genre,i,arr) => {
        return (i < arr.length - 1) ? this.props.genreObj[genre] + ', ' : this.props.genreObj[genre];
    });

    showDetails(id) {
        this.props.history.push(`/movieDetails/${id}`);
    };
 
    render() {
        
        const { item } = this.props;
        return(
            <div className="movie_preview" onClick={this.showDetails.bind(this, item.id)}>
                <div className="movie_img">
                    <img className="movie_img__img" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="logan" width="100%" />
                    <span className="movie_year">{item.release_date.split('-')[0]}</span>
                </div>
                <div className="movie_description">
                    <div className="movie_description__item">
                        <h2 className="movie_name">
                            {item.title}
                        </h2>
                        <div className="movie_ganre">
                            { item.genre_ids.map(this.renderGenre) }
                        </div>
                    </div>
                    <div className="movie_rating">
                        {(Number.isInteger(item.vote_average)) ? 
                        item.vote_average + '.0' : 
                        item.vote_average}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Movie);