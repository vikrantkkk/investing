import React from "react";
import MainLayout from "../layouts/MainLayout";
import Contact from "../components/Contact";
import Faq from "../components/Faq";

const ContactPage = () => {
  return (
    <MainLayout>
      <Contact />
      <Faq />
    </MainLayout>
  );
};

export default ContactPage;
