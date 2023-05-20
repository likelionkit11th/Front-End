import React from 'react';
import './App.css';

const ListItem = ({title, content, member}) => {
    return (
        <div className='ListItem'>
            <div>|</div>
            <div>제목 : {title}</div>
            <div>|</div>
            <div>운영진 : {member}</div>
            <div>|</div>
            <div>내용 : {content}</div>
        </div>
    );
};

export default ListItem;