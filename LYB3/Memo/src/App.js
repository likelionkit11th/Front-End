import React, { useState } from 'react';

import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';

function App() {

  const [data, setData] = useState([]);

  const onCreate = (title, content, member) => {
    const newItem = { title: title, content: content, member: member };
    setData([ newItem, ...data ]);
  }

  return (
    <div className="App">
      <MemoEdit onCreate={onCreate} />
      <MemoList list={data} />
    </div>
  );
}

export default App;
