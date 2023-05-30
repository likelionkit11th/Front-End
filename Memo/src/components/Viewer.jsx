import React from 'react'

import "../styles/Viewer.css"
import MemoList from './MemoList';

const Viewer = ({memos}) => {
    return (
        <div>
            <h1>리스트</h1>
            <h3>{memos.length}개의 메모가 존재하고 있습니다.</h3>
            <MemoList memos={memos}/>
        </div>
    )
}
export default Viewer;