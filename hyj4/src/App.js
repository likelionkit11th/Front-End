import "./App.css";
import "./Emotion.css";
import React, { useState } from "react";
import Emotion from "./Emotion";
import IItem from "./IItem";

function App() {
  const emotions_status = [
    ["./img/emotion1.png", "신남", "funny"],
    ["./img/emotion2.png", "좋음", "good"],
    ["./img/emotion3.png", "보통", "normal"],
    ["./img/emotion4.png", "나쁨", "bad"],
    ["./img/emotion5.png", "끔찍", "terrible"],
  ];

  const [list, setList] = useState([]);

  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const [emotion, setEmotion] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleEmotion = (emo) => {
    setEmotion(emo);
  };

  const handleSave = () => {
    if (values.title && values.content && emotion) {
      setList([...list, { ...values, emotion: emotion }]);
      console.log(list);
      setValues({
        title: "",
        content: "",
      });
      setEmotion("");
      alert("저장 완료 되었습니다.");
    } else {
      console.log({ ...values, emotion: emotion });
      alert("입력되지 않은 문항이 있습니다.");
    }
  };

  return (
    <div>
      <div className="App">
        <p id="diary">오늘의 일기</p>
        <input
          id="title"
          name="title"
          onChange={handleChange}
          value={values.title}
          placeholder="제목"
        />
        <div id="itemBox">
          {emotions_status.map((ele, i) => {
            return (
              <Emotion
                active={ele[2] === emotion ? " active" : " "}
                emotion={ele}
                onClick={() => {
                  handleEmotion(ele[2]);
                }}
                key={i}
              />
            );
          })}
        </div>
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          value={values.content}
          placeholder="내용작성"
          rows="10"
          cols="80"
        />
        <button onClick={handleSave} id="saveButton">
          저장하기
        </button>
      </div>
      <hr></hr>
      <div className="App">
        <p>리스트</p>
        <p>{list.length}개의 메모가 저장되었습니다.</p>
      </div>
      <div className="App List">
        {list.map((ele, i) => {
          return <IItem props={ele} keys={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
