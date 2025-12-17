
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Products = () => {
    const navigate = useNavigate()
    const prods = useSelector((state)=> state.slideDisp);
    const handleClick = (title) => {
        console.log("this is title from product", title)
        navigate('/prodetail',{
        state : {title}
      })
    };
    
    const chunkedItems = useMemo(() => {
        const out = [];
        for (let i = 0; i < prods.length; i += 4) {
            out.push(prods.slice(i, i + 4));
        }
        return out;
    },// eslint-disable-next-line
    []
);


  return (
    <div className="grid grid-cols-4 rounded-xl  perspective-1000  gap-4 mx-5">
            <p className="text-white text-lg text-center flex items-center justify-center font-semibold mt-1 p-1">
              Fashion Your Style
            </p>
      {chunkedItems.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="  shadow-[0_0px_20px_rgba(0,0,0,0.5)]  rounded-lg ">
          <div className="">
            <ul className="grid  grid-cols-2 perspective-1000 gap-4 p-4">
              {chunk.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleClick(item.title)}
                  className="text-white  p-2 transform-style-preserve-3d  rounded-xl   shadow-[0_0px_20px_rgba(0,0,0,0.5)] hover:scale-105 "
                >
                  <img src={item.img} alt="" className="w-60 h-28 rounded-lg image-3d-tilt  " />
                  <p className="text-center text-white text-xs font-semibold mt-4">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
