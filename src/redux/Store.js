import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootRouter from './rootReducer'

const store = createStore(rootRouter, composeWithDevTools(
    applyMiddleware(logger, thunk)
))

// store.subscribe(() => {
//     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })
export default store
