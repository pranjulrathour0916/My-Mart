import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

const Login = () => {
  const [flip, setFlip] = useState(true);

  const handleFlip = () => {
    setFlip((prev) => !prev);
  };
  return (
    <div className="">
      <div className="outer [perspective:1000px] relative">
        <motion.div
          animate={{rotateY:flip ? 0 :180}}
          transition={{ duration: 1, ease: easeInOut }}
          className="inner absolute inset-0 [transform-style:preserve-3d]"
        >
          <div className="front absolute inset-0 [backface-visibility:hidden] ">
            <form
              className="text-white pt-10  flex mt-28  flex-col justify-center items-center"
              action=""
            >
              <div className="flex flex-col gap-2 border w-1/3 break-all bg-black rounded-xl shadow-lg shadow-zinc-300 p-9 text-2xl">
                <div className="flex flex-row items-center gap-2 ">
                  <div className="flex flex-col gap-2 w-1/2">
                    <label>Firstname</label>
                    <input
                      className="rounded-xl"
                      type="text"
                      name="firstname"
                      id="firstname"
                      
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <label>Lastname</label>
                    <input
                      className="rounded-xl"
                      type="text"
                      name="lastname"
                      id="lastname"
                    />
                  </div>
                </div>
                <label>Email</label>
                <input
                  className="rounded-xl"
                  type="email"
                  name="email"
                  id="email"
                />
                <label>Phone Number</label>
                <input
                  className="rounded-xl"
                  type="tel"
                  name="phone"
                  id="phone"
                />
                  <label >Password</label>
                 <input
                  className="rounded-xl"
                  type="password"
                  name="password"
                  id="password"
                />
                <button
                  className="bg-gray-200 mt-2 rounded-xl p-1 font-semibold text-black"
                >
                  SignUp
                </button>
                <p className="text-base text-center mt-2">
                  Already have an Account?{" "}
                  <span onClick={handleFlip} className="text-green-300 underline">SignIn</span>
                </p>
              </div>
            </form>
          </div>
          <div className="back absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] ">
            <form
              className="text-white pt-10  flex mt-28  flex-col justify-center items-center"
              action=""
            >
              <div className="flex flex-col gap-2 border w-1/3 break-all bg-black rounded-xl shadow-lg shadow-zinc-300 p-9 text-2xl">
               
                <label>Phone Number</label>
                <input
                  className="rounded-xl"
                  type="tel"
                  name="phone"
                  id="phone"
                />
                <label >Password</label>
                 <input
                  className="rounded-xl"
                  type="password"
                  name="password"
                  id="password"
                />
                <button
                  className="bg-gray-200 mt-2 rounded-xl p-1 font-semibold text-black"
                >
                  SignIn
                </button>
                <p className="text-base text-center mt-2">
                  Don't have an Account?{" "}
                  <span onClick={handleFlip} className="text-green-300 underline">SignUp</span>
                </p>
              </div>
            </form>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
