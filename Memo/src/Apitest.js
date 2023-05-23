import React from 'react';

const Apitest = () => {
    return (
        <div className="Item">
            <h2>api 테스트 리스트</h2>
            <div className="info">
                <span className="memo_info">
                    제목 : {} | 운영진 : {}
                </span>
            </div>
            <div className="content">
                {}
            </div>
        </div>
    );
};

export default Apitest;