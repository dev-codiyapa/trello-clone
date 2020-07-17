import { combineReducers } from "redux";
import listReducer from "../redux/trello-list/reducer";

export default combineReducers({
  lists: listReducer
});
