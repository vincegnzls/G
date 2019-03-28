import { combineReducers } from 'redux'
import addStatusModalData from '../modals/AddStatusModal/reducers'

export default combineReducers({
    addStatusModal: addStatusModalData,
})
