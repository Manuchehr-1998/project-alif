import React, { useEffect, useState } from 'react'

const Test = () => {
const [time,setTime]=useState(0)

useEffect(()=>{
    setInterval(()=>{
        setTime((prev)=> prev+1)
    },2000)
},[])


  return (
    <div>time {time}</div>
  )
}

export default Test