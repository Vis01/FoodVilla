import React from 'react'
import Logo from "../utills/icons/logo.png";
const Title = () => {
  return (
    <div className='flex'>
        <h1 className="ml-3 my-4 text-2xl  font-bold justify-center ">
            Food Villa
        </h1>
        <img className='w-10 ml-8 my-4' alt=" logo" src={Logo}/>
        
       
    </div>
  )
}
export default Title
