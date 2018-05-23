import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import userReducer from './reducers/userReducer'
import mathReducer from './reducers/mathReducer'
import topicsReducer from './reducers/topicsReducer'
import ledgerReducer from './reducers/ledgerReducer'

const store = createStore(
    combineReducers({
        mathReducer,
        userReducer,
        topicsReducer,
        ledgerReducer
    }),
    {},
    applyMiddleware(logger)
);

export default store