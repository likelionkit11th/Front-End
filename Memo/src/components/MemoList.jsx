import React from 'react'

import "../styles/Viewer.css"
import MemoItem from './MemoItem';

const MemoList = ({ memos }) => {

    return (
        <div className='memo-wrapper'>
            {memos.map((memo, index) => (<MemoItem memo={memo}/>))}
        </div>
    )
}

export default MemoList;