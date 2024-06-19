import React from 'react'

const SignUp = () => {
  return (
    <div className="m-10  flex justify-center  ">
    <div className=" p-8 rounded shadow-md w-full max-w-md">
      <h2 className="pt-4 pb-4 text-center mt-1 lg:mt-0 text-3xl text-blue-600  font-medium xl:text-3xllg:w-full w-full">Sign Up</h2>
      <form>
        <div className="mb-4">
        <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              id="email"
              name="email"
              display-message="Email Address"
              placeholder="Email Address"
            />
        </div>
        <div className="mb-4">
        <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  id="password"
                  name="password"
                  display-message="Password"
                  placeholder="Password"
                />
        </div>
       
        <button
          type="submit"
          className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}

export default SignUp