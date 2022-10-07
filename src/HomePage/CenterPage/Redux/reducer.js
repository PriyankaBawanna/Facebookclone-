import {
  LIKE_STORY,
  UNLIKE_STORY,
  STORY_LIST,
  SET_STORY_LIST,
} from "../../../Constant";
export const storyOperation = (data = [], action) => {
  console.log("reducer call", action);
  switch (action.type) {
    case LIKE_STORY:
      console.log("Like Story ", action.data);

      return [action.data, ...data];

    case UNLIKE_STORY:
      console.log("Like Story ", action.data);

      data.length = data.length - 1;
      return [...data];

    case SET_STORY_LIST:
      console.log("Set Story ");
      return [...action.data];
    default:
      return data;
  }
};
