import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'

const logger = createLogger({
    timestamps: true,
    duration: true,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
