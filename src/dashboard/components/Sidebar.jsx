// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaHome } from 'react-icons/fa';
// import { BiSolidCategory } from "react-icons/bi";
import { MdArticle, MdCampaign } from "react-icons/md";
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className=" bg-tertiary text-white flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-white">
        <h1 className="text-2xl font-bold pl-2">Nusatawan</h1>
      </div>
      <nav className="flex flex-col flex-1 p-4 h-full">
        <a href="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaHome size="20" />
          <span>Dashboard</span>
        </a>
        {/* <a href="/user" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaUser size="20" />
          <span>Users</span>
        </a> */}
        {/* <a href="/kategori" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <BiSolidCategory size="20" />
          <span>Kategori</span>
        </a> */}
        <a href="/artikelDashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <MdArticle size="20" />
          <span>Artikel</span>
        </a>
        <a href="/campaignDashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <MdCampaign  size="20" />
          <span>Campaign</span>
        </a>
      </nav>
      <div className="flex items-center justify-center h-20 border-t border-gray-700">
        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FiLogOut size="20" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
