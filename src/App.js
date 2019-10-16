import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Favorites from './components/Favorites/Favorites';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='filmsBox'>
          <Header />
          <Route exact path="/" component = { Main } />
          <Route path="/page/:page" component = { Main } />
          <Route  path="/movieDetails/:id" component = { MovieDetails } />
          <Route path="/movieFavorites/" component = { Favorites } />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
