import * as ACTION_TYPES_JOGADORES from '../actions/actionTypes/jogadoresActionTypes'

const estadoInicial = {
    dados: [],
    error: null,
    loading: false
}

export default (state = estadoInicial, action) => {
    switch (action.type) {
        case ACTION_TYPES_JOGADORES.BUSCA_JOGADOR_BEGIN: 
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case ACTION_TYPES_JOGADORES.BUSCA_JOGADOR_SUCCESS:
            return {
                ...state,
                loading: false,
                dados: action.payload.jogador
            }

        case ACTION_TYPES_JOGADORES.BUSCA_JOGADOR_FAILURE:
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