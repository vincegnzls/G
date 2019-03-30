import * as actionTypes from '../actions/actionTypes'

const initialState = {
    statusTags: [],
}

const homeData = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_STATUS_TAGS:
            return {
                ...state,
                statusTags: [...action.statusTags],
            }
        default:
            return state
    }
}

export default homeData
