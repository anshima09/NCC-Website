import React from 'react'

const AlumniRegister = () => {
  return (
    <div className="min-h-screen mt-3 flex justify-center items-center ">
    <div className=" p-8 rounded shadow-md w-full max-w-md">
      <h2 className="pt-4 pb-4 text-3xl text-blue-600  font-medium lg:w-full w-full">Register</h2>
      <form>
        <div className="mb-4">
        <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="name"
              id="name"
              name="name"
              display-message="Full Name"
              placeholder="Full Name"
            />
        </div>
        <div className="mb-4">
        <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  id="Rnumber"
                  name="Rnumber"
                  display-message="Regimental Number"
                  placeholder="Regimental Number"
                />
        </div>
        <div className="mb-4">
        <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  id="email"
                  name="email"
                  display-message="Email Address"
                  placeholder="Email"
                />
        </div>
        <div className="mb-6">
        <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  id="phone"
                  name="phone"
                  display-message="Mobile Number"
                  placeholder="Mobile Number"
                />
        </div>
        <div className="mb-4">
        <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  id="occupation"
                  name="occupation"
                  display-message="Present Occupation"
                  placeholder="Present Occupation"
                />
        </div>
        <div className="mb-4">
        <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  id="addr"
                  name="addr"
                  display-message="Present Adrress"
                  placeholder="Present Adrress"
                />
        </div>
        <div className="mb-4">
        <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  id="certificate"
                  name="certificate"
                  display-message="C certificate"
                  placeholder="C Certificate holder ? (If yes, then mention garde)"
                />
        </div>
        <div className="mb-4">
        <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  id="year"
                  name="year"
                  display-message="Pass out year"
                  placeholder="Pass Out Year"
                />
        </div>
        <button
          type="submit"
          className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"        >
          Register
        </button>
      </form>
    </div>
  </div>
  )
}

export default AlumniRegister