import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import './App.css';

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
