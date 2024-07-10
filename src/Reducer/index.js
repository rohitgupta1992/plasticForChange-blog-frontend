import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
export const rootReducer = combineReducers({
AuthRuducer:authReducer,
BlogReducer:blogReducer
})