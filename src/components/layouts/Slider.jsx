import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Slider = () => {
  const products = useSelector((state) => state.slideDisp);
  const slideRef = useRef(null);

  const scrollLeft = () => {
    if (!slideRef.current) return;
    slideRef.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!slideRef.current) return;
    slideRef.current.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10 mx-5 rounded-lg bg-transparent ">
        <p className="text-xl text-white  font-bold mx-5 py-2">More Items to Consider</p>
      <div className="products relative snap-x snap-mandatory ">
        <ul ref={slideRef}  className="flex flex-row overflow-x-auto gap-32">
          {products.map((item) => (
            <img
              src={item.img}
              key={item.id}
              className="w-52 h-48 object-contain snap-start hover:scale-110"
              alt=""
            />
          ))}
        </ul>
        <button
          onClick={scrollLeft}
          className="absolute bg-white rounded-full -translate-y-1/2 text-3xl top-1/2 left-0 p-1"
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
        <button
          onClick={scrollRight}
          className="absolute bg-white rounded-full -translate-y-1/2 text-3xl top-1/2 right-0 p-1"
        >
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
