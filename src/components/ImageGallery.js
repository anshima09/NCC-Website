import React, { useState, useEffect } from "react";
import ImageZoomView from "./ImageZoomView";

const ImageGallery = ({ title, subTitle,img1,img2,img3,img4,img5,img6 }) => {
  const [zoomToggle, setZoomToggle] = useState(false);
  const [zoomToggleImage, setZoomToggleImage] = useState("");

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.scrollBehavior = "smooth";
    };

    if (zoomToggle) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      handleBodyOverflow();
    }
  }, [zoomToggle, zoomToggleImage]);

  return (
    <div>
      {zoomToggle && (
        <ImageZoomView
          img={zoomToggleImage}
          zoomToggle={zoomToggle}
          setZoomToggle={setZoomToggle}
        />
      )}
      <section className="text-gray-600 body-font ">
        <div className=" px-5 py-10 mx-auto ">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-600 hover:underline underline-offset-2 cursor-pointer">
              {title || "Title"}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {subTitle || "Sub Title"}
            </p>
          </div>
          {/* anshims sharma */}
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <img
                onClick={(e) => {
                  setZoomToggle(!zoomToggle);
                  setZoomToggleImage(e.target.currentSrc);
                }}
                  className="scale-100  hover:scale-105 transition-all duration-1000 aspect-square  w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                  src={img1 || "img1"} alt="Placeholder" />
              </div>
              <div>
                <img
                onClick={(e) => {
                  setZoomToggle(!zoomToggle);
                  setZoomToggleImage(e.target.currentSrc);
                }}
                  className="scale-100  hover:scale-105 transition-all duration-1000 aspect-square  w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                  src={img2 || "img2"} alt="Placeholder" />
              </div>
              <div>
                <img
                onClick={(e) => {
                  setZoomToggle(!zoomToggle);
                  setZoomToggleImage(e.target.currentSrc);
                }}
                  className="scale-100  hover:scale-105 transition-all duration-1000 aspect-square  w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                  src={img3 || "img3"} alt="Placeholder" />
              </div>
              <div>
                <img
                onClick={(e) => {
                  setZoomToggle(!zoomToggle);
                  setZoomToggleImage(e.target.currentSrc);
                }}
                  className="scale-100  hover:scale-105 transition-all duration-1000 aspect-square  w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                  src={img4 || "img4"} alt="Placeholder" />
              </div>
              <div>
                <img
                onClick={(e) => {
                  setZoomToggle(!zoomToggle);
                  setZoomToggleImage(e.target.currentSrc);
                }}
                  className="scale-100  hover:scale-105 transition-all duration-1000 aspect-square  w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                  src={img5 || "img5"} alt="Placeholder" />
              </div>
              <div>
                <img
                onClick={(e) => {
                  setZoomToggle(!zoomToggle);
                  setZoomToggleImage(e.target.currentSrc);
                }}
                  className="scale-100  hover:scale-105 transition-all duration-1000 aspect-square  w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                  src={img6 || "img6"} alt="Placeholder" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
