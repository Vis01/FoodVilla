import React, { useState } from 'react'
import Title from './Title';
import Searchicon from '../utills/icons/search.svg';
import Offericon from '../utills/icons/Offer.svg';
import Helpicon from '../utills/icons/Help.svg';
import Signinicon from '../utills/icons/Signin.svg';
import SignOuticon from '../utills/icons/SignOut.svg';
import Carticon from '../utills/icons/Cart.svg';
const Header=()=>{
   const [isSignin,setisSignin]=useState(false);
    return (
        <div className="border-2  flex m-2  justify-between  ">
            <Title/>
            <div className=" m-5">               
                <ul className=" flex text-xl font-bold justify-between mg-2 mt-3">
                <li className=" mx-3 px-1 flex hover:text-orange-400 cursor-pointer ">
                    <img className='m-1 mt-0 w-8' src={Searchicon}/>
                    Search
                </li>
                <li className=" mx-3 px-1 flex  hover:text-orange-400 cursor-pointer ">
                    <img className='m-1 mt-0 w-8' src={Offericon}/>
                    Offer
                </li>
                <li className=" mx-3 px-1 flex  hover:text-orange-400 cursor-pointer">
                    <img className='m-1 mt-0 w-7' src={Helpicon}/>
                    Help
                </li>
                <li className=" mx-3 px-1 flex hover:text-orange-400 cursor-pointer"  >
                    <img className='m-1 mt-0 w-7' src={Carticon}/>
                    Cart
                </li>
                <li className=" mx-3 px-1 flex  hover:text-orange-400 cursor-pointer"
                    onClick={()=>{
                        setisSignin(!isSignin);
                    }}
                >
                    <img className='m-1 mt-0 w-7' src={ isSignin? SignOuticon : Signinicon}/>
                    {isSignin? "LogOut" : "Login"}
                </li>
               
                </ul>
            </div>
        </div>
    );
 };

export default Header