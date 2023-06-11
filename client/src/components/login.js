
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo2 from './loginlogo2.png'
import cookie from 'js-cookie';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response= await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name,
        // phoneNumber,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if(response.status===200){
      window.localStorage.setItem("token",data);
      cookie.set("token",data?.token,{expires:1})


      alert("User login successfully");
      navigate("/");
    }
    else{
      alert("Error occured");
    }
    
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url('bg-loginlogo2.jpg')`,
        zIndex: 40,
        opacity: 90,
        width: '350px',
        height: '800px',
        marginRight: '850px',
      }}
    >
      <div className="bg-white p-8 rounded shadow-md"
      style={{
        width: '500px',
        height: '600px',
        marginTop: '10px',
        marginLeft: '350px',
      }}>
        <img
          src={logo2}
          alt="Ambulance Background"
          className="absolute inset-0 w-full h-full object-cover opacity-1000 z-0"
          // style={{
          //   padding:'75px',
          //   height:'800px',
          //   width:'2000px',
          // }}
        />
        <div className="relative z-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between">
              {/* <Link to="/"> */}
                <button
                onClick={handleSubmit}
                  // onClick={handleSubmit}
                  type="submit"
                  className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
                  // className="bg-grey-500 text-white py-2 px-4 rounded hover:bg-grey-600 focus:outline-none focus:bg-grey-600"
                  style={{
                    marginLeft:'80px',
                  }}
                >
                  Login
                </button>
              {/* </Link> */}
              <Link to="/register">
                <button
                  type="submit"
                  // className="bg-grey-500 text-white py-2 px-4 rounded hover:bg-grey-600 focus:outline-none focus:bg-grey-600"
                  className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  style={{
                    marginRight:'80px',
                  }}
                >
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

