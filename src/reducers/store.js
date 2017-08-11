import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, push } from 'react-router-redux'


export const history = createHistory()
const historyMiddle = routerMiddleware(history)

// create own middleware save store to the local storage
const storeToLocal = store => next => action=>{
    localStorage.setItem("localStore",store.getState()) 
    return next(action)
}


const middleware = applyMiddleware(logger,thunk,historyMiddle,storeToLocal)

export default createStore(reducer,middleware)