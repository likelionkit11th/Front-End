import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemoEdit = ({ onCreate }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: "",
    content: "",
    member: ""
  });

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = () => {
    onCreate(state.title, state.content, state.member)
    alert("저장 성공")
    setState({
      title:"",
      content:"",
      member:"",
    })
  }

  return (
    <div className="MemoEdit">
      <button onClick={() => {navigate(-1)}}>뒤로가기</button>
      <h2>오늘의 강의 메모 👩‍💻</h2>
      <div>
        <input placeholder='제목'
          name="title"
          value={state.title}
          onChange={handleState} />
      </div>
      <div>
        <textarea placeholder='내용작성'
          name="content"
          value={state.content}
          onChange={handleState}
        />
      </div>
      <div className="MemberSelect">
        <span>🦁 운영진 : </span>
        <select name="member" value={state.member} onChange={handleState}>
          <option value='default'>운영진을 선택해주세요</option>
          <option value={'안재현'}>안재현</option>
          <option value={'이태헌'}>이태헌</option>
          <option value={'오세찬'}>오세찬</option>
          <option value={'모유진'}>모유진</option>
          <option value={'박규현'}>박규현</option>
        </select>
        <div>
          <button onClick={handleSubmit}>저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default MemoEdit;