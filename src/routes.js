import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ListaJogadores from './pages/listaJogadores';
import InfoJogador from './pages/infoJogador';
import FormJogadores from './pages/formsJogadores';
import EditarJogador from './pages/editJogador/editJogador';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/jogadores' exact component={ListaJogadores} />
                    <Route path='/jogadores/novo' exact component={FormJogadores} />
                    <Route path='/jogadores/edit/:id' exact component={EditarJogador} />
                    <Route path='/jogadores/:id' exact component={InfoJogador} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;