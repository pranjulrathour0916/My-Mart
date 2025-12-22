import {
  faAngleDown,
  faIndianRupee,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { useProducts } from "./query/productsQuery.ts";
import Dropdown from "./resuable/Dropdown";
import { useState } from "react";
import Footer from "./Footer";
import {  useSelector } from "react-redux";

const Proddetail = () => {
  const { state } = useLocation();

  // TanStack Query
  const { data = [], isPending, error } = useProducts();

  const navigate = useNavigate();

  // Redux
  const prods = useSelector((state)=> state.products.filterprods)
  const filtering = data.filter((item) => item.category === state.category)
  
  // USestate for dropdown
  const [openId, setOpenId] = useState();


  // Part of Tanstack
  if (isPending) return <p>Loading..</p>;
  if (error) return <p>{error.message}</p>;

  const handleDropDown = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Nvaigate to next page
  const handlClick = (id) => {
    navigate("/selectprod", {
      state: id,
    });
  };

  const handleRatingFilter = (selectedRating) => {

  };

  return (
    <>
      <div className="flex flex-row gap-2 p-2">
        <div className="  w-3/12 min-h-screen">
          <div className="flex flex-col p-2 gap-10">
            <div className="flex flex-row justify-between  w-full items-center">
              <p className="font-bold  text-lg">Filters</p>
              <p className="text-blue-700 text-sm font-semibold">Clear All</p>
            </div>
            <div className=" space-y-4">
              <p className=" text-sm">Categories</p>

              <p
                onClick={() => handleDropDown("footwear")}
                className="font-bold ml-3 "
              >
                Footwear <FontAwesomeIcon className="" icon={faAngleDown} />
              </p>
              {openId === "footwear" && <Dropdown id="footwear" />}
              <p
                onClick={() => handleDropDown("brand")}
                className="font-bold ml-3 "
              >
                Brand <FontAwesomeIcon className="" icon={faAngleDown} />
              </p>
              {openId === "brand" && <Dropdown id="brand" />}
              <p>Gender</p>
              <p>Price</p>
              <div>
                <p>Rating</p>
                <ul className="">
                  <li className="flex items-center m-6 mt-2 gap-3">
                    <input
                      onClick={() => handleRatingFilter(3)}
                      type="checkbox"
                      className="scale-150"
                    />
                    <span>3 Rating</span>
                  </li>
                  <li className="flex items-center m-6 mt-2 gap-3">
                    <input
                      onClick={() => handleRatingFilter(3)}
                      type="checkbox"
                      className="scale-150"
                    />
                    <span>4 Rating</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full min-h-screen p-2 space-y-4">
          <div className="perspective-[2000px]">
            <ul className="grid  grid-cols-4 bg-slate-100  gap-4 mx-5">
              {filtering.map((item) => (
                <li
                  onClick={() => handlClick(item.id)}
                  className="border shadow-[0_0px_20px_rgba(0,0,0,0.5)]  p-2 hover:shadow-xl flex flex-col text-black "
                  key={item.id}
                >
                  <p className="font-semibold">{item.title} </p>
                  <div className="flex justify-center p-2">
                    <img
                      src={item.image}
                      className="w-full object-contain h-36 bg-slate-400 p-2 rounded-md "
                      alt=""
                    />
                  </div>
                  <div className="text-left">
                    <div className="space-y-1 mx-2">
                      <p className="font-medium line-clamp-2">
                        {item.description}
                      </p>
                      <p className="">
                        <span className="text-lg">{item.rating.count}</span>
                        <span className="font-medium text-xs">
                          {" "}
                          Bought in past two months
                        </span>
                      </p>
                      <div className="flex items-center gap-1">
                        <p>{item.rating.rate}</p>
                        {[...Array(Math.floor(item.rating.rate))].map(
                          (_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faStar}
                              className="text-yellow-400"
                            />
                          )
                        )}
                      </div>
                      <p>
                        <span className="text-2xl font-bold">
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
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Proddetail;
