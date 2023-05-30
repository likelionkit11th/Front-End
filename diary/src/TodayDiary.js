import React, { useState } from "react";

const TodayDiary = ({ onCreate }) => {
    const [state, setState] = useState({
        title: "",
        content: "",
    });

    const handleState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        alert("저장 성공!");
        onCreate(state.title, state.content);
        setState({
            title: "",
            content: "",
        });
    };
    return (
        <div className="TodayDiary">
            <h2>오늘의 일기</h2>
            <input
                placeholder="제목"
                name="title"
                value={state.title}
                onChange={handleState}
            />
            <div className="buttons">
                <button className="button1">
                    <img src="/emotion/emotion1.png" />
                    신남
                </button>
                <button className="button2">
                    <img src="/emotion/emotion2.png" />
                    좋음
                </button>
                <button className="button3">
                    <img src="/emotion/emotion3.png" />
                    보통
                </button>
                <button className="button4">
                    <img src="/emotion/emotion4.png" />
                    나쁨
                </button>
                <button className="button5">
                    <img src="/emotion/emotion5.png" />
                    끔찍
                </button>
            </div>
            <textarea
                placeholder="내용작성"
                name="content"
                value={state.content}
                onChange={handleState}
            />
            <br />
            <button onClick={handleSubmit} className="saveButton">
                저장하기
            </button>
        </div>
    );
};

export default TodayDiary;
