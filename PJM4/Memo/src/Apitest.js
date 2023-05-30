import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Apitest = () => {
	const [apiList, setAPIList] = useState([]);
	const {id} = useParams();
  console.log(id)
	useEffect(()=>{
		getData_fetch();
		// getData_Axios();
	},[])
  
	const getData_fetch = async() => {
		let rawResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
		let jsonResponse = await rawResponse.json();
		let testList = jsonResponse.slice(0,10);
		setAPIList(testList);
	}

	const getData_Axios = async() =>{
		const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
		setAPIList(response.data.slice(0,10))
	}

  return (
    <>
      <h2>api 테스트 리스트</h2>
			{
				apiList.map((e,i)=>(e.id == id ? 
					<div className="Item" key = {i}>
						<div className="info">
							<span className="memo_info">
								제목 : {e.name} | 운영진 : {e.email.split('@')[0]}
							</span>
						</div>
						<div className="content">
							{e.body}
						</div>
					</div> : null
				))
			}
			{/* {apiList.map((e,i)=>(
				<div className="Item" key = {i}>
					<div className="info">
						<span className="memo_info">
							제목 : {e.name} | 운영진 : {e.email.split('@')[0]}
						</span>
					</div>
					<div className="content">
						{e.body}
					</div>
				</div>
			))} */}
  </>
  );
};

export default Apitest;