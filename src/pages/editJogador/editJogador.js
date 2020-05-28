import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { buscarJogador, atualizarJogador, gravarJogador, listarJogadores } from '../../redux/actions/jogadoresActions';
import SideBar from '../sideBar';
import TopBar from '../topBar';
import { connect } from 'react-redux';


class EditarJogador extends React.Component {

    componentDidMount() {
        this.props.dispatch(buscarJogador(this.props.match.params.id))
    }
submit (props, dados , atualizarJogador) {
    atualizarJogador(dados,props)
    
}
    render() {
        console.log(this.props);
        
        
        const {handleSubmit} = this.props;

        return (
            <div className="container">
                <TopBar />
                <div className="row">
                    <div className="col-3">
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <h1>Editar Jogador</h1>
                        <form onSubmit={handleSubmit((fields) => this.submit(this.props, fields, atualizarJogador))}>                            <div className="form-group">
                                <label>Nome</label>
                                <Field component="input" name="name" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Nacionalidade</label>
                                <Field component="input" name="country" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Biografia</label>
                                <Field component="textarea" name="bio" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Gravar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

EditarJogador = reduxForm({
    form: 'jogadores'
})(EditarJogador)


EditarJogador = connect(state => ({
    initialValues: state.jogador.dados
  }), { load: buscarJogador })(EditarJogador);

export default EditarJogador;