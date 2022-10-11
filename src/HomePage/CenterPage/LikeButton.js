import React, { useState } from "react";
import { Like } from "./Redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UnLike } from "./Redux/action";
export default function LikeButton() {
  const dispatch = useDispatch();
  const [showButtonLike, setShowButtonLike] = useState(true);
  const results = useSelector((state) => state.storyOperation);
  //Redux data in Button Component "

  //According to condition button Will be Display
  const userActionForLikeButton = () => {
    setShowButtonLike(false);
  };
  const userActionForUnlikeButton = () => {
    setShowButtonLike(true);
  };
  return (
    <>
      <div className="likeDescription">
        <div className="likeCount">
          <span>{results.length}</span>
        </div>
        <div className="likeButton">
          {showButtonLike ? (
            <div>
              <button
                onClick={() => {
                  dispatch(Like());
                  userActionForLikeButton();
                }}
              >
                Like
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  dispatch(UnLike());
                  userActionForUnlikeButton();
                }}
              >
                UNLike
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
