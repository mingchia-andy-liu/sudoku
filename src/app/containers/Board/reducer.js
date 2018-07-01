import types from './types'

const initState = {
    selected: -1,
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.CELL_SELECTED:
            return { selected: action.payload }
        case types.CELL_UNSELECTED:
            return { selected: -1 }
        default:
            return state
    }
}
