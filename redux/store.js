import {createStore, combineReducers} from 'redux';
import tarea from '../redux/reducers/tarea';

const reducer = combineReducers({
    tarea
})

const store = createStore(reducer);

export default store;