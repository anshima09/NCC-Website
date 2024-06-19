/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ImageGallery from "../components/ImageGallery";
import yep1 from "../resources/images/yep1.jpg"
import yep2 from "../resources/images/yep2.jpg"
import yep3 from "../resources/images/yep3.jpg"
import yep4 from "../resources/images/yep4.jpg"
import yep5 from "../resources/images/yep5.jpg"
import yep6 from "../resources/images/yep6.jpg"
import rdc1 from "../resources/images/rdc1.jpg"
import rdc2 from "../resources/images/rdc2.jpg"
import rdc3 from "../resources/images/rdc3.jpg"
import rdc4 from "../resources/images/rdc4.jpg"
import rdc5 from "../resources/images/rdc5.jpg"
import rdc6 from "../resources/images/rdc6.jpg"
import aivsc1 from "../resources/images/aivsc1.jpg"
import aivsc2 from "../resources/images/aivsc2.jpg"
import aivsc3 from "../resources/images/aivsc3.jpg"
import aivsc4 from "../resources/images/aivsc4.jpg"
import aivsc5 from "../resources/images/aivsc5.jpg"
import aivsc6 from "../resources/images/aivsc6.jpg"
import catc1 from "../resources/images/catc1.jpg"
import catc2 from "../resources/images/catc2.jpg"
import catc3 from "../resources/images/catc3.jpg"
import catc4 from "../resources/images/catc4.jpg"
import catc5 from "../resources/images/catc5.jpg"
import catc6 from "../resources/images/catc6.jpg"

const GalleryArrayData = [
  {
    title: "YEP (YOUTH EXCHANGE PROGRAM) CAMP",
    subTitle: "INTERNATIONAL CAMP",
    img2:yep2,
    img3:yep3,
    img4:yep4,
    img5:yep5,
    img6:yep6,
    img1:yep1,
  },
  {
    title: "RDC (REPUBLIC DAY CAMP) CAMP",
    subTitle: "NATIONAL CAMP",
    img1:rdc1,
    img2:rdc2,
    img3:rdc3,
    img4:rdc4,
    img5:rdc5,
    img6:rdc6,
  },
  {
    title: "AIVSC (ALL INDIA VAYU SAINIK CAMP) CAMP",
    subTitle: "NATIONAL CAMP",
    img1:aivsc1,
    img2:aivsc2,
    img3:aivsc3,
    img4:aivsc4,
    img5:aivsc5,
    img6:aivsc6,
  },
  {
    title: "CATC COMBINED ANNUAL TRAINING CAMP",
    subTitle: "YEARLY CAMP",
    img1:catc1,
    img2:catc2,
    img3:catc3,
    img4:catc4,
    img5:catc5,
    img6:catc6,
  },

];


const Business = () => {
  return (
    <>
      <div className="overflow-hidden px-6">
        <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">


        <section className="text-gray-600 body-font ">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-semibold underline underline-offset-2  mb-4 text-blue-500 text-center" >CAMP ACTIVITES</h1>
          <p className="m-5 leading-relaxed  text-lg">
          Camp training is the practical manifestation of institutional training. The aim of camp training is to introduce cadets in developing comradeship, work team, leadership, self-confidence, in the cadets. It is compulsory for the cadets to attend at least one camp for 'B' Certificate exam and compulsory to attend two camps for 'C' certificate exam.
          </p>
        </div>
      </section>

          <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">

            <div className="flex justify-center items-center flex-col gap-10 ">
              {GalleryArrayData.map((item, key) => {
                return (
                  <ImageGallery
                    key={key}
                    title={item.title}
                    subTitle={item.subTitle}
                    img1={item.img1}
                    img2={item.img2}
                    img3={item.img3}
                    img4={item.img4}
                    img5={item.img5}
                    img6={item.img6}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Business;
