import React from "react";
import ListItem from "./Listitem";

const MemoList = ({ List }) => {
  console.log(List);
  return (
    <div className="APP">
      <h2>리스트</h2>
      <h4>{List.length}개의 메모 존재</h4>
      {List.map((ele) => (
        <ListItem
          title={ele.title}
          content={ele.content}
          emotion={ele.emotion}
        />
      ))}
    </div>
  );
};

MemoList.defaultProps = {
  List: [],
};

export default MemoList;
