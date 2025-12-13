import { faIndianRupee } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"


const SingleProd = () => {
    const prods = useSelector((state)=> state.slideDisp);
    const navigate = useNavigate();
   
    const handleClick = (title) =>{
      console.log("singleprod",title)
      navigate('/prodetail',{
        state : {title}
      })
     
    }
  return (
    <div>
      <div>
        <ul className="grid grid-cols-4  text-white gap-4 mx-5">
            {
                
                prods.map((item)=>(
                    <li className="border bg-white p-2 hover:shadow-xl flex flex-col text-black " key={item.id}>
                        <p className="font-semibold">Up to 60% off | Trending products from Emerging Bu…</p>
                       <div className="flex justify-center">
                         <img onClick={()=> handleClick(item.title)} src={item.img} className="w-48  " alt="" />
                       </div>
                       <div className="text-left">
                         <p className="text-left mx-2 font-bold">Bacca Bucci </p>
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
  )
}

export default SingleProd
