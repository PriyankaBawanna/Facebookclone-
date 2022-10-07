import { combineReducers } from "redux";
import { storyOperation } from "./HomePage/CenterPage/Redux/reducer";

export default combineReducers({
  storyOperation: storyOperation,
});
