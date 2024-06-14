// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
// import { BiSolidCategory } from "react-icons/bi";
import { MdArticle, MdCampaign } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className=" bg-tertiary text-white flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-white">
        <h1 className="text-2xl font-bold pl-2">Nusatawan</h1>
      </div>
      <nav className="flex flex-col flex-1 p-4 h-full">
        <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaHome size="20" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/dashboard/artikel"
          className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
        >
          <MdArticle size="20" />
          <span>Artikel</span>
        </Link>
        <Link
          to="/dashboard/campaign"
          className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
        >
          <MdCampaign size="20" />
          <span>Campaign</span>
        </Link>
      </nav>
      <div className="flex items-center justify-center h-20 border-t border-gray-700">
        <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FiLogOut size="20" />
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
