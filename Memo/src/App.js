import React, { useState } from 'react';
import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './Memo_list';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  const [data, setData] = useState([]);

  const onCreate = (title, content, member) => {
    const newItem = {
      title,
      content,
      member
    };
    setData([newItem, ...data])
  }

  const [isDark, setisDark] = useState(false);

  const darkMode = (e) => {
    setisDark(!isDark)
  }

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <button onClick={darkMode}>{isDark ? '🌝' : '🌚'}</button>
      <MemoEdit onCreate={onCreate} />
      <MemoList list={data} />
    </div>
  );
}

export default App;
