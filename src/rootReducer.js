import { combineReducers } from "redux";
import { storyOperation } from "./HomePage/CenterPage/Redux/reducer";
import { storyList } from "./HomePage/CenterPage/Redux/StoryReducer";
export default combineReducers({
  storyOperation: storyOperation,
  storyList: storyList,
});
