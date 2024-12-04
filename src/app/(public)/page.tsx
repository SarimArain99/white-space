import React from "react";
import HeroSec from "./components/HeroSec";
import WorkManagement from "./components/WorkManagement";
import Extension from "./components/Extension";
import Customise from "./components/Customise";
import Pricing from "./components/Pricing";
import Work from "./components/Work";
import YourData from "./components/YourData";
import Sponsors from "./components/Sponsors";
import Apps from "./components/Apps";
import Reviews from "./components/Reviews";
import Trial from "./components/Trial";

function page() {
  return (
    <div>
      <HeroSec />
      <WorkManagement />
      <Extension />
      <Customise />
      <Pricing />
      <Work />
      <YourData />
      <Sponsors/>
      <Apps/>
      <Reviews/>
      <Trial/>
    </div>
  );
}

export default page;
