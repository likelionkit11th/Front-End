import React from "react";
import "./App.css";

const ListItem = ({ title, content }) => {
  return (
    <div className="ListItem">
      <div>|</div>
      <div>일기제목 : {title}</div>
      <div>|</div>
      <div>|</div>
      <div>일기본문: {content}</div>
    </div>
  );
};

export default ListItem;
