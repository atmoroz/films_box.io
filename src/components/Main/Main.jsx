import React from 'react';
import { connect } from "react-redux";

import * as actions from "../../stores/actions/action";
import Movie from '../Movie/Movie';
import Pagination from '../Pagination/Pagination';

import './Main.css';

class Main extends React.Component {

    async componentDidMount() {
      const { page } = this.props.match.params;
      const { fetchMovie, fetchGenre } = this.props
      await Promise.all([fetchMovie(page), fetchGenre()])
    }

    movieRender = (item) => {
        return (<Movie 
            key = { `movie-${item.id}` }
            id = { item.id }
            item = { item }
            genreObj={this.props.genres}
        />)
    }

    render() {
        const { movies } = this.props;
        
        return(
            <section className="main">
                <div className="main_content layout">
                    { movies.map(this.movieRender) }                     
                    
                </div>
                <Pagination />
            </section>
        );
    }
}

function mapStateToProps(store) {
    return {
      movies: store.movies,
      genres: store.genres,
      totalPages: store.totalPages,
    };
  }
  
  function mapDispatcToProps(dispatch) {
    return {
      fetchMovie: (page) => dispatch(actions.fetchMovie(page)),
      fetchGenre: () => dispatch(actions.fetchGenre())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatcToProps
  )(Main);