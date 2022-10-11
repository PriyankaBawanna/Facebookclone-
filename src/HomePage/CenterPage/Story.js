import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoryList } from "../CenterPage/Redux/StoryAction";
import LikeButton from "./LikeButton";

export default function Story() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.storyList);
  console.warn("data in main component @PB", data);

  useEffect(() => {
    dispatch(StoryList());
  }, []);
  return (
    <>
      <div className="">
        {data.map((item) => (
          <div className="storyItem ">
            <div className="userName">
              <div className="userDescription">
                <div className="userProfileLittleShow"></div>
                <div>
                  <div> {item.userName}</div>
                  <div>time</div>
                </div>
              </div>
            </div>
            <div className="description"> Description{item.Description}</div>

            <img src={item.Photo} alt="" className="img" />
            <div className="likeAndComment">
              <LikeButton />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
