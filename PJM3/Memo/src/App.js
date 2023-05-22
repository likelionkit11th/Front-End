import { useState, useEffect } from 'react';
import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';

// const dummyData = [
//   {
//     title:"제목1",
//     content:"내용1",
//     member:"멤버1",
//   },
//   {
//     title:"제목2",
//     content:"내용2",
//     member:"멤버2",
//   },
//   {
//     title:"제목3",
//     content:"내용3",
//     member:"멤버3",
//   }
// ]

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

  const [isDark, setisDark] = useState(false);
  const darkMode = (e) => {
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
    <div className={isDark ? 'dark': 'light'}>
        <button onClick={darkMode}>{isDark ? '☀️': '🌑'}</button>
        <MemoEdit onCreate={onCreate}/>
        <MemoList List={data}/>
    </div>
  );
}

export default App;
