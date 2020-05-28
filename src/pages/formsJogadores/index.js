import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { gravarJogador } from '../../redux/actions/jogadoresActions';
import SideBar from '../sideBar';
import TopBar from '../topBar';
class FormJogadores extends React.Component {

    submit (props, data, gravarJogador) {
        gravarJogador(data, props)
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
                        <h1>Novo Jogador</h1>
                        <form onSubmit={handleSubmit((fields) => this.submit(this.props, fields, gravarJogador))}>
                            <div className="form-group">
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


FormJogadores = reduxForm({
    form: 'jogadores',enableReinitialize: true
})(FormJogadores)

export default FormJogadores