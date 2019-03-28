import { SET_VISIBILITY } from './actionTypes'

export const setVisibility = visibility => {
    return {
        type: SET_VISIBILITY,
        visibility,
    }
}
