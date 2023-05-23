import React from "react";

import "./style/ListItem.css"
import { useEffect } from "react";

const ListItem = ({ item }) => {

    useEffect(() => {
        return () => {
            console.log("리스트 아이템 컴포넌트가 화면에서 사라짐");
        }
    })

    return (
        <section className="memo-item">
            <div className="memo-header">
                <h3 class="memo-title">{item.title}</h3>
                <div class="memo-member">{item.member}</div>
            </div>
            <p className="memo-content">{item.content}</p>
            
        </section>
    )
}

export default ListItem;