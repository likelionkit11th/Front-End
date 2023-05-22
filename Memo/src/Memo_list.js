import React from 'react';
import ListItem from './ListItem';
const MemoList = ({ list }) => {
  console.log(list);
  return <div className='ListView'>
          <h2>리스트</h2>
          <h4>{list.length}개의 메모가 있습니다.</h4>
    <div className='ListView_list'>
      {list.map((ele) => {
        return <ListItem title={ele.title} content={ele.content} member={ele.member}></ListItem>
      })}
    </div>
  </div>
}

MemoList.defaultProps = {
  list: []
}
export default MemoList