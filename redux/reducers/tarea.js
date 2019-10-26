import {type as agregarTarea} from '../actions/agregarTarea'

//Este es el estado inicial de la aplicacion
const estadoInicial = [];

function reducer(state = estadoInicial, algo){
    switch(algo.type){
        case agregarTarea: {
            if(!algo.payload){
                return[]
            }
            return[
                ...state,
                algo.payload
            ]
        }
        default: 
            return state
    }
} 

export default reducer;