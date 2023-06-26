import React, { useState } from "react";
import { Link } from "react-router-dom";

const MemoEdit = ({ onCreate }) => {
  const [state, setState] = useState({
    title: "",
    content: "",
    member: "",
  });

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(state);
    alert("저장 성공");
    onCreate(state.title, state.content, state.member);
    setState({
      title: "",
      content: "",
      member: "",
    });
  };

  return (
    <div className="MemoEdit">
      <button>
        <Link to={-1}>뒤로가기</Link>
      </button>
      <h2>오늘의 강의 메모</h2>
      <div>
        <input
          placeholder="제목"
          value={state.title}
          name="title"
          onChange={handleState}
        />
      </div>
      <div>
        <textarea
          placeholder="내용작성"
          value={state.content}
          name="content"
          onChange={handleState}
        />
      </div>
      <div>
        <span>운영진 : </span>
        <select name="member" value={state.member} onChange={handleState}>
          <option value="default">운영진을 선택해주세요</option>
          <option value={"안재현"}>안재현</option>
          <option value={"이태헌"}>이태헌</option>
          <option value={"오세찬"}>오세찬</option>
          <option value={"모유진"}>모유진</option>
          <option value={"박규현"}>박규현</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default MemoEdit;
