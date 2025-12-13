
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
const Proddetail = () => {
  const prods = useSelector((state)=> state.slideDisp);
  const {state} = useLocation()
  let filteredPords = prods.filter(item => item.title === state.title);
  console.log("this is state in prodetails", state)
  console.log("this is proddtail",filteredPords)
  return (
    <div className='flex flex-row gap-2 p-2'>
      <div className='bg-white border w-2/12 min-h-screen'>
        <div className='flex flex-row justify-between p-2 items-center'>
            <h1 className='font-bold text-lg'>Filters</h1>
            <p className='text-blue-700 text-sm font-semibold'>Clear All</p>
        </div>
      </div>
      <div className='bg-white w-full min-h-screen p-2 space-y-4'>
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
