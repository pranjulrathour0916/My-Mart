import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shoes from "../../assets/shoes.png";
import {
  faBoltLightning,
  faIndianRupee,
  faLocation,
  faShoppingCart,
  faStar,
  faTicketSimple,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SelectProd = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="bg-white mx-10 min-h-screen mt-1 flex flex-row gap-1">
      <div className="w-2/5 self-start">
        <div className="flex flex-row ">
          <div className="bg-white w-2/12 h-2/3 p-2 flex flex-col gap-2 items-center justify-center">
            <img
              src={shoes}
              className="w-20 border border-black h-16 "
              alt=""
            />
            <img
              src={shoes}
              className="w-20 border border-black h-16 "
              alt=""
            />
            <img
              src={shoes}
              className="w-20 border border-black h-16 "
              alt=""
            />
            <img
              src={shoes}
              className="w-20 border border-black h-16 "
              alt=""
            />
          </div>
          <div className="mt-2 bg-slate-100 h-[450px] ">
            <img
              src={shoes}
              className="h-auto rotate-45 mt-16 object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="btn flex flex-row gap-2 text-white mt-2 justify-between ml-4 items-center ">
          <button className=" w-full bg-orange-400 font-semibold  p-4 ">
            <FontAwesomeIcon icon={faBoltLightning} className="text-lg" /> Buy
            Now
          </button>
          <button className=" w-full bg-orange-500 font-semibold  p-4 ">
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg" /> Add to
            Cart
          </button>
        </div>
      </div>
      <div className="details w-3/5 mt-2 border mx-1 border-black">
        <div className="mx-2 p-2">
          <ul className="space-y-2">
            <li>
              <p className="font-bold">Puma</p>
            </li>
            <li>
              Trending Stylish Casual Outdoor Sneakers Shoes For Men Sneakers
              For Men (White, Black , 8)
            </li>
            <li className="text-green-500 text-sm">Special Price</li>
            <li>
              <FontAwesomeIcon icon={faIndianRupee} />
              328{" "}
              <span className="text-sm line-through">
                <FontAwesomeIcon
                  className="line-through"
                  icon={faIndianRupee}
                />
                999
              </span>{" "}
              <span className="text-green-600 font-bold">67% off </span>
            </li>
            <li>
              <span className="bg-green-600 text-white rounded-xl px-4 font-bold text-sm p-1">
                3.9 <FontAwesomeIcon icon={faStar} className="text-xs" />
              </span>
              <span className="ml-3 text-slate-500 font-semibold">
                1,05,598 ratings and 2,939 reviews
              </span>
            </li>
            <li className="space-y-2">
              <span className="text-bold">Coupons for you</span>
              <p className="text-sm">
                <FontAwesomeIcon icon={faTicketSimple} />{" "}
                <span className="font-semibold">Special Price </span>Get extra
                7% off upto ₹140 on 50 item(s) (price inclusive of
                cashback/coupon){" "}
                <span className="text-blue-600 font-semibold">T&C</span>
              </p>
            </li>
            <li>
              <p className="font-semibold">Availale Offers</p>
              <ul className="space-y-3 text-sm mt-3">
                <li>
                  <span className="font-semibold">Bank Offer</span> 5% cashback
                  on Axis Bank Flipkart Debit Card up to ₹750{" "}
                  <span className="text-blue-600 font-semibold">T&C</span>
                </li>
                <li>
                  <span className="font-semibold">Bank Offer</span> 5% cashback
                  on Axis Bank Flipkart Debit Card up to ₹750{" "}
                  <span className="text-blue-600 font-semibold">T&C</span>
                </li>
                <li>
                  <span className="font-semibold">Bank Offer</span> 5% cashback
                  on Axis Bank Flipkart Debit Card up to ₹750{" "}
                  <span className="text-blue-600 font-semibold">T&C</span>
                </li>
                {!show && (
                  <li
                    onClick={handleShow}
                    className="font-semibold text-blue-700"
                  >
                    More Offers
                  </li>
                )}
                {show && (
                  <div className="space-y-3">
                    <li>
                      <span className="font-semibold">Bank Offer</span> 5%
                      cashback on Axis Bank Flipkart Debit Card up to ₹750{" "}
                      <span className="text-blue-600 font-semibold">T&C</span>
                    </li>
                    <li>
                      <span className="font-semibold">Bank Offer</span> 5%
                      cashback on Axis Bank Flipkart Debit Card up to ₹750{" "}
                      <span className="text-blue-600 font-semibold">T&C</span>
                    </li>
                    <li>
                      <span className="font-semibold">Bank Offer</span> 5%
                      cashback on Axis Bank Flipkart Debit Card up to ₹750{" "}
                      <span className="text-blue-600 font-semibold">T&C</span>
                    </li>
                    <li>
                      <span className="font-semibold">Bank Offer</span> 5%
                      cashback on Axis Bank Flipkart Debit Card up to ₹750{" "}
                      <span className="text-blue-600 font-semibold">T&C</span>
                    </li>
                  </div>
                )}
              </ul>
            </li>
            <li className="flex flex-col gap-2 ">
              <div>
                <FontAwesomeIcon icon={faLocation} />
                <span> Deliver to</span>
              </div>
              <div className="flex flex-row border-b-2 border-blue-600 w-1/3 py-2">
                <input
                  type="text"
                  inputMode="numeric"
                  name=""
                  id=""
                  placeholder="Enter Deivery Pincode"
                  className=" outline-none focus:outline-none focus:ring-0  text-sm "
                />
                <button className="text-slate-400 text-sm ml-3">Check</button>
              </div>
            </li>
            <li className="pt-5">
              <p className="font-bold">Delivery by 20 Dec, Saturday</p>
              <p className="text-sm text-slate-500">
                if ordered before 9:59 AM
              </p>
            </li>
            <li className="flex flex-row  gap-8">
              <p className="text-slate-500">Size- UK/India</p>
              <div className="flex flex-row gap-3">
                <span className="border-black border px-3 py- text-lg font-semibold">
                  6
                </span>
                <span className="border-black border px-3 py- text-lg font-semibold">
                  7
                </span>
                <span className="border-black border px-3 py- text-lg font-semibold">
                  8
                </span>
                <span className="border-black border px-3 py- text-lg font-semibold">
                  9
                </span>
                <span className="border-black border px-3 py- text-lg font-semibold">
                  10
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectProd;
