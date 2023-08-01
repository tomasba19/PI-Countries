import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Esta
//linea sirve para conectar nuestra App con la EXTENSION redux DEVTOOLS DEL NAVEGADOR

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) //esta
    //linea sirve para que podamos hacer peticiones a una API/SERVIDOR
)

export default store;