import "./App.css";
import { useState } from "react";
import Emotion from "./Emotion";

function App() {
  const emotions = [
    "/img/emotion1.png",
    "/img/emotion2.png",
    "/img/emotion3.png",
    "/img/emotion4.png",
    "/img/emotion5.png",
  ];
  return (
    <div className="App">
      <p>오늘의 일기</p>
      {emotions.map((ele, i) => {
        return <Emotion path={ele} key={i} />;
      })}
      <button>저장하기</button>
    </div>
  );
}

export default App;
