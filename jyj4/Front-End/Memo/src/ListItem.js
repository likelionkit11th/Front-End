import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ title, content, member, index, list }) => {
  const navigate = useNavigate();

  const deleteMemo = () => {
    list.splice(index, 1);
    localStorage.setItem("MemoList", JSON.stringify(list))
    window.location.reload()
  }

  return (
    <div className="ListItem">
      <div className="info">
        <span className="memo_info">
          제목 : {title} | 운영진 : {member}
        </span>
        <span onClick={() => navigate(`/update/${index}`)}>수정</span>
        <span onClick={deleteMemo}>삭제</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default ListItem;
