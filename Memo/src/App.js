import React, { useEffect, useState } from "react";

import "./App.css";
import MemoEdit from "./MemoEdit";

import Viewer from "./components/Viewer";

function App() {
  const [memo, setMemo] = useState([]);

  // 임시 데이터 삽입
  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("diary"))
    setMemo(!temp ? [] : temp);
  }, []);

  const onCreate = (item) => {
    setMemo([...memo, item])
    localStorage.setItem("diary", JSON.stringify([...memo, item]))
  }

  return (
    <div className="App">
      <MemoEdit onCreate={onCreate}/>
      <Viewer memos={memo} />
    </div>
  );
}

export default App;
