import React, { useEffect } from 'react';
import ListItem from './ListItem';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const MemoList = ({ list }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   console.log(location)
  // }, [location])

  return (
    <div className="MemoList">
      <h2>🗒️ 리스트</h2>
      <div>
        <button onClick={() => {navigate('/create')}}>작성하기</button>
        <button onClick={() => {navigate('/')}}>메모 리스트 보기</button>
        <button onClick={() => {navigate('/apitest')}}>api호출</button>
      </div>
      <h4>{list.length}개의 메모가 있습니다</h4>
      <Outlet />
      {location.pathname === '/' ? list.map((element, index) => {
        return (
          <div>
            <ListItem title={element.title} content={element.content} member={element.member} index={index} list={list}/>
          </div>
        )
      }) : <></>}
      {/* {list.map((element) => {
        return (
          <div>
            <ListItem title={element.title} content={element.content} member={element.member} />

          </div>
        )
      })}
      <button onClick={() => { navigate('/create') }}>작성하기</button> */}
    </div>
  );
};

// undefined 값이 들어왔을 때 에러가 발생하지 않도록 default 값 설정
MemoList.defaultProps = {
  List: []
}

export default MemoList;