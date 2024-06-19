import React from "react";

import banner from "../resources/images/banner.jpg";

function Home() {

  return (
    <div>
      <main>
        {/* Hero section */}
        <section className="px-8 pt-6 pb-2 text-center md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              <h1 className="text-center text-blue-500 text-3xl font-semibold text-heading md:max-w-3xl lg:text-4xl xl:text-5xl">
                Welcome to 1 M.P. AIR SQN NCC
              </h1>
              <p className="mt-6 max-w-1xl text-xl">
                The 1 MP Air Squadron of the NCC in Indore epitomizes excellence in aerial training and discipline. With unwavering commitment, they soar through the skies, embodying precision and professionalism.
              </p>
            </div>
            <div className="mt-12 md:px-2">
              <img
                className="h-auto w-full rounded-lg"
                src={banner}
                alt="college"
              />
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500">
                Explore Our Training
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                The 1 MP Air Squadron of the NCC in Indore epitomizes excellence in aerial training and 
                discipline. With unwavering commitment, they soar through the skies, embodying precision
                 and professionalism. Their endeavors carve a path of courage and honor, instilling pride
                  in their community. Through rigorous training and camaraderie, they forge bonds as 
                  strong as steel, fostering a spirit of unity and resilience. As guardians of the air,
                   they stand vigilant, ready to defend and serve their nation with unwavering devotion.
                    In the azure expanse above, they execute maneuvers with grace and finesse, a testament
                     to their dedication and skill. 
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;


