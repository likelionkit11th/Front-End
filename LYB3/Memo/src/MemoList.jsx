import React from "react";
import ListItem from "./ListItem";

const MemoList = ({ list }) => {

    return (
        <div>
            <h2>리스트</h2>
            <h4>{list.length}개의 메모가 저장되었습니다.</h4>
            {list.map(item => <ListItem item={item} />)}
        </div>
    )
}

MemoList.defaultProps = { list: [] };

export default MemoList;