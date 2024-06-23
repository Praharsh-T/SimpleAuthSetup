import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function RegisterPage() {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        registrationData
      );
      console.log(response.data);
      alert("REGISTRATION SUCCESSFULL");
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: "",
      password: "",
    });
  };
  return (
    <div className='w-full h-screen flex'>
      <img
        src='https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        alt='background'
        className='object-cover object-center h-screen w-7/12'
      />
      <div className='bg-white flex flex-col justify-center items-center w-5/12 shadow-lg'>
        <h1 className='text-3xl font-bold text-blue-500 mb-2'>REGISTER</h1>
        <div className='w-1/2 text-center'>
          <form onSubmit={handleRegistrationSubmit}>
            <input
              type='text'
              name='username'
              placeholder='username'
              value={registrationData.username}
              onChange={handleRegistrationChange}
              className='shadow-md border w-full h-10 px-3 py-2 text-blue-500 focus:outline-none focus:border-blue-500 mb-3 rounded'
            />
            <input
              type='password'
              name='password'
              placeholder='password'
              value={registrationData.password}
              onChange={handleRegistrationChange}
              className='shadow-md border w-full h-10 px-3 py-2 text-blue-500 focus:outline-none focus:border-blue-500 mb-3 rounded'
            />
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow'>
              Register
            </button>
            <Link to={"/login"} className='mt-6 '>
              <h4 className='mt-3 font-serif text-center text-blue-500'>
                Login Now!!
              </h4>
            </Link>
            <Link to={"/"} className='mt-6 '>
              <h4 className='mt-3 border-2 font-serif text-center text-blue-500'>
                Return To Home Page
              </h4>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
