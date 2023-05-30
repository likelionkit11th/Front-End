import { React, useEffect, useState } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

const Apitest = () => {
  const [apiList, setApiList] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getData_fetch();
    // getData_Axios();
  }, []);

  const getData_fetch = async () => {
    let rawResponse = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    let jsonResponse = await rawResponse.json();
    let testList = jsonResponse.slice(0, 10);
    setApiList(testList);
  };

  /*
  const getData_Axios = async() => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    console.log(response);
    setApiList(response.data.slice(0,10));
  }
  */

  return (
    <>
      {apiList.map((e, i) =>
        e.id == id ? (
          <div className="Item" key={i}>
            <div className="info">
              <span className="memo_info">
                제목 : {e.name} | 운영진 : {e.email.split("@")[0]}
              </span>
            </div>
            <div className="content">{e.body}</div>
          </div>
        ) : null
      )}
    </>
  );
};

export default Apitest;
