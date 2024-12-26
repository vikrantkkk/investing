import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "./Hero";
import Featured from "./Featured";
import WorkShop from "./WorkShop";
import LearnWorkShop from "./LearnWorkShop";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Featured />
      <WorkShop />
      <LearnWorkShop/>
      <Testimonials/>
    </MainLayout>
  );
};

export default LandingPage;
