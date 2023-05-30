import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const ApiTest = () => {
    const location = useLocation();

    const [apiList, setApiList] = useState([]);

    const { id } = useParams();

    const getData_fetch = async () => {
        let rawResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
        let jsonResponse = await rawResponse.json();
        let testList = jsonResponse.slice(0, 10);
        setApiList(testList)

        console.log(apiList)
    }

    const getData_Axios = async () => {
        let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setApiList(response.data.slice(0, 10));
    }

    useEffect(() => {
        //console.log(location)
        getData_Axios();
    }, [])

    return (
        <>
            <h2>api 테스트 리스트</h2>
            {
                apiList.map((e, i) => {
                    return (
                        e.id === id ?
                            <div key={i} className='ListItem'>
                                <div>
                                    <span>
                                        제목 : {e.name} | 운영진 : {e.email.split('@')[0]}
                                    </span>
                                </div>
                                <div>
                                    {e.body}
                                </div>
                            </div> : null
                    )

                })
            }
        </>

    );
};

export default ApiTest;