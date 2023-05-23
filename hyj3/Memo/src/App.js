import React, { useState, useEffect } from 'react';
import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';
import Apitest from './Apitest';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('MemoList') ?? '[]';
    setData(JSON.parse(localData));
  }, [])

  const onCreate = (title, content, member) => {
    const newItem = {
      title,
      content,
      member,
    };
    setData([newItem, ...data]);
    localStorage.setItem("MemoList", JSON.stringify([newItem, ...data]));
  }
  
  const [isDark, setisDark] = useState(false);
  const darkMode = (e) => {
    setisDark(!isDark)
  };

  useEffect(()=>{
      console.log(`현재 모드는 : ${isDark ? '다크모드':'라이트모드'}`);
  }, [isDark])

  return (
    <BrowserRouter>
      <div className={isDark ? 'dark':'light'}>
        <button onClick={darkMode}>{isDark ? '🌝':'🌚'}</button>
        <Routes>
          <Route path='/' element={<MemoList List={data}/>}>
            <Route path='apitest' element={<Apitest/>}/>
            <Route path='apitest/:id' element={<Apitest/>}/>
          </Route>
          <Route path='/create' element={<MemoEdit onCreate={onCreate}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;