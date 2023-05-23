import { useState, useEffect } from 'react';
import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apitest from './Apitest';

function App() {

  const [data, setData] = useState([]);

  const onCreate = (title, content, member) => {
    const newItem = {
      title,
      content,
      member,
    };
    setData([newItem, ...data])
  }

  const [isDark,setisDark] = useState(false);

  const darkMode = (e) =>{
    setisDark(!isDark)
  }

  // useEffect(()=>{
  //   // 랜더링시
  //   console.log(`현재 모드는 : ${isDark ? '다크모드':'라이트모드'}`)
  // },[])

  // useEffect(()=>{
  //   // 업데이트 시에 변경됨
  //   console.log(`현재 모드는 : ${isDark ? '다크모드':'라이트모드'}`)
  // })

  // useEffect(()=>{
  //     // isdark값이 업데이트 시에 변경됨
  //     console.log(`현재 모드는 : ${isDark ? '다크모드':'라이트모드'}`)
  // }, [isDark])


  return (
    <BrowserRouter>
      <div className={isDark ? 'dark': 'light'}>
        <button onClick={darkMode}>{isDark ? '🌝': '🌚'}</button>
        <Routes>
          <Route path='/' element={<MemoList List={data}/>}>
            <Route path='apitest' element={<Apitest/>}/>
          </Route>
          <Route path='/create' element={<MemoEdit onCreate={onCreate}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
