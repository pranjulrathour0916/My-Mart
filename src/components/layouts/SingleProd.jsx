import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProducts } from "./query/productsQuery.ts";

import { useNavigate } from "react-router-dom";

const SingleProd = () => {
  const { data, isPending, error } = useProducts();
  const navigate = useNavigate();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  const handleClick = (category) => {
    console.log("singleprod", category);
    navigate("/prodetail", {
      state: { category },
    });
  };
  return (
    <div>
      <div>
        <ul className="grid grid-cols-4  text-white gap-4 mx-5">
          {data.map((item) => (
            <li
              className="border border-black/20  bg-transparent p-2 hover:shadow-xl hover:scale-105 flex flex-col text-black "
              key={item.id}
            >
              <p className="font-semibold uppercase">{item.category}</p>
              <div className="flex  justify-center mt-3">
                <img
                  onClick={() => handleClick(item.category)}
                  src={item.image}
                  className="w-full h-36 object-contain "
                  alt=""
                />
              </div>
              <div className="text-left mt-4 space-y-3">
                <p className="text-left mx-2 font-bold">{item.title}</p>
                <div className="mx-2 space-y-3">
                  <p className="font-medium line-clamp-2">{item.description}</p>
                  
                  <p>
                    <span className="text-2xl font-bold">
                      From
                      <FontAwesomeIcon
                        className="text-sm"
                        icon={faIndianRupee}
                      />
                     {item.price}
                    </span>{" "}
                    <span className="text-sm">MRP</span>
                  </p>
                  {/* <p><span className="text-sm">Free Deliviery</span> <span className="font-bold">Wed,10 Dec</span></p> */}
                  {/* <button className="font-bold text-sm bg-yellow-300 p-2 rounded-full">Add to Cart</button> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleProd;
