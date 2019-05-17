import React, {Component} from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';

function App() {
    return (
        <div id="root">
            <div className="main">
                <Header/>
                <Timeline/>
            </div>
        </div>
    );
}

export default App;
