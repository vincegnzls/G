import { SET_VISIBILITY } from '../actions/actionTypes'

const initialState = {
    visibility: false,
}

const addStatusModalData = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY:
            return {
                ...state,
                visibility: action.visibility,
            }
        default:
            return state
    }
}

export default addStatusModalData
