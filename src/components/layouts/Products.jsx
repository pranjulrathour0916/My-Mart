
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
    <div className="grid grid-cols-4 gap-4 mx-8">
      {chunkedItems.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className=" border bg-slate-100 ">
          <div className="">
            <p className="text-black text-lg text-center font-semibold mt-1">
              Fashion Your Style
            </p>
            <ul className="grid grid-cols-2 gap-4 p-2">
              {chunk.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleClick(item.title)}
                  className="text-white p-2 rounded-xl bg-white hover:shadow-lg hover:sc"
                >
                  <img src={item.img} alt="" className="w-60 h-28" />
                  <p className="text-center text-black text-xs font-semibold mt-4">
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
