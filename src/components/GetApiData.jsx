import React,{useContext} from 'react'
import {ShareData} from '../context/MyData'

const GetApiData = () => {
    const {user,editOnClick} = useContext(ShareData)
  return (
    <div>
      My name is {user}
      <button onClick={editOnClick}></button>
    </div>
  )
}

export default GetApiData
