import React, {useState} from 'react';


const MemoEdit = ({onCreate}) => {
    const [state, setState] = useState({
        title: '',
        content: '',
        member: '',
    })

    const handleState = (e) => {
        if (e.target.name == "member" && e.target.value == 0) {
            alert("운영진을 선택해주세요");
            return;
        }
        
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        if (state.member == "") {
            alert("운영진을 선택해주세요");
            return;
        }
        onCreate(state.title, state.content, state.member);
        setState({ title: '', content: '', member: '',});
        alert("저장 성공!");
    }


    return (
        <div className="MemoEdit">
            <h2>오늘의 강의 메모</h2>
            <div>
                <input placeholder='제목' name='title' value={state.title} onChange={handleState}/>
            </div>
            <div>
                <textarea placeholder='내용작성' name='content' value={state.content} onChange={handleState}/>
            </div>
            <div className="select-member">
                <div>운영진 : </div>
                <select name="member" value={state.member} onChange={handleState}>
                    <option value={0}>---</option>
                    <option value={"안재현"}>안재현</option>
                    <option value={"이태헌"}>이태헌</option>
                    <option value={"오세찬"}>오세찬</option>
                    <option value={"모유진"}>모유진</option>
                    <option value={"박규현"}>박규현</option>
                </select>
            </div>
            <div>
                <button className='primary-btn' onClick={handleSubmit}>저장하기</button>
            </div>
        </div>
    );
};

export default MemoEdit;