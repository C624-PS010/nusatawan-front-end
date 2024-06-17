// eslint-disable-next-line no-unused-vars
import React from "react";

const Header = ({ toggleSidebar, displaySidebar }) => {
  return (
    <header className="bg-white shadow p-4 flex gap-5">
      <button onClick={toggleSidebar} className="text-white bg-tertiary px-2 rounded-md">
        {!displaySidebar ? "<" : ">"}
      </button>
      <div className="text-2xl font-semibold">Dashboard</div>
    </header>
  );
};

export default Header;
