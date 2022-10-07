import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoryList } from "../CenterPage/Redux/StoryAction";
export default function Story() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.storyOperation);
  console.warn("data in main component @PB", data);

  useEffect(() => {
    dispatch(StoryList());
  }, []);
  return (
    <>
      <div className="product-container">
        {data.map((item) => (
          <div className="storyItem ">
            <div>Name : {item.userName} </div>
            <img src={item.Photo} alt="" className="img" />
            <div>Like</div>
          </div>
        ))}
      </div>
    </>
  );
}
