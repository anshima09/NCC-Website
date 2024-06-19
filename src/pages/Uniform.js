import React from 'react'
import uniform1 from "../resources/images/uniform1.png"

const Uniform = () => {
    return (

        <div className="overflow-hidden px-6">
            <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">


                <section className="text-gray-600 body-font ">
                <h1 className="text-4xl font-semibold underline underline-offset-2  mb-4 text-blue-500 text-center" >UNIFORM</h1>

                    <div className="container mx-auto py-8 flex items-center justify-between">
                        <p className="m-5 leading-relaxed  text-lg">
                            Air Wing NCC cadets wear gray blue uniform similar to the Air Force. The uniform is compulsory at all the meetings, events and training of the NCC. Uniform items includes :
                            <br />
                            A. Shirt <br />
                            B. Trouser <br />
                            C. NCC beret <br />
                            D. Hackle <br />
                            E. NCC Badge <br />
                            F. NCC Arms Title <br />
                            G. NCC Flaps <br />
                            H. NCC Shoes (Leather shoes) <br />
                            I. Socks <br />
                            J. NCC Belt <br />
                            K. For Girls- Full juda net, Juda pins, Figure of eight. <br />
                            L. For Boys- Must be in proper cleanshave and haircut. <br />
                            M. Cadet must have a proper tracksuit. <br />
                        </p>
                        <div className="order-first block w-full mt-12 aspect-square lg:mt-0 lg:order-first">
                      <img
                        className="object-cover object-center w-full mx-auto lg:ml-auto"
                        alt="hero"
                        src={uniform1}
                      />
                    </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Uniform