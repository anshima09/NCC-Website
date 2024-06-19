import React from "react";
import { Link } from "react-router-dom";
import Sign_In from "../resources/images/Sign_In.jpg";


function Login() {
  
  return (
    <div className="min-h-[50vh] w-full">
      <div className="flex sm:flex-col-reverse lg:flex-row justify-center items-center lg:flex-wrap w-full h-full overflow-y-scroll">
        <div className="lg:w-1/2 w-full h-full p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <h1 className="mt-5 lg:mt-0 text-3xl text-blue-600  font-medium xl:text-3xl ">
              Sign In
            </h1>
            <div className="w-full flex-1 mt-8">
              <form className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  id="email"
                  name="email"
                  display-message="Email Address"
                  placeholder="Email"
                />

                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  id="password"
                  name="password"
                  display-message="Password"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3">Sign In</span>
                </button>
                <p className="mt-6 text-xs flex justify-between text-gray-600 text-center">
                  <Link
                    to="/forgot"
                    className="w-full btn btn-sm btn-link sm:w-auto"
                  >
                    Forgot password?
                  </Link>
                  <Link
                    to="/signup"
                    className="w-full btn btn-sm btn-link sm:w-auto"
                  >
                    Create an account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 hidden sm:block w-full">
          <img
            className="hidden object-cover w-full lg:h-screen h-full sm:block"
            src={Sign_In}
            alt="Sign In"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

