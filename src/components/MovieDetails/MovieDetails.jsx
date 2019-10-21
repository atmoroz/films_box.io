import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../stores/actions/action";

import './movieDetails.css';

class MovieDetails extends React.Component {

    async componentDidMount() {
        const { match: { params: {id} }, fetchDetails } = this.props;
        await fetchDetails(id);
    }

    renderGenreDetails = (genre, i, arr) => {
        return i < arr.length - 1 ? genre.name + ', ' : genre.name;
    }

    render() {
        const { backdrop_path, genres, original_title, overview, poster_path, release_date } = this.props.movieDetails;
        return(
            <section className='filmsDetails'>
                <div className="detailsHeader">
                    <img src={process.env.REACT_APP_IMG_URL_ORIGINAL+backdrop_path} alt="/"/>
                </div>
                <div className="detailsInfo">
                    <div className="filmsLogo">
                        <img src={process.env.REACT_APP_IMG_URL+poster_path} alt="/"/>
                        <button className='filmsButton'>Click Me</button>
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
        movieDetails: store.movieDetails
    };
  }
  
  function mapDispatcToProps(dispatch) {
    return {
        fetchDetails: (id) => dispatch(actions.fetchDetails(id))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatcToProps
  )(MovieDetails);