import login from './login';
import { combineReducers } from 'redux'
import adminData from './adminData'

const rootReducer = combineReducers({ login,adminData})

export default rootReducer