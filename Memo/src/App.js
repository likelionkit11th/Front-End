import React, { useEffect, useState } from 'react';


import './App.css';
import MemoEdit from './MemoEdit';

import Viewer from './components/Viewer';

function App() {
  const [memo, setMemo] = useState([])


  // 임시 데이터 삽입
  useEffect(() => {
    let temp = [
      { title: "임시 1", content: "임시 내용 1", emotion: "1" },
      { title: "임시 2", content: "임시 내용 2", emotion: "2" },
      { title: "임시 3", content: "임시 내용 3", emotion: "3" },
      { title: "임시 4", content: "임시 내용 4", emotion: "4" },
      { title: "임시 5", content: "임시 내용 5", emotion: "5" },
      { title: "임시 6", content: "임시 내용 6", emotion: "3" },
    ]
    setMemo(temp);
  }, []);


  return (
    <div className="App">
      <MemoEdit />
      <Viewer memos={memo}/>
    </div>
  );
}

export default App;
