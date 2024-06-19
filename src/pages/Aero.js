/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import aero from "../resources/images/aero.jpg";
import statics from "../resources/images/static.jpg"
import controlline from "../resources/images/controlline.jpg"
import remote from "../resources/images/remote.jpg"


const Business = () => {
  return (
    <>
      <div className="overflow-hidden px-6">
        <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">
          <main className="my-14 lg:mt-20">

            <div className="flex justify-center items-center ">
              <span></span>
              <h1 className="text-blue-600  text-lg text-center underline underline-offset-2 font-bold leading-tight tracking-tight text-heading  lg:text-3xl">
                AEROMODELLING ACTIVITY
              </h1>

            </div>

            <section className="relative flex items-center w-full bg-white">
              <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="relative flex-col items-start m-auto align-middle">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div className="relative items-center gap-12 m-auto lg:inline-flex">
                      <div className="max-w-xl text-center lg:text-left">
                        <div>
                          <p className="text-2xl font-medium tracking-tight text-blue-600 sm:text-3xl">
                            Aeromodelling
                          </p>
                          <p className="max-w-xl text-lg mt-4 tracking-tight text-gray-600">
                          Aero modelling is the study of aircraft and the process of building the models of actual aircrafts which are unable to carry persons and are used for sports and study purpose, that is called Aero-Modelling. Cadets are taught the basics of Aero-Modelling which is technically valuable.
                          </p>
                        </div>
                        <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                          <a
                            className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                            href="#_"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="order-first block w-full mt-12 aspect-square lg:mt-0 lg:order-first">
                      <img
                        className="object-cover object-center w-full mx-auto  lg:ml-auto"
                        alt="hero"
                        src={aero}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="relative items-center w-full px-5 py-2 mx-auto md:px-12 lg:px-10 max-w-7xl">
                <div className="w-full mx-auto text-left">
                  <div className="relative flex-col items-center m-auto align-middle">
                    <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex flex flex-col-reverse lg:flex-row">
                      <div className="flex flex-col m-auto md:order-first">
                        <div className="max-w-xl">
                          <div>
                            <p className="text-2xl font-medium tracking-tight  sm:text-4xl"></p>
                          </div>
                        </div>
                        <div className=" lg:max-w-7xl">

                          <div>
                            <p className=" text-lg font-bold leading-6 text-blue-600">
                              Static Model
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                          The static model of aeromodelling involves the meticulous construction of scaled-down replicas of aircraft, focusing primarily on accuracy and detail rather than flight capabilities. Enthusiasts painstakingly craft these models using various materials such as balsa wood, plastic, or metal, paying close attention to every aspect of the aircraft's design, including its structure, surface finishes, and markings. While these models do not fly, they serve as works of art, showcasing the craftsmanship and passion of the builder. 
                          </div>

                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img
                          className="object-cover object-center w-full mx-auto border lg:ml-auto"
                          alt="hero"
                          src={statics}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="relative items-center w-full px-5 py-2 mx-auto md:px-12 lg:px-10 max-w-7xl">
                <div className="w-full mx-auto text-left">
                  <div className="relative flex-col items-center m-auto align-middle">
                    <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex flex flex-col-reverse lg:flex-row">
                      <div className="flex flex-col m-auto md:order-first">
                        <div className="max-w-xl">
                          <div>
                            <p className="text-2xl font-medium tracking-tight  sm:text-4xl"></p>
                          </div>
                        </div>
                        <div className=" lg:max-w-7xl">

                          <div>
                            <p className="text-lg font-bold leading-6 text-blue-600">
                              Control Line Model
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                          Control line aeromodelling involves flying model aircraft tethered to the pilot by thin wires, known as control lines, creating a circular flight path. Pilots manipulate the aircraft's flight path by adjusting the angle of the control lines, controlling throttle, and using body movements to guide the model through maneuvers. These models range from simple designs for beginners to complex replicas of real aircraft for advanced enthusiasts. Control line flying offers a unique hands-on experience, requiring precision and coordination. 
                          </div>

                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img
                          className="object-cover object-center w-full mx-auto border lg:ml-auto"
                          alt="hero"
                          src={controlline}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="relative items-center w-full px-5 py-2 mx-auto md:px-12 lg:px-10 max-w-7xl">
                <div className="w-full mx-auto text-left">
                  <div className="relative flex-col items-center m-auto align-middle">
                    <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex flex flex-col-reverse lg:flex-row">
                      <div className="flex flex-col m-auto md:order-first">
                        <div className="max-w-xl">
                          <div>
                            <p className="text-2xl font-medium tracking-tight  sm:text-4xl"></p>
                          </div>
                        </div>
                        <div className=" lg:max-w-7xl">

                          <div>
                            <p className="text-lg font-bold leading-6 text-blue-600">
                              Remote Control Model
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                          Remote control aeromodelling involves piloting model aircraft using radio frequency transmitters to wirelessly control the aircraft's movements. Enthusiasts build and customize models ranging from basic trainers to intricate replicas of real aircraft, often with functional features like retractable landing gear and working flaps. Pilots operate the aircraft from the ground, using handheld transmitters to manipulate control surfaces such as ailerons, elevators, and rudders, allowing for precise flight control. 
                          </div>

                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img
                          className="object-cover object-center w-full mx-auto border lg:ml-auto"
                          alt="hero"
                          src={remote}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section>
              <div className="relative items-center w-full px-5 py-6 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="w-full mx-auto text-left">
                  <div className="relative flex-col items-center m-auto align-middle">
                    <div className="items-center gap-12 w-full text-left  lg:gap-24 lg:inline-flex">
                      <div className="order-first block w-screen mt-12  lg:mt-0">
                        <img
                          className="h-screen object-cover w-screen"
                          // className="object-cover object-center w-full mx-auto   border lg:ml-auto"

                          alt="hero"
                          src={bba3}
                        />
                      </div>
                      <div className="flex flex-col mt-6 lg:mt-0">
                        <div className="max-w-xl">
                          <div>
                            <p className="text-xl font-medium tracking-tight text-blue-500 sm:text-2xl">
                              "Unlock Your Future with BBA: Igniting the Spark
                              of Technological Excellence"
                            </p>
                          </div>
                        </div>
                        <div className="mx-auto mt-6 lg:max-w-7xl">
                          <ul
                            role="list"
                            className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3"
                          >
                            <li>
                              <div>
                                <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                                  Connect with Industry Leaders:
                                </p>
                              </div>
                              <div className="mt-2 text-base text-gray-500">
                                Our program is designed in collaboration with
                                industry leaders, ensuring that you graduate
                                with the skills and knowledge that employers are
                                seeking.
                              </div>
                            </li>
                            <li>
                              <div>
                                <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                                  "Shape the Future, One Business Strategy at a
                                  Time:
                                </p>
                              </div>
                              <div className="mt-2 text-base text-gray-500">
                                "BBA empowers you to be a catalyst for change.
                                Engage in internships, collaborate on real-world
                                projects. "
                              </div>
                            </li>
                            <li>
                              <div>
                                <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                                  Empower Your Career Journey:
                                </p>
                              </div>
                              <div className="mt-2 text-base text-gray-500">
                                "Your journey doesn't end with graduation; it
                                begins. BBA opens doors to a multitude of career
                                opportunities — from strategic business leader
                                to visionary entrepreneur.
                              </div>
                            </li>
                            <li>
                              <div>
                                <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                                  Where Passion Meets Profession:
                                </p>
                              </div>
                              <div className="mt-2 text-base text-gray-500">
                                "More than an academic pursuit, BBA is where
                                your passion meets your profession. Transform
                                your enthusiasm for business into a dynamic
                                career.."
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="relative items-center w-full px-5 py-8 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-12 text-left lg:gap-24 md:grid-cols-2 lg:grid-cols-3">
                  <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                    <div className="mx-auto lg:max-w-7xl">
                      <ul
                        role="list"
                        className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
                      >
                        <li>
                          <div>
                            <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                              Best Labs
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            Our lab activities are crafted to hone skills
                            demanded by the industry. By engaging with
                            real-world scenarios. troubleshooting challenges
                          </div>
                        </li>
                        <li>
                          <div>
                            <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                              Faculty support
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            Our BBA faculty is a symphony of expertise, with
                            each teacher contributing their unique notes of
                            knowledge and experience.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                    <img
                      className="object-cover object-center w-full mx-auto  border lg:ml-auto"
                      alt="hero"
                      src={bba4}
                    />
                  </div>
                  <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                    <div className="mx-auto lg:max-w-7xl">
                      <ul
                        role="list"
                        className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
                      >
                        <li>
                          <div>
                            <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                              Placement
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            Benefit from our strong ties with the industry. Our
                            college actively collaborates with renowned tech
                            companies,our BBA graduates are on from the moment
                            they step into the job market.
                          </div>
                        </li>
                        <li>
                          <div>
                            <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                              Activites
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            experience a celebration of diversity through
                            multicultural events and international days. Our
                            college takes pride in its inclusive environment.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Business;
