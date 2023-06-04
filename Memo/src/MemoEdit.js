import React, { useState } from "react";
import emotion1 from "./emotion/emotion1.png";
import emotion2 from "./emotion/emotion2.png";
import emotion3 from "./emotion/emotion3.png";
import emotion4 from "./emotion/emotion4.png";
import emotion5 from "./emotion/emotion5.png";

const MemoEdit = ({ onCreate }) => {
  const [state, setState] = useState({
    title: "",
    content: "",
    emotion: "",
  });

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    alert("저장 성공");
    onCreate(state.title, state.content, state.emotion);
    setState({
      title: "",
      content: "",
      emotion: "",
    });
  };

  const data = ["신남", "좋음", "보통", "나쁨", "끔찍"];
  const [btnActive, setBtnActive] = useState(false);

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return !prev;
    });
  };

  return (
    <div className="MemoEdit">
      <h2>오늘의 일기</h2>
      <div>
        <input
          placeholder="일기제목"
          name="title"
          value={state.title}
          onChange={handleState}
        />
      </div>
      <div className="emotionBox">
        {data.map((item, idx) => {
          return (
            <>
              <button
                value={idx + 1}
                className={"btn" + (btnActive ? " active" + [idx + 1] : "")}
                onClick={toggleActive}
              >
                <img src={emotion2} alt="" />
                {item}
              </button>
              {/* <button
                className={"btn" + (btnActive ? " active" : "")}
                value={idx}
                onClick={toggleActive}
              >
                <img src={emotion2} alt="" />
                좋음
              </button>
              <button
                className={"btn" + (btnActive ? " active" : "")}
                value={idx}
                onClick={toggleActive}
              >
                <img src={emotion3} alt="" />
                보통
              </button>
              <button
                className={"btn" + (btnActive ? " active" : "")}
                value={idx}
                onClick={toggleActive}
              >
                <img src={emotion4} alt="" />
                나쁨
              </button>
              <button
                className={"btn" + (btnActive ? " active" : "")}
                value={idx}
                onClick={toggleActive}
              >
                <img src={emotion5} alt="" />
                끔찍
              </button> */}
            </>
          );
        })}
      </div>
      <div>
        <textarea
          placeholder="일기본문"
          name="content"
          value={state.content}
          onChange={handleState}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default MemoEdit;
