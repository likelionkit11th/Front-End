import { React, useEffect } from "react";
import ListItem from "./ListItem";
import { Link, Outlet, useLocation } from "react-router-dom";

const MemoList = ({ List }) => {
  console.log(List);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <h2>리스트</h2>
      <button>
        <Link to="/create">작성하기</Link>
      </button>
      <button>
        <Link to="/">메모 리스트 보기</Link>
      </button>
      <button>
        <Link to="apitest">api호출</Link>
      </button>
      <h4>{List.length}개의 메모가 있습니다.</h4>
      <Outlet />
      {location.pathname === "/" ? (
        List.map((ele) => {
          <ListItem
            title={ele.title}
            content={ele.content}
            member={ele.member}
          />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

MemoList.defaultProps = {
  List: [],
};

export default MemoList;
