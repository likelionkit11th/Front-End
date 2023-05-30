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

  const Delete = () => {
    const Dtitle = prompt("삭제할 메모 제목: ");
    const value = localStorage.getItem('MemoList');
    const data = JSON.parse(value);
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === Dtitle) {
        data.splice(i, 1)
        localStorage.setItem("MemoList",JSON.stringify([...data]));
        console.log("삭제 완료");
        return;
      }
    }
    console.log("존재하지 않는 메모");
  }

  const allDelete = () => {
    localStorage.removeItem('MemoList');
    console.log("전체 삭제 완료");
  } 

  const Modify = () => {
    const Dtitle = prompt("수정할 메모 제목: ");
    const value2 = localStorage.getItem("MemoList");
    const data = JSON.parse(value2);
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === Dtitle) {
        const Title = prompt("수정할 제목 입력 : ");
        const Content = prompt("수정할 내용 입력 : ");
        const Member = prompt("수정할 작성자 입력 : ");
        data[i].title = Title;
        data[i].content = Content;
        data[i].member = Member;

        localStorage.setItem("MemoList",JSON.stringify([...data]));
        console.log("수정 완료");
        return;
      }
    }
    console.log("존재하지 않는 메모");
  }

  return (
    <BrowserRouter>
      <div className={isDark ? 'light' : 'dark'}>
      <button onClick={darkMode}>{isDark ? '🌝': '🌚'}</button>
      <button onClick={Delete}>메모 삭제</button>
      <button onClick={Modify}>메모 수정</button>
      <button onClick={allDelete}>메모 전체 삭제</button>
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