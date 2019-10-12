import React from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';


@inject('filmsStores')
@observer class Favorites extends React.Component {

    async componentDidMount() {
        const { gettingFavoritsFilms } = this.props.filmsStores
        await gettingFavoritsFilms();
    }

    renderGenre = ((genre,i,arr) => {
        return (i < arr.length - 1) ? genre.name + ', ' : genre.name;
    });
    
    showDetails(id) {
        this.props.history.push(`/movieDetails/${id}`);
    };

    render(){
        const { favoritFilms } = this.props.filmsStores;
        return(
            favoritFilms.map(item => {
                return(
                    <div className="favoritsPage detailsInfo" key = {item.id} onClick={this.showDetails.bind(this, item.id)}>
                        <div className="filmsLogo" key = {item.id}>
                            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="/"/>
                        </div>
                        <div className="filmsDescriptions">
                            <h2 className="filmsTitle">{ item.title }</h2>
                            <div className='filmsOverview'>
                                { item.overview }
                            </div>
                            <div className="filmsGanres">
                                <span> Genres: </span>
                                {item.genres && item.genres.map(this.renderGenre)}
                            </div>
                            <div className="filmsReliseDate">
                                Data release: { item.release_date && item.release_date.split('-')[0] }
                            </div>     
                        </div>
                    </div>
                )
            })
        )
    }
}

export default withRouter(Favorites);