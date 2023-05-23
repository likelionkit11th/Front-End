import React, { useEffect, useState } from 'react';

import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [data, setData] = useState([]);

  const onCreate = (title, content, member) => {
    const newItem = { title: title, content: content, member: member };
    setData([ newItem, ...data ]);
  }

  const darkMode = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    let classname = "App " + isDark ? "darkmode" : "";
    let text = isDark ? "다크모드 활성화" : "다크모드 비활성화";
    console.log(text);
  }, [isDark]);

  return (
    <div className={"App " + (isDark ? "darkmode" : "")}>
      <button onClick={darkMode}>{isDark ? '🌝': '🌚'}</button>
      <MemoEdit onCreate={onCreate} />
      <MemoList list={data} />
    </div>
  );
}

export default App;
