import React, { useState } from 'react';

const MemoEdit = ({onCreate}) => {

  // const [state, setState] = useState('초기 상태');
  // const [state1, setState1] = useState('초기 상태 1');

  //객체
  const [state, setState] = useState({
    title:"",
    content:"",
    member:"",
  });

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }

const handleSubmit = (e) => {
  console.log(state)
  alert("성공")
  onCreate(state.title, state.content, state.member)
  setState({
    title:"",
    content:"",
    member:"",
  })

}
  
  return (
    <div className="MemoEdit">
    <h2>오늘의 강의 메모</h2>
    <div>
      <input 
        placeholder='제목'
        name='title'
        value={state.title}
        onChange = {handleState}
        // onChange={(e) => {
        //   console.log(e.target.value)
        //   setState(e.target.value)
        // }}
      />
    </div>
    <div>
      <textarea 
        placeholder='내용작성'
        name='content'
        value={state.content}
        onChange = {handleState}
        // onChange={(e) => {
        //   console.log(e.target.value)
        //   setState1(e.target.value)
        // }}
      />
    </div>
    <div>
      <span>운영진 : </span>
      <select name="member" value={state.member} onChange={handleState}>
        <option value='default'>선택 해주세요</option>
        <option value={'안재현'}>안재현</option>
        <option value={'이태헌'}>이태헌</option>
        <option value={'오세찬'}>오세찬</option>
        <option value={'모유진'}>모유진</option>
        <option value={'박규현'}>박규현</option>
      </select>
    </div>
    <div>
      <button onClick={handleSubmit}>저장하기</button>
    </div>
  </div>
  );
};

export default MemoEdit;