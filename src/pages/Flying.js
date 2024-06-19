/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import flying2 from "../resources/images/flying2.jpg";
import flying3 from "../resources/images/flying3.jpg";

const Bcom = () => {
  return (
    <>
      <div className="overflow-hidden px-6">
        <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">
          <main className="my-14 lg:mt-20">

            <div className="flex justify-center items-center ">
              <span></span>
              <h1 className="text-blue-600 text-lg text-center underline underline-offset-2 font-bold leading-tight tracking-tight text-heading  lg:text-3xl">
                FLYING ACTIVITY
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
                            Flying
                          </p>
                          <p className="max-w-xl text-xl mt-4  tracking-tight text-gray-600">
                            NCC Flying is one of the most exciting and exhilarating experiences a cadet undergoes during the course of his/her training. Every NCC cadet is given a free sortie in 2nd and 3rd year of their training period. Each cadet got the opportunity of sortie in Virus SW-80 Microlight Aircraft. This is a two-seater propeller aircraft that requires short runways.
                          </p>
                          <a className=" text-white bg-gradient-to-r   from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1  text-center "
                            href="">View Pdf</a>
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
                        src={flying2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="relative items-center w-full  py-2 mx-auto md:px-12 lg:px-10 max-w-7xl">
                <div className="w-full mx-auto text-left">
                  <div className="relative flex-col items-center m-auto align-middle">
                    <div className="items-center gap-12 text-left lg:gap-24 flex flex-col-reverse lg:flex-row lg:inline-flex">
                      <div className="flex flex-col m-auto md:order-first">
                        <div className="max-w-xl">
                          <div>
                            <p className="text-2xl font-medium tracking-tight  sm:text-4xl"></p>
                          </div>
                        </div>
                        <div className="mt-6 lg:max-w-7xl">


                          <div>
                            <p className="mt-5 text-xl font-bold leading-6 text-blue-600">
                              Strict Rules to be followed while going for Flying :-
                            </p>
                          </div>
                          <div className="mt-2 text-lg text-gray-500">
                            1. SD Cadets must be in Proper Haircut akin to military and Clean Shave. SW  Cadets must ensure proper Figure of Eight. No Excuses Will Be Entertained Regarding Uniform and Turnout
                            <br />

                            2. Knowledge of SOP is must. Vital Actions. Basics Of Aircraft Flying(Primary Controls/Secondary Controls and their working principle)

                            <br />
                            3. Polythene bag is must
                          </div>
                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img
                          className="object-cover object-center w-full mx-auto  lg:ml-auto"
                          alt="hero"
                          src={flying3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section>
              <div className="relative items-center w-full  py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="w-full mx-auto text-left">
                  <div className="relative flex-col items-center m-auto align-middle">
                    <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img
                          className="object-cover object-center w-full mx-auto   lg:ml-auto"
                          alt="hero"
                          src={bcom3}
                        />
                      </div>
                      <div className="flex flex-col mt-6 lg:mt-0">
                        <div className="max-w-xl">
                          <div>
                            <p className="text-xl font-medium tracking-tight text-blue-500 sm:text-2xl">
                              "Empower Your Future with BCom: Fostering a Legacy
                              of Business Proficiency"
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
                                  "Influence the Future, One Business Insight at
                                  a Time:"
                                </p>
                              </div>
                              <div className="mt-2 text-base text-gray-500">
                                BCOM empowers you to be a catalyst for
                                change.Engage in internships, collaborate on
                                real-world projects, and build a network that
                                opens doors to exciting career opportunities.
                              </div>
                            </li>
                            <li>
                              <div>
                                <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                                  Empower Your Career Journey:
                                </p>
                              </div>
                              <div className="mt-2 text-base text-gray-500">
                                "Your journey doesn't conclude with graduation;
                                it initiates. BCom unfolds a myriad of career
                                opportunities — from financial expert to
                                business visionary. Join a league of
                                professionals creating waves in the industry."
                              </div>
                            </li>
                            <li>
                              <div>
                                <p className="mt-5 text-lg font-medium leading-6 text-blue-600">
                                  Where Passion Meets Profession:
                                </p>
                              </div>
                              <div className="mt-2 text-base text-gray-500">
                                "Beyond an academic pursuit, BCom is where your
                                passion aligns with your profession. Transform
                                your enthusiasm for commerce into a flourishing
                                career, and let each project showcase your
                                dedication and expertise."
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
              <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-16 max-w-7xl">
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
                            Our BCOM faculty is a symphony of expertise, with
                            each teacher contributing their unique notes of
                            knowledge and experience.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                    <img
                      className="object-cover object-center w-full mx-auto lg:ml-auto"
                      alt="hero"
                      src={bcom4}
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
                            companies,our BCOM graduates are on from the moment
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

export default Bcom;
