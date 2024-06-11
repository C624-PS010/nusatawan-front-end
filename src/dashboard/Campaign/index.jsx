// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Header from "../components/Header.jsx"
import Sidebar from "../components/Sidebar.jsx"

const TableCampaign = () => {
  const navigate = useNavigate();

  const columns = ['Title', 'Content', 'Image'];
  const data = [
    { id: 1, 
      Title: 'MASUKIN API', 
      Content: 'MASUKIN API', 
      Image:'MASUKIN API'

    },
  ];

  const actions = [
    {
      label: 'View',
      onClick: (row) => {
        navigate(`/viewCampaign/${row.id}`);
      }
    },
    {
      label: 'Edit',
      onClick: (row) => {
        navigate(`/EditCampaign/${row.id}`);
      }
    },
    {
      label: 'Delete',
      onClick: (row) => {
        alert(`Deleting ${row.Name}`);
      }
    }
  ];

  const buttonStyles = [
    'bg-blue-500',  // Style untuk tombol View
    'bg-yellow-300', // Style untuk tombol Edit
    'bg-red-600'    // Style untuk tombol Delete
  ];

  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className='p-20'>
          <div className='flex justify-between'>
            <h1 className="text-3xl font-bold mb-4">Data Campaign</h1>
              <a href="/createCampaign">
                  <button type="submit"
                      className="font-semibold text-white bg-green-500 hover:bg-green-400 border-2 rounded-lg text-sm px-2 ml-24 py-2 text-center me-2 mb-5 ">
                      Create New Campaign
                  </button>
              </a>
          </div>
            <DataTable columns={columns} data={data} actions={actions} buttonStyles={buttonStyles} />
        </div>
      </div>
    </div>
  );
};

export default TableCampaign;
