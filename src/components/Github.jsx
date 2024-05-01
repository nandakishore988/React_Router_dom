import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nandakishore988')
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res)
    //         setData(res)
    //     })
    // },[])
    const data = useLoaderData();
  return (
    <div>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='profile photo'></img>
    </div>
  )
}

export default Github

export const githubInfoData = async ()=>{
    const response = await fetch('https://api.github.com/users/nandakishore988')
    return response.json()
}