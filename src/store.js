import { applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { tabReducer } from './reducers/tabReducer'
import { todoReducers } from './reducers/todoReducer'
const reducer = combineReducers({
    todos : todoReducers,
    currentTab : tabReducer
})

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))

export default store