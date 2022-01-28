import { combineReducers } from "redux";
import getAllUsersReducer from "../getUsers/getUserReducer";

const rootReducer = combineReducers({
  allUsers:getAllUsersReducer
});

export default rootReducer;