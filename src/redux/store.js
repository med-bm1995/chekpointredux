import { createStore } from 'redux'
import { reducer } from '../redux/reducer'

export let store = createStore(reducer);
//export let todos = createStore(reducer);

/*export let store = createStore(reducer);*/