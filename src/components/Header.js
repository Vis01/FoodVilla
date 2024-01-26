import React, { useState } from 'react'
import Title from './Title';
import Searchicon from '../utills/icons/search.svg';
import Offericon from '../utills/icons/Offer.svg';
import Helpicon from '../utills/icons/Help.svg';
import Signinicon from '../utills/icons/Signin.svg';
import SignOuticon from '../utills/icons/SignOut.svg';
import Carticon from '../utills/icons/Cart.svg';
import { Link } from 'react-router-dom';
const Header=()=>{
   const [isSignin,setisSignin]=useState(false);
    return (
        <div className="relative h-20 w-full border-2  flex m-2  justify-between  ">
            <Title/>
            <div className="">               
                <ul className=" flex text-xl font-bold justify-between mg-2 mt-3">
                <li className=" mx-3 px-1 flex justify-center hover:text-orange-400 cursor-pointer ">
                   <Link to="/about">
                   About Us
                   </Link>
                   
                </li>
                <li className=" mx-3 px-1 flex item-center hover:text-orange-400 cursor-pointer ">
                    <img className=' mt-0 w-8' src={Offericon}/>
                     Offer
                </li>
                <li className=" mx-3 px-1   hover:text-orange-400 cursor-pointer">   
                  <Link className='flex items-center' to="/contact" >
                  <img className='m-1 mt-0 w-7' src={Helpicon}/>
                    Contact Us
                  </Link>    
                </li>
                <li className=" mx-3 px-1 flex items-center  hover:text-orange-400 cursor-pointer"  >
                    <img className='m-1 mt-0 w-7' src={Carticon}/>
                    Cart
                </li>
                <li className=" mx-3 px-1 flex items-center    hover:text-orange-400 cursor-pointer"
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