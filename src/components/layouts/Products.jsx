import shoes from "../../assets/shoes.png";
import clothes from "../../assets/clothes.png";

const Products = () => {
    const items = [
    {id: 1, title : "Smartphones", price : "6999", img : shoes, width : 200},
    {id: 2, title : "Clothes", price : "699", img : clothes, width:300},
    {id: 3, title : "Shoes", price : "699", img : shoes, width:200},
    {id: 4, title : "Shoes", price : "699", img : shoes, width:200}
  ]
  return (
    <div className="grid grid-cols-4 mx-4 gap-3">
      <div className=" border bg-slate-200  ">
            <p className="text-black text-lg text-center font-bold mt-1">Fashion Your Style</p>
        <ul className="grid grid-cols-2  rounded-lg justify-around items-center gap-4 p-2">
            {items.map((item, index)=>(
            <li className="text-white p-2 rounded-xl bg-white object-contain" key={item.id}>
                <img src={item.img} alt="" className="w-60 h-28"/>
                <p className="text-center text-black text-xs font-semibold mt-4">{item.title}</p>
            </li>
        ))}
        </ul>
      </div>
      <div className="   ">
        <ul className="grid grid-cols-2 bg-slate-200  rounded-lg justify-around items-center gap-4 p-2">
            {items.map((item, index)=>(
            <li className="text-white p-2 rounded-xl bg-white   object-contain" key={item.id}>
                <img src={item.img} alt="" className="w-60 h-28"/>
                <p className="text-center text-black mt-4">{item.title}</p>
            </li>
        ))}
        </ul>
      </div>
      <div className="   ">
        <ul className="grid grid-cols-2 bg-slate-200  rounded-lg justify-around items-center gap-4 p-2">
            {items.map((item, index)=>(
            <li className="text-white p-2 rounded-xl bg-white   object-contain" key={item.id}>
                <img src={item.img} alt="" className="w-60 h-28"/>
                <p className="text-center text-black mt-4">{item.title}</p>
            </li>
        ))}
        </ul>
      </div>
      <div className="   ">
        <ul className="grid grid-cols-2 bg-slate-200  rounded-lg justify-around items-center gap-4 p-2">
            {items.map((item, index)=>(
            <li className="text-white p-2 rounded-xl bg-white   object-contain" key={item.id}>
                <img src={item.img} alt="" className="w-60 h-28"/>
                <p className="text-center text-black mt-4">{item.title}</p>
            </li>
        ))}
        </ul>
      </div>
      <div className="   ">
        <ul className="grid grid-cols-2 bg-slate-200  rounded-lg justify-around items-center gap-4 p-2">
            {items.map((item, index)=>(
            <li className="text-white p-2 rounded-xl bg-white   object-contain" key={item.id}>
                <img src={item.img} alt="" className="w-60 h-28"/>
                <p className="text-center text-black mt-4">{item.title}</p>
            </li>
        ))}
        </ul>
      </div>
      <div className="   ">
        <ul className="grid grid-cols-2 bg-slate-200  rounded-lg justify-around items-center gap-4 p-2">
            {items.map((item, index)=>(
            <li className="text-white p-2 rounded-xl bg-white   object-contain" key={item.id}>
                <img src={item.img} alt="" className="w-60 h-28"/>
                <p className="text-center text-black mt-4">{item.title}</p>
            </li>
        ))}
        </ul>
      </div>
     
      
    </div>
  )
}

export default Products
