import { combineReducers } from "redux";
import user from "./user/reducer";
import developers from "./developers/reducer";
import resources from "./resources/reducer";

export default combineReducers({
  user: user,
  developers: developers,
  resources: resources
});
