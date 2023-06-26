import React from "react";
import "./IItem.css";

const IItem = ({ props }) => {
  const link = {
    funny: "./img/emotion1.png",
    good: "./img/emotion2.png",
    normal: "./img/emotion3.png",
    bad: "./img/emotion4.png",
    terrible: "./img/emotion5.png",
  };

  return (
    <div id="item">
      <div className={"img_item " + ("i" + props.emotion)}>
        <img src={process.env.PUBLIC_URL + link[props.emotion]} />
      </div>
      <div className="text_item">
        <p>{props.title}</p>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default IItem;
