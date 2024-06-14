// eslint-disable-next-line no-unused-vars
import React from "react";

const MainDashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6">
          Welcome back, <span>MASUKIN API</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Campaign</h2>
            <p>
              Total Campaign: <span>MASUKIN API</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Artikel</h2>
            <p>
              Total Artikel: <span>MASUKIN API</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
