import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../wrapper/SharedLayout";
import { BigSidebar, Smallsidebar, Navbar } from '../../components'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Smallsidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
          <Outlet />
          </div>
        </div>

      </main>
    </Wrapper>
  );
};

export default SharedLayout;

