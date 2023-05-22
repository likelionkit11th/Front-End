import React from 'react';
import ListItem from './ListItem';

const MemoList = ({list}) => {
  return (
    <div className="MemoList">
      <h2>🗒️ 리스트</h2>
      <h4>{list.length}개의 메모가 있습니다</h4>
      {list.map((element) => {
        return (
          <div>
            <ListItem title={element.title} content={element.content} member={element.member}/>
          </div>
        )
      })}
    </div>
  );
};

// undefined 값이 들어왔을 때 에러가 발생하지 않도록 default 값 설정
MemoList.defaultProps = {
  List: []
}

export default MemoList;