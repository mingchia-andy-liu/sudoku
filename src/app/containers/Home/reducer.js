import types from './types'

const initState = {
    isLoading: false,
    data: [...Array(81).fill(0)],
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.REQUEST_START:
            return {
                ...state,
                isLoading: true,
            }
        case types.REQUEST_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
            }
        case types.REQUEST_ERROR:
            return {
                isLoading: false,
                data: [...Array(81).fill(0)],
            }
        default:
            return state
    }
}
