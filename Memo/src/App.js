import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';
import Apitest from './Apitest';

function App() {
  const [data,setData] = useState([]);
  const [isDark, setIsDark] = useState('false')

  const darkMode = (e) =>{
    setIsDark(!isDark)
  }
 // 삭제하기 새로고침 이벤트 추가
  const DataClear = () => {
    localStorage.clear('MemoList');
    alert("삭제가 완료되었습니다")
    window.location.reload();
  }
  
  // const DataModify = () => {
  //   const Write = prompt(); 
  //   JSON.parse(localStorage.getItem('MemoList'[Write]));
  //   const Modify = localStorage.setItem
  // }

  useEffect(()=>{
    // null 병합 연산자 ?? 사용해서 null or undefined 일 경우 []
    const localData = localStorage.getItem("MemoList") ?? '[]'
    setData(JSON.parse(localData))
  },[])
  

  const onCreate = (title,content,member) =>{
    const newItem = {
      title,
      content,
      member,
    };
    setData([newItem,...data]);
    localStorage.setItem("MemoList",JSON.stringify([newItem,...data]));
  }

  return (
    <BrowserRouter>
      <div className={isDark ? 'light' : 'dark'}>
      <button onClick={darkMode}>{isDark ? '🌝': '🌚'}</button>
      <button onClick={DataClear}>리스트 초기화</button>
      <button onClick={DataModify}>리스트 수정</button>
        <Routes>
          <Route path = '/' element ={<MemoList List={data}/>}>
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