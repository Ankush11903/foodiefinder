import { useState, useRef, useEffect } from "react";
// import logo from "../logo.jpg";
import logo3 from "../meeta.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Modal from "./modal";

const Logo = () => {

  return (
    <Link to="/">
      <img
        className="h-[4rem] ml-10 mt-2"
        src={logo3}
        alt="Food Image"
      />
    </Link>
  );
};

const Header = () => {

  const isLogin = useSelector((store) => store.user.isAuth);
  const user=useSelector((store)=>store.user.user);
  

  return (
    <div className="flex sticky top-0 z-20 bg-white shadow-md ">
      <div className="w-1/2 flex justify-between">
        <Logo />
      </div>
      <ul className="flex space-x-24 text-2xl font-medium  text-[#020202] justify-around py-3">
        <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300">
          <Link to="/about">About</Link>
        </li>

        <li>
          <Modal />
        </li>
        {isLogin ? (
          <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300 w-20">
            <button >{user.name}</button>
          </li>
        ) : (
          <Link to="/login">
            <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300 w-20">
              <button >Login</button>
            </li>
          </Link>
        )}
        {/* <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300 w-20">
            <button onClick={() => setProfile()}>Profile</button>
          </li> */}
      </ul>
    </div>
    // </div>
  );
};
export default Header;
