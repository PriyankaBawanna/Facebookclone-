import React from "react";
import { Like } from "./Redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UnLike } from "./Redux/action";
export default function LikeButton() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.storyOperation);
  console.warn("Redux data in Button Component ", results);
  return (
    <>
      <p>{results.length}</p>
      <button onClick={() => dispatch(Like())}>Like</button>
      <button onClick={() => dispatch(UnLike())}>UNLike</button>
    </>
  );
}
