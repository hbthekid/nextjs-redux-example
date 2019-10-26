import {createStore, combineReducers} from 'redux';
import tarea from '../redux/reducers/tarea';

/*
    El store es el centro neuralgico de Redux, por aca se entra a redux y los componentes
    entran en interaccion con redux. en pocas palabras este es el patio del modulo ksaen.
*/
const reducer = combineReducers({
    tarea
})

const store = createStore(reducer);

export default store;