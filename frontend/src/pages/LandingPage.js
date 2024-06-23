import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      {" "}
      <header>
        <nav class='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
          <div class='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <a href='/' class='flex items-center'>
              <img
                src='https://imgs.search.brave.com/kHtzjQY2UpWmccX96yuoS5qxeCduM4NvMfkwRImndZU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9nb29nbGUtYXV0/aGVudGljYXRvci0y/LnN2Zw.svg'
                class='mr-3 h-6 sm:h-9'
                alt='Auth Logo'
              />
              <span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                Authentication
              </span>
            </a>
            <div class='flex items-center lg:order-2'>
              <a
                href='/login'
                class='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'>
                Log in
              </a>
              <a
                href='/login'
                class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                Get started
              </a>
              <button
                data-collapse-toggle='mobile-menu-2'
                type='button'
                class='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                aria-controls='mobile-menu-2'
                aria-expanded='false'>
                <span class='sr-only'>Open main menu</span>
                <svg
                  class='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clip-rule='evenodd'></path>
                </svg>
                <svg
                  class='hidden w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'></path>
                </svg>
              </button>
            </div>
            <div
              class='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
              id='mobile-menu-2'>
              <ul class='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                  <a
                    href='#'
                    class='block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white'
                    aria-current='page'>
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    class='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
                    Features
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section class='bg-white dark:bg-gray-900'>
        <div class='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div class='mr-auto place-self-center lg:col-span-7'>
            <h1 class='max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white'>
              Authentication For Users
            </h1>
            <p class='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              Using MERN Stack!!
            </p>
            <Link
              to={"/login"}
              class='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
              Login
              <svg
                class='w-5 h-5 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'></path>
              </svg>
            </Link>
          </div>
          <div class='hidden lg:mt-0 lg:col-span-5 lg:flex'>
            <img
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
              alt='mockup'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
