import React from 'react';
import './App.css';

const ListItem = ({title, content, member}) => {
  return (
    <div className="Item">
      <div className="info">
        <span className="memo_info">
          제목 : {title} | 운영진 : {member}
        </span>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  )
}

export default ListItem;