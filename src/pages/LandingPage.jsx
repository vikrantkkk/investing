import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import WorkShop from "../components/WorkShop";
import LearnWorkShop from "../components/LearnWorkShop";
import Testimonials from "../components/Testimonials";
import Mentor from "../components/Mentor";
import Traders from "../components/Traders";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import TimeTiking from "../components/TimeTiking";
import GrabSeat from "../components/GrabSeat";

const LandingPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Featured />
      <WorkShop />
      <LearnWorkShop />
      <Testimonials />
      <Mentor />
      <Traders />
      <TimeTiking/>
      <Faq />
      <GrabSeat/>
    </MainLayout>
  );
};

export default LandingPage;
