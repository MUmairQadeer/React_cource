import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github(){
    const data =useLoaderData([])
    // const [data,setData] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mumairqadeer')
    //     .then(response =>response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-center m-4 text-white bg-gray-600 text-4xl font-bold p-3">
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}
export default Github
export  const githubinfoLoader = async ()=>{
    const data =await fetch('https://api.github.com/users/mumairqadeer');
    return data.json()
}
