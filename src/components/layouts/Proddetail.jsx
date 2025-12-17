
import {  faAngleDown, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

import Dropdown from './resuable/Dropdown';
import { useState } from 'react';
const Proddetail = () => {
  const prods = useSelector((state)=> state.slideDisp);
  const {state} = useLocation()
  let filteredPords = prods.filter(item => item.title === state.title);
  console.log("this is state in prodetails", state)
  console.log("this is proddtail",filteredPords)

  const [openId, setOpenId] = useState()

  const handleDropDown = (id) => {
    setOpenId(prev => prev === id ? null : id)
  }

  
  return (
    <div className='flex flex-row gap-2 p-2'>
      <div className='bg-black border w-3/12 min-h-screen'>
        <div className='flex flex-col p-2 gap-10'>
          <div className='flex flex-row justify-between  w-full items-center'>
            <p className='font-bold text-white text-lg'>Filters</p>
            <p className='text-blue-700 text-sm font-semibold'>Clear All</p>
          </div>
           <div className='text-white space-y-4'>
             <p className=' text-sm'>Categories
             </p>
             
             <p onClick={()=>handleDropDown("footwear")} className='font-bold ml-3 '>Footwear <FontAwesomeIcon className='text-white' icon={faAngleDown}/></p>
           {openId === "footwear" && <Dropdown id="footwear"/>}
             <p onClick={()=>handleDropDown("brand")} className='font-bold ml-3 '>Brand <FontAwesomeIcon className='text-white' icon={faAngleDown}/></p>
           {openId === "brand" && <Dropdown id="brand"/>}
            <p>Gender</p>
            <p>Price</p>
            <p>Rating</p>
           </div>
        </div>
      </div>
      <div className='bg-black w-full min-h-screen p-2 space-y-4'>
    <div>
        <ul className="grid grid-cols-4  text-white gap-4 mx-5">
            {   
                filteredPords.map((item)=>(
                    <li className="border bg-white p-2 hover:shadow-xl flex flex-col text-black " key={item.id}>
                        <p className="font-semibold">Up to 60% off | Trending products from Emerging Bu…</p>
                       <div className="flex justify-center">
                         <img  src={item.img} className="w-48  " alt="" />
                       </div>
                       <div className="text-left">
                         <p className="text-left mx-2 font-bold">{item.title} </p>
                      <div className="space-y-1 mx-2">
                         <p className="font-medium">Men Lace Up Sneaker Shoes</p>
                        <p className="text-sm">200+ bought in past two months</p>
                        <p><span className="text-2xl font-bold"><FontAwesomeIcon className="text-sm" icon={faIndianRupee}/>1046</span> <span className="text-sm">MRP</span></p>
                        {/* <p><span className="text-sm">Free Deliviery</span> <span className="font-bold">Wed,10 Dec</span></p> */}
                        {/* <button className="font-bold text-sm bg-yellow-300 p-2 rounded-full">Add to Cart</button> */}
                      </div>
                       </div>
                    </li>
                ))
            }
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Proddetail
