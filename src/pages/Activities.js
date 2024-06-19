import React from 'react'
import drill from '../resources/images/about/drill.jpg'
import firing from '../resources/images/about/firing.jpg'
import flying from '../resources/images/about/flying.jpg'
import camp from '../resources/images/about/camp5.jpg'
import aero from '../resources/images/about/aero-modelling.jpg'
import social from '../resources/images/about/social.jpg'

import { Link } from 'react-router-dom'
function Courses() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-tr bg-gray-100 flex justify-center items-center py-20">
        <div className="px-4  md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img className="w-full rounded-xl" src={drill} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">DRILL</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
              Drill is an important activity of a cadet's life. Turnout is very important in drill activity and it inculcates a sense of discipline, smartness in appearance, which creates self confidence. 
              </div>
              <Link to="Drill">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img className="w-full rounded-xl" src={flying} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">FLYING</h1>
            <h1>&nbsp;</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
              NCC Flying is one of the most exciting and exhilarating experiences a cadet undergoes during the course of his/her training.
              </div>
              <Link to="Flying">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img className="w-full rounded-xl" src={firing} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">FIRING</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
              Firing is an important and compulsory training for all the NCC cadets. This is done so that fear of firearms can be removed from the minds of the cadets. 
              </div>
              <Link to="Firing">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div >
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img className="w-full rounded-xl" src={camp} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">CAMP</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
              Camp training is the practical manifestation of institutional training. The aim of camp training is to introduce cadets in developing comradeship, work team, leadership, self-confidence, in the cadets.              </div>
              <Link to="Camp">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div >
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img className="w-full rounded-xl" src={aero} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">AERO-MODELLING</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
              Aero modelling is the study of aircraft and the process of building the models of actual aircrafts which are unable to carry persons and are used for sports and study purpose.              </div>
              <Link to="Aero">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div >
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
              <img className="w-full rounded-xl" src={social} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">SOCIAL ACTIVITIES</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
              The Cadets of Air Wing NCC are contributing towards social welfare. NCC conducted various activities at various places to make people aware against social evils.              </div>
              <Link to="Social">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div >
        </div >
      </div >
    </>
  )
}

export default Courses
