import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee, faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'




const Cart = () => {
  const carItems = useSelector((state)=> state.cart)
  const count = carItems.reduce((sum, item)=>  sum + item.quantity,0)
  const totalPrice = carItems.reduce((sum, item)=> sum + item.quantity * item.price,0)
  
  return (
    <div>
     <div className=' text-black mt-14 flex flex-row justify-around mx-10  gap-2'>
       <div className='w-3/4 flex flex-col gap-1'>
        <div className="addres bg-white text-sm font-semibold border p-3 flex flex-row items-center justify-between px-5">
        <p>Saved Address</p>
        <button className='border border-black text-xs p-2 text-blue-500 font-semibold'>Enter Delivery Pincode</button>
      </div>
      {carItems.map((item, index)=>(
          <div key={index} className="cart bg-white py-2 ">
       <div className=''>
        <div className='flex border shadow-sm shadow-black flex-row 2 p-2 gap-5 mx-6 mt-2'>
        <div className="image  p-2">
        <img src={item.image} className='w-20 h-20' alt="" />
       </div>
       <div className="desc w-full space-y-1">
       <div className='text-sm font-semibold flex  justify-between'>
         <p className=''>{item.title}</p>
        <p className='text-gray-500'> Delivered by Mon Dec 2</p>
       </div>
        <p className='text-slate-500 text-sm'>Size 10, White 10</p>
        <p>Seller : BRUTONFOOTWEAR</p>
       <div className="price flex items-center gap-3 py-4">
        <p className='text-xs line-through'><FontAwesomeIcon icon={faIndianRupee}/> 2499</p>
        <span ><FontAwesomeIcon icon={faIndianRupee}/><span className='text-xl'>{item.price}</span></span>
        <span className='text-green-600 text-xs'>82 % Off</span>
       </div>
       <div className='flex gap-10'>
        <div className='flex gap-4'>
          <FontAwesomeIcon className='border p-1 rounded-full' icon={faSubtract}/>
          <span className='border px-6'>{item.quantity}</span>
          <FontAwesomeIcon className='border p-1 text-sm rounded-full' icon={faPlus}/>
        </div>
        <span>SAVE FOR LATER</span>
        <span>REMOVE</span>
       </div>
       </div>
       </div>
       </div>
      </div>
      ))}
    
      <div className='  bg-white py-3 flex justify-end '>
       <p className='text-white font-semibold w-1/6 mx-5 text-center bg-orange-400 text-sm  p-4 px-5'>PLACE ORDER</p>
      </div>
      </div>
      <div className="price border bg-white text-black  w-1/3 ">
        <div className='flex p-3 flex-col gap-3'>
          <div >
          <p className='text-gray-700'>PRICE DETAILS</p>
        </div>
        <div >
          <ul>
            <li className='flex justify-around'>Price  
              <span> {count}</span>
              <span><FontAwesomeIcon icon={faIndianRupee}/>{Math.floor(totalPrice)}</span>
            </li>
           
          </ul>
        </div>
        <div>
          Total Amount
        </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Cart
