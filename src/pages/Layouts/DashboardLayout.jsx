// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../dashboard/components/Sidebar";
import Header from "../../dashboard/components/Header";

const DashboardLayout = () => {
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const toggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar displaySidebar={displaySidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} displaySidebar={displaySidebar} />
        <main id="maincontent" className="overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
