import {applyMiddleware, combineReducers, createStore} from "redux";
import {AuthReducer} from "./reducers/authReducer";
import {TodoReducer} from "./reducers/todoReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducers = combineReducers({
    auth: AuthReducer,
    todo: TodoReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
export type TRootState = ReturnType<typeof rootReducers>