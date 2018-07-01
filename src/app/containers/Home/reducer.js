import types from './types'

const initState = {
    isLoading: false,
    hasError: false,
    data: [...Array(81).fill(0)],
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.REQUEST_START:
            return {
                ...state,
                isLoading: true,
                hasError: false,
            }
        case types.REQUEST_SUCCESS:
            return {
                isLoading: false,
                hasError: false,
                data: action.payload,
            }
        case types.REQUEST_ERROR:
            return {
                isLoading: false,
                hasError: true,
                data: [...Array(81).fill(0)],
            }
        default:
            return state
    }
}
