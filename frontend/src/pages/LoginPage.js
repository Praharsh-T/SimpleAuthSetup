import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        loginData
      );
      const { success, message } = response.data;
      if (success) {
        console.log("LOGINSUCCESSFUL");
        alert("LOGINSUCCESSFUL");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  return (
    <div className='w-full h-screen flex'>
      <img
        src='https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        alt='background'
        className='object-cover object-center h-screen w-7/12'
      />

      <div className='bg-white flex flex-col justify-center items-center w-5/12 shadow-lg'>
        <h1 className='text-3xl font-bold text-blue-500 mb-2'>LOGIN</h1>
        <div className='w-1/2 text-center'>
          <form onSubmit={handleLoginSubmit}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={loginData.username}
              onChange={handleLoginChange}
              className='shadow-md border w-full h-10 px-3 py-2 text-blue-500 focus:outline-none focus:border-blue-500 mb-3 rounded'
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={loginData.password}
              onChange={handleLoginChange}
              className='shadow-md border w-full h-10 px-3 py-2 text-blue-500 focus:outline-none focus:border-blue-500 mb-3 rounded'
            />
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow'>
              Sign In
            </button>
          </form>
          <br />
          <Link to={"/register"} className='mt-6 '>
            <h4 className='mt-3 font-serif text-center text-blue-500'>
              Register Now!!
            </h4>
          </Link>
          <Link to={"/"} className='mt-6 '>
            <h4 className='mt-3 border-2 font-serif text-center text-blue-500'>
              Return To Home Page
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
