import { useMemo } from "react";

import { useNavigate } from "react-router-dom";
import { useProducts } from "./query/productsQuery.ts";

const Products = () => {
  const navigate = useNavigate();


  const {data, isPending, error } = useProducts()
  const products = data ?? []

  const chunkedItems = useMemo(
    () => {
      const out = [];
      for (let i = 0; i < 16; i += 4) {
        out.push(products.slice(i, i + 4));
      }
      return out;
    }, // eslint-disable-next-line
    [data]
  );
  if(isPending)
    return <p>Loading..</p>
  if(error)
   return console.log(error)

  const handleClick = (title) => {
    console.log("this is title from product", title);
    navigate(`/prodetail/${title}`);
  };


  return (
    <>
     <p className="text-center text-2xl uppercase">Quick Check</p>
    <div className="grid grid-cols-4 rounded-xl  perspective-[4000px]  gap-4 mt-4 mx-5">
      {chunkedItems.map((chunk, chunkIndex) => (
        <div
          key={chunkIndex}
          className="   rounded-lg "
        >
          <div className="">
            <ul className="grid  grid-cols-2  perspective-1000 gap-4 p-4">
              {chunk.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="  p-2 transform-style-preserve-3d  rounded-xl   hover:scale-105 "
                >
                 
                  <img
                    src={item.image}
                    alt=""
                    className="w-60 h-32 rounded-lg   "
                  />
                  <p className="text-center text-xs line-clamp-2 font-semibold mt-4">
                    {item.title}
                  </p>
                 
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Products;
