import { useState } from "react";


const Categories = () => {
    
    const [active, setActive] = useState(0)
    const categories = [
    "All", "Groceries", "Fruits", "Fashion", "Sports",
    "Electronics", "Toys", "Beauty", "Kids", "Men", "Women"
  ];
  return (
    <div className='border border-white rounded-lg bg-gray-400'>
     <div>
        <ul className='flex flex-row justify-around items-center [&>li]:rounded-lg font-semibold tracking-wide [&>li]:p-1 text-white text-sm'>
           {
            categories.map((cat, index)=>(
                <li key={cat}
                onClick={()=>setActive(index)} 
                className={active === index ? "bg-white text-black" : "hover:bg-white hover:text-black"}>{cat}</li>
            ))
           }
        </ul>
     </div>
    </div>
  )
}

export default Categories
