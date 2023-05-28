import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Apitest = () => {
    const [apiList, setApiList] = useState([]);
    useEffect(()=>{
        // getData_fetch();
        getData_Axios();
    }, []);

    // const getData_fetch = async() => {
    //     let rawResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
    //     console.log(rawResponse);
    //     let jsonResponse = await rawResponse.json();
    //     console.log(jsonResponse);
    //     let testList = jsonResponse.slice(0, 10)
    //     setApiList(testList);
    // }


    const getData_Axios = async() => {
        let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setApiList(response.data.slice(0, 10));
    }

    const {id} = useParams();
    console.log(id);

    return (
        <>
            <h2>api 테스트 리스트</h2>
            {apiList.map((e, i) => (e.id == id ?
                <div className='Item' key = {i}>
                    <div className='info'>
                        <span className='memo_info'>
                            제목 : {e.name}, 운영진 : {e.email.split('@')[0]}
                        </span>
                    </div>
                    <div className='content'>
                        {e.body}
                    </div>                
                </div> : null
            ))}
        </>
    );
};

export default Apitest;