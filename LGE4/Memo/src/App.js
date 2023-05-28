import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';
import Apitest from './Apitest';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const onCreate = (title, content, member) => {
    const newItem = {
      title,
      content,
      member,
    };
    setData([newItem, ...data])
    localStorage.setItem("MemoList", JSON.stringify([newItem,...data]));
  }

  const {id} = useParams();
  console.log(id);

  const [isDark, setisDark] = useState(false);
  const darkMode = (e) => {
    setisDark(!isDark)
  }

  useEffect(()=>{
    const localData = localStorage.getItem('MemoList') ?? '[]';
    setData(JSON.parse(localData));
  }, [])


  // local storage 값 수정
  const modify = () => {
    const value = localStorage.getItem('MemoList');
    alert(value)
    const modify_value = prompt('수정할 값 입력 \n 예시: [{"title":" ","content":" ","member":" "}]');
    localStorage.setItem('MemoList', modify_value)
  }

  // local storage 값 삭제
  const remove = () => {
    localStorage.removeItem('MemoList');
    alert("삭제 성공")
  }
  
  return (
    <BrowserRouter>
      <div className={isDark ? 'dark':'light'}>
        <button onClick={darkMode}>{isDark ? '🌝':'🌚'}</button>
        <button onClick={remove}>localStorage 값 삭제 </button>
        <button onClick={modify}>localStorage 값 수정 </button>
        <button><Link to='/create'>다른 페이지로 이동</Link></button>
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