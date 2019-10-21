import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MovieDetails from './components/MovieDetails/MovieDetails'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='filmsBox'>
          <Header />
          <Route exact path="/" component={ Main } />
          <Route path="/movie/:id" component={ MovieDetails } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
