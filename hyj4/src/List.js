import React, { useState } from "react";
import IItem from "./IItem";

const List = ({ items }) => {
  const [item, setItem] = useState([
    {
      emotion: "funny",
      title: "테스트 제목",
      content: "테스트 내용",
    },
  ]);

  const handleSave = () => {
    setItem({
      emotion: items.emotion,
      title: items.title,
      content: items.content,
    });
  };

  return (
    <div>
      {item.map((ele, i) => {
        <IItem props={ele} keys={i} />;
      })}
    </div>
  );
};

export default List;
