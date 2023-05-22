import { useState } from 'react';
import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';

function App() {
  const [data, setData]= useState([]);
  const [isDark, setIsDark] = useState(false);

  const darkMode = (e) => {
    setIsDark(!isDark);
  }

  const onCreate = (title, content, member) => {
    const newItem = {
      title : title,
      content : content,
      member : member
    }

    setData([newItem, ...data])
  }
  
  return (
    <div className={isDark ? 'dark' : 'light'}>
      <button className="ModeButton" onClick={darkMode}>{isDark ? '🌝' : '🌚'}</button>
      <MemoEdit list={data} onCreate={onCreate}/>
      <MemoList list={data}/>
    </div>
  );
}

export default App;