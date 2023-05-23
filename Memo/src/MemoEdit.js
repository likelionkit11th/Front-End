import React from 'react';

const MemoEdit = () => {

  return (
    <div className="MemoEdit">
    <h2>오늘의 강의 메모</h2>
    <div>
      <input placeholder='제목'/>
    </div>
    <div>
      <textarea placeholder='내용작성'/>
    </div>
    <div>
      <span>운영진 : </span>
      <select>
        <option value={1}>안재현</option>
        <option value={2}>이태헌</option>
        <option value={3}>오세찬</option>
        <option value={4}>모유진</option>
        <option value={5}>박규현</option>
      </select>
    </div>
    <div>
      <button>저장하기</button>
    </div>
  </div>
  );
};

export default MemoEdit;