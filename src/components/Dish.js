import React from 'react'

const Dish = ({dishdata}) => {
  console.log("hello")
  return (
    <div className="flex justify-between  border-t-2 h-16">
      <div>
        <div></div>
        <h1 className='text-base  '>{dishdata?.name}</h1>
        <h2 className='text-sm'>{dishdata?.price}</h2>
        {/* <p>{dishdata?.description}</p> */}
      </div>
      <div> </div>
      <div> <img className='w-12 mt-1 mr-1 h-12 border-2 rounded-lg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+dishdata.imageId} /></div>
    </div>
  )
}

export default Dish;