import { SET_STORY_LIST } from "../../../Constant";
export const storyList = (data = [], action) => {
  console.log(" story reducer call", action);
  switch (action.type) {
    case SET_STORY_LIST:
      console.log("Set Story ");
      return [...action.data];
    default:
      return data;
  }
};
