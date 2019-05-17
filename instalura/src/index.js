import React from 'react';
import ReactDOM from 'react-dom';
import './css/timeline.css';
import './css/reset.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';

function verificaAutenticacao(nextState, replace){
    if(localStorage.getItem('auth-token') === null){
        replace('/');
    }
}


ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}  />
                <Route path="/timeline" component={App} onEnter={verificaAutenticacao}/>
            </Switch>
        </BrowserRouter>
    ),
     document.getElementById('root')
);