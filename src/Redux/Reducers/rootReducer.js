import { combineReducers } from "redux";
import { infoReducer } from "./infoReducer";
import { templateReducer } from "./templateReducer";
import userReducer from "./userReducer";

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
  details: infoReducer,
});

export default rootReducer;
