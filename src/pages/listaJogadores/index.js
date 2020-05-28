import React from 'react'

import './listaJogadores.css'

import TopBar from '../topBar'
import SideBar from '../sideBar'
import { connect } from 'react-redux'
import { listarJogadores } from '../../redux/actions/jogadoresActions'
import { Link } from 'react-router-dom'

class ListaJogadores extends React.Component {

    componentDidMount() {
        this.props.dispatch(listarJogadores())
    }

    render() {
        const { error, loading, jogadores } = this.props;


        if (loading) {
            return <div>Carregando</div>
        }

        if (error) {
            return <div>Erro na requisição</div>
        }

        return (
            <div className="container">
                <TopBar />
                <div className="row">
                    <div className="col-3">
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <h1>Lista de Jogadores</h1>
                        <div>
                            <Link to="/jogadores/novo" className="btn btn-primary" >Novo Jogador</Link>
                        </div>
                        Quantidade de jogadores: {jogadores.length}

                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Nacionalidade</th>
                                    <th scope="col">Clube</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    jogadores.map((jogadores) => (
                                        <tr key={jogadores.id}>
                                            <td> {jogadores.name} </td>
                                            <td> {jogadores.country} </td>
                                            <td> {jogadores.team_name} - {jogadores.team_country}</td>
                                            <td>
                                                <Link className="btn btn-info" to={{pathname: '/jogadores/' + jogadores.id}}>Detalhes</Link>
                                                <Link className="btn btn-warning" to={{pathname: `/jogadores/edit/${jogadores.id}`}}>Editar</Link>
                                                <button className="btn btn-danger">Excluir</button>
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(store) {
    return {
        error: store.jogadores.error,
        jogadores: store.jogadores.dados,
        loading: store.jogadores.loading
    }
}

export default connect(mapStatetoProps)(ListaJogadores)