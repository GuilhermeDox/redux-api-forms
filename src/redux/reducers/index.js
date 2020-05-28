import { combineReducers } from "redux";
import jogadorReducer from "./jogadorReducer";
import {reducer as reduxFormReducer} from 'redux-form'
import buscaJogador from "./buscaJogador";

const Reducers = combineReducers({
    jogadores: jogadorReducer,
    form: reduxFormReducer,
    jogador : buscaJogador

})

export default Reducers;
