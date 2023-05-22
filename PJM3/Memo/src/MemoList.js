import React from 'react';
import ListItem from './ListItem';

const MemoList = ({List}) => {
    console.log(List)
    return (
        <div className='countMemo'>
            <h3>현재 {List.length}개의 메모가 작성되었습니다.</h3>
            {List.map((ele) => (
                <ListItem title={ele.title} content={ele.content} member={ele.member} />
            ))}
        </div>
    );
};

MemoList.defaultProps = {
    List : []
}

export default MemoList;