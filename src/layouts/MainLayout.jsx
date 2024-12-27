import React from 'react';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div className='container w-full h-full'>
      <Header />
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default MainLayout;
