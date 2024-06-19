
import React from "react";

function ContactUs() {

  return (
    <div className="h-full w-full">
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4 text-blue-500 text-center" >Contact Details</h1>
          <p className="m-5 leading-relaxed items-center justify-center text-center text-lg">
            Admission into the Air Wing NCC held every year. Admission process includes test, interview,
            fitness test, group discussion. Admission process is common for all the students who are
            willing to join NCC. For any enqueries and questions related to admission procedure, you can
            contact us using following details mentioned below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10">
            <div className="bg-white rounded-md p-10 shadow-md">
              <h3 className="text-xl text-center font-semibold mb-2">Mobile Number</h3>
              <p className="text-gray-700 text-center">+91 7312702119</p>
            </div>
            <div className="bg-white rounded-md p-10 shadow-md">
              <h3 className="text-xl text-center font-semibold mb-2">Email</h3>
              <p className="text-gray-700 text-center">indoreairncc1mp@gmail.com</p>
            </div>
            <div className="bg-white rounded-md p-10 shadow-md">
              <h3 className="text-xl text-center font-semibold mb-2">Address</h3>
              <p className="text-gray-700 text-center">Nehru Stadium Square Indore</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
