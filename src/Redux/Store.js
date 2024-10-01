import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { projectReducer } from "./project/Reducer";
import { ChatReducer } from "./Chat/Reducer";

import { issueReducer } from "./Issue/Reducer";
import { commentReducer } from "./Comment/Reducer";
import { subscriptionReducer } from "./Subscription/Reducer";

const rootReducer=combineReducers({
auth:authReducer,
project:projectReducer,
chat:ChatReducer,
comment:commentReducer,
issue:issueReducer,
subscriptIcon:subscriptionReducer
})


export const store =legacy_createStore(rootReducer,applyMiddleware(thunk));