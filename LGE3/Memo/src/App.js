import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';
import { useState, useEffect } from 'react';

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

  return (
    <div className={isDark ? 'dark':'light'}>
      <button onClick={darkMode}>{isDark ? '🌝':'🌚'}</button>
      <div className='App'>
        <MemoEdit onCreate={onCreate}/>
        <MemoList List={data}/>
      </div>
    </div>
  );
}

export default App;
