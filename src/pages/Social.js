/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import activity1 from "../resources/images/blood-donation.jpg";
import activity2 from "../resources/images/tree-plantation.jpg";
import activity3 from "../resources/images/swachh-bharat.jpeg";
import activity4 from "../resources/images/drug-abuse.jpg";
import activity5 from "../resources/images/hiv-awareness.jpg";
import activity6 from "../resources/images/anti-tabacco.jpg";
import activity7 from "../resources/images/world-environment.jpg";
import activity8 from "../resources/images/yoga.jpeg";
import activity9 from "../resources/images/traffic.jpg";

import ImageGridView from "../components/ImageGridView";






const Business = () => {
  const images = [
    activity1,
    activity2,
    activity3,
    activity4,
    activity5,
    activity6,
    activity7,
    activity8,
    activity9
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-blue-600 text-lg text-center underline underline-offset-2 font-bold leading-tight tracking-tight text-heading  lg:text-3xl">
      GLIMPSES OF ACTIVITIES
      </h1>
      <p className="lg:w-2/3  mx-auto my-5 leading-relaxed text-center flex items-center justify-center text-lg">
      Glimpses of activities include outdoor pursuits like hiking, camping, rallies and sports, as well as reading, crafting. Social engagements, work-related tasks, educational pursuits, volunteer efforts, creative endeavors, and fitness activities.
              </p>
      <ImageGridView images={images} />
    </div>
  );
};

export default Business;
