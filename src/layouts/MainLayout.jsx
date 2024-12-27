import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden">
        <main className="pt-20">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
