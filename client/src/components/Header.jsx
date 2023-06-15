import { useState, useRef, useEffect } from "react";
// import logo from "../logo.jpg";
import logo3 from "../meeta.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Modal from "./modal";
import { useDispatch } from "react-redux";
import { userLogout } from "../utils/UserSlice";
import cookie from 'js-cookie';

const Logo = () => {
  return (
    <Link to="/">
      <img className="h-[4rem] ml-10 mt-2" src={logo3} alt="Food Image" />
    </Link>
  );
};

const Header = () => {
  const isLogin = useSelector((store) => store.user.isAuth);
  const user = useSelector((store) => store.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cookieItem=cookie.get("token");
  const handleHover = () => {
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    console.log("logout");
    dispatch(userLogout());
    const id=user?._id
    cookie.remove("token");

    try {
      await fetch('http://localhost:5000/logout', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cookie: cookieItem,
          id:id
        }),
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

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
          
            
            <li
              className="text-lg py-3 hover:text-orange-600 transition-colors duration-300 w-20 relative"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <button>{user?.name}</button>
              {isOpen && (
                <div className="absolute z-10 bg-white rounded shadow-md mt-2 py-2 w-40">
                  <div 
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                  >
                    About
                  </Link>
                </div>
              )}
            </li>
          
        ) : (
          <Link to="/login">
            <li className="text-lg py-3 hover:text-orange-600 transition-colors duration-300 w-20">
              <button>Login</button>
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
