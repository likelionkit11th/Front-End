import React from 'react';

import "../styles/Viewer.css"


const MemoItem = ({ memo }) => {

    return (
        <div className='memo-item'>
            <div className={'memo-emotion emotion-' + memo.emotion}><img src={"/images/emotion"+memo.emotion+".png" } /></div>
            <div className='memo-title'>{memo.title}</div>
            <div className='memo-content'>{memo.content}</div>
        </div>
    )
}

export default MemoItem;