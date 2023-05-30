import React from 'react';

const ListItem = ({title, content, member}) => {
    return (
        <div className='List'>              
            <details className='memo'>
                <summary className='title'>제목 : {title}</summary>
                <div className='content'><br/>{content}</div>
                <div className='member'>작성자 : {member}</div>
            </details>
        </div>
    );
};

export default ListItem 