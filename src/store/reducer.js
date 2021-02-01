import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import authReducer from "./auth";

export default combineReducers({
  auth: authReducer,
  entities: entitiesReducer,
});
