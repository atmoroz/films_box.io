import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { directive } from 'babel-types';

class App extends React.Component {
  render() {
    return (
      <div className='filmsBox'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
