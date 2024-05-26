import React, { Fragment } from "react";
import HomeBannerSection from "./components/homeBannerSection/HomeBannerSection";
import HomeImagesSection from "./components/homeImagesSection/HomeImagesSection";
// import Autocomplete from "./components/Autocomplete/Autocomplete";

const Home = () => {
  return (
    <Fragment>
      <HomeBannerSection />
      <HomeImagesSection />
      {/* <Autocomplete /> */}
    </Fragment>
  );
};

export default Home;
