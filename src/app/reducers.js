import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import boardReducer from './containers/Board/reducer'
import homeReducer from './containers/Home/reducer'

export const initialState = {}
// combined reducer
export default combineReducers({
    home: homeReducer,
    board: boardReducer,
    routing,
})
