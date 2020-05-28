import React from 'react'
import TopBar from '../topBar';
import SideBar from '../sideBar';
import { buscarJogador, atualizarJogador, gravarJogador, listarJogadores } from '../../redux/actions/jogadoresActions';
import { connect } from 'react-redux'


class InfoJogador extends React.Component {

    componentDidMount() {
        this.props.dispatch(buscarJogador(this.props.match.params.id))
    }

    render() {
        const { error, loading, jogador } = this.props;
        if (loading) {
            return <div>Carregando</div>
        }

        if (error) {
            if(error.request.status === 404 ){
                return <div>Jogador não encontrado</div>
            }
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
                        <h1>Dados do Jogador</h1>
                        <div className="card">
                            <img className="card-img-top" src="holder.js/100x180/" alt="" />
                            <div className="card-body">

                                 <h4 className="card-title">Nome do Jogador: {jogador.name} </h4>
                                <p className="card-text">Nacionalidade: {jogador.country} </p>
                                <p className="card-text">Clube: {jogador.team_name} </p>
                                <p className="card-text">Pais: {jogador.team_country} </p>
                                <p className="card-text">Biografia: {jogador.bio} </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStatetoProps(store) {
    return {
        error: store.jogador.error,
        jogador: store.jogador.dados,
        loading: store.jogador.loading
    }
}
export default connect (mapStatetoProps)(InfoJogador);
