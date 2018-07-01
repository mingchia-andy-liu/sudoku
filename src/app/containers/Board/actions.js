import types from './types'

export const selectCell = (index) => (dispatch) => {
    dispatch({
        type: types.CELL_SELECTED,
        payload: index,
    })
}

export const unselectCell = () => (dispatch) => {
    dispatch({ type: types.CELL_UNSELECTED })
}

