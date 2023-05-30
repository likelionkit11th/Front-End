import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MemoUpdate = ({ list }) => {
  const navigate = useNavigate();
  const {id} = useParams();

  const memoList = JSON.parse(localStorage.getItem("MemoList"));

  const [state, setState] = useState(memoList[id]);

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = () => {
    list.splice(id, 1, state)
    localStorage.setItem("MemoList", JSON.stringify(list))
    alert("수정 성공")
    setState({
      title:"",
      content:"",
      member:"",
    })
    navigate('/');
  }

  return (
    <div className="MemoEdit">
      <button onClick={() => {navigate(-1)}}>뒤로가기</button>
      <h2>메모 수정 📝</h2>
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
          <button onClick={handleSubmit}>수정하기</button>
        </div>
      </div>
    </div>
  );
};

export default MemoUpdate;