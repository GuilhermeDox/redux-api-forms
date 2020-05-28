import * as ACTION_TYPES_JOGADORES from '../actions/actionTypes/jogadoresActionTypes'

const estadoInicial = {
    dados: [],
    error: null,
    loading: false
}

export default (state = estadoInicial, action) => {
    switch (action.type) {
        case ACTION_TYPES_JOGADORES.LISTA_JOGADORES_BEGIN: 
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case ACTION_TYPES_JOGADORES.LISTA_JOGADORES_SUCCESS:
            return {
                ...state,
                loading: false,
                dados: action.payload.jogadores
            }

        case ACTION_TYPES_JOGADORES.LISTA_JOGADORES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                dados: []
            }
        
        default: 
            return state;
    }
}