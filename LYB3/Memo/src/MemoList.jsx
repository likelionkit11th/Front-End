import React from "react";
import ListItem from "./ListItem";

import "./style/List.css"

const MemoList = ({ list }) => {

    return (
        <div className="list-wrapper">
            <h2>리스트</h2>
            <h4>{list.length}개의 메모가 저장되었습니다.</h4>
            <div className="memo-items">{list.map(item => <ListItem item={item} />)}</div>
        </div>
    )
}

MemoList.defaultProps = { list: [] };

export default MemoList;