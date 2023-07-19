import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLoyout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLoyout;
