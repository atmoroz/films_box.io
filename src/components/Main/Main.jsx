import React from 'react';

import Movie from '../Movie/Movie';
import './Main.css';

class Main extends React.Component {
    render() {
        return(
            <section className="main">
                <div className="main_content layout">                        
                    <Movie />
                </div>
            </section>
        );
    }
}

export default Main;