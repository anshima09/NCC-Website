/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Firing2 from "../resources/images/Firing2.jpg";
import skeet2 from "../resources/images/skeet2.jpg";
import range2 from "../resources/images/range2.jpg";


const Business = () => {
  return (
    <>
      <div className="overflow-hidden px-6">
        <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">
          <main className="my-14 lg:mt-20">

            <div className="flex justify-center items-center ">
              <span></span>
              <h1 className="text-blue-600  text-lg text-center underline underline-offset-2 font-bold leading-tight tracking-tight text-heading  lg:text-3xl">
                FIRING ACTIVITY
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
                            Firing
                          </p>
                          <p className="max-w-xl text-lg mt-4 tracking-tight text-gray-600">
                            Firing is an important and compulsory training for all the NCC cadets.
                            This is done so that fear of firearms can be removed from the minds of the
                            cadets. The art of shooting teaches precision, accuracy, coordination of body
                            movements, and confidence which helps to make a better person in public.
                            Different shooting competitions are conducted so that cadets can develop
                            the shooting skills.
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
                        src={Firing2}
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
                              SKEET SHOOTING
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            Skeet shooting, a disciplined shooting sport, challenges participants to
                            hit clay targets flung into the air at varying speeds and angles.
                            Originating as a form of recreational hunting practice in the early 20th
                            century, skeet shooting evolved into a competitive sport. It demands not
                            only precise marksmanship but also quick reflexes and adept hand-eye
                            coordination. Participants typically move through a series of shooting
                            stations arranged in a semicircle, firing at targets launched from high
                            and low houses.
                          </div>

                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img
                          className="object-cover object-center w-full mx-auto border lg:ml-auto"
                          alt="hero"
                          src={skeet2}
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
                              Range Firing (.22 Rifle)
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            Range firing with a .22 rifle offers a gateway to marksmanship training 
                            and recreational shooting for enthusiasts of all skill levels. The .22 
                            caliber's manageable recoil and affordability make it a popular choice for 
                            beginners honing their shooting fundamentals and seasoned shooters refining
                             their accuracy. Whether practicing precision target shooting, plinking at 
                             reactive targets, or participating in competitive shooting disciplines like
                              small-bore rifle competitions, the .22 rifle provides a versatile platform.
                          </div>

                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img
                          className="object-cover object-center w-full mx-auto border lg:ml-auto"
                          alt="hero"
                          src={range2}
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
