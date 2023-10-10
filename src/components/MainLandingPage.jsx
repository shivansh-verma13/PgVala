import React from "react";
import CarouselComponent from "./Carousel";
import Search from "./Search";
import LandingSection from "./LandingSection";
import Reviews from "./Reviews";
import OnBoarding from "./OnBoarding";

import personImg from "../assets/images/person.jpg";
import buildingImg from "../assets/images/building.jpg";
import roomImg from "../assets/images/room.jpg";

function MainLandingPage() {
  return (
    <div>
      <CarouselComponent img1={personImg} img2={buildingImg} img3={roomImg} />
      <Search />
      <LandingSection />
      <Reviews />
      <OnBoarding />
    </div>
  );
}

export default MainLandingPage;
