import {type as agregarTarea} from '../actions/agregarTarea'

/*Este es el estado inicial, si vienes de react recordaras el famoso constructor donde 
ponias this.state = {tareas : []}
*/
const estadoInicial = [];
/*
Los Reducers son los encargados de trabajar logicamente el estado(eliminar, 
borrar, agregar etc..) en pocas palabras aca suecede la "accion 1313!!"
*/
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