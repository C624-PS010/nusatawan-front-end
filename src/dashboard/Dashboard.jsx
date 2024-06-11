// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

const MainPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-4">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
