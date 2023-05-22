import React from 'react';

const ListItem = ({title, content, member}) => {
  return (
    <div className="ListItem">
      <h4>제목 : {title}</h4>
      <p>내용 : {content}</p>
      <p>멤버 : {member}</p>
    </div>
  );
};

export default ListItem;