import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

export const initialState = {}
// combined reducer
export default combineReducers({
    routing,
})
