import fetch from 'node-fetch'
import types from './types'

const baseURL = 'http://localhost:8080'

export const fetchBoard = () => async (dispatch) => {
    try {
        dispatch({ type: types.REQUEST_START })
        const bs = await fetch(`${baseURL}/sudoku/board`)
        const { data } = await bs.json()
        dispatch({
            type: types.REQUEST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({ type: types.REQUEST_ERROR })
    }
}
