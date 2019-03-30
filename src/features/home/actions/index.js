import * as actionTypes from './actionTypes'

export const updateStatusTags = statusTags => {
    return {
        type: actionTypes.UPDATE_STATUS_TAGS,
        statusTags,
    }
}
