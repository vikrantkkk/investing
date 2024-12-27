import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "./Hero";
import Featured from "./Featured";
import WorkShop from "./WorkShop";
import LearnWorkShop from "./LearnWorkShop";
import Testimonials from "./Testimonials";
import Mentor from "./Mentor";
import Traders from "./Traders";
import Faq from "./Faq";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Featured />
      <WorkShop />
      <LearnWorkShop/>
      <Testimonials/>
      <Mentor/>
      <Traders/>
      <Faq/>
      <Footer/>
    </MainLayout>
  );
};

export default LandingPage;
