import { LIKE_STORY, UNLIKE_STORY } from "../../../Constant";

export const Like = (data) => {
  console.log(" action Like Key ", data);
  return {
    type: LIKE_STORY,
    data,
  };
};

export const UnLike = (data) => {
  console.log("Unlike action ", data);
  return {
    type: UNLIKE_STORY,
    data,
  };
};
