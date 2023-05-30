import { useEffect, useRef, useState } from 'react';
import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import ApiTest from './ApiTest';
import MemoUpdate from './MemoUpdate';

function App() {
  const [data, setData] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const darkMode = (e) => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    const localData = localStorage.getItem('MemoList') ?? '[]';
    setData(JSON.parse(localData));
  }, [])

  const onCreate = (title, content, member) => {
    const newItem = {
      title: title,
      content: content,
      member: member
    }

    setData([newItem, ...data])
    localStorage.setItem("MemoList", JSON.stringify([newItem, ...data]))
  }

  return (
    <BrowserRouter>
      <div className={isDark ? 'dark' : 'light'}>
        <button className="ModeButton" onClick={darkMode}>{isDark ? '🌝' : '🌚'}</button>
        <Routes>
          <Route path='/' element={<MemoList list={data} />}>
            <Route path='apitest' element={<ApiTest/>}></Route>
            <Route path='apitest/:id' element={<ApiTest/>}></Route>
          </Route>
          <Route path='/create' element={<MemoEdit list={data} onCreate={onCreate} />}></Route>
          <Route path='/update/:id' element={<MemoUpdate list={data}/>}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;