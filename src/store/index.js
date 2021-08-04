import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import companyReducer from './companyReducer'


let reducers = combineReducers({ companyReducer })
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store