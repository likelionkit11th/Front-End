import React, {useEffect} from 'react';

const LifeCycle = () => {
    useEffect(()=>{},[])
    useEffect(()=>{
        console.log("마운트")
        },[])

    useEffect(()=>{
        console.log("업데이트")
        })

    return (
        <div>
            
        </div>
    );
};

export default LifeCycle;
