// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable";
import Campaigns from "../../network/Campaigns";
import localUser from "../../utils/localUser";

const TableCampaign = () => {
  const [campaignsData, setCampaignsData] = useState([]);
  const navigate = useNavigate();

  const fetchCampaigns = async () => {
    try {
      const response = await Campaigns.getAllCampaigns();
      setCampaignsData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch campaigns", error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const localUserData = localUser.get();

      if (!localUserData) throw new Error("User not logged in");
      else if (!localUserData.isAdmin) throw new Error("User is not admin");

      const responseData = await Campaigns.deleteCampaignById(id);

      window.alert("Berhasil menghapus data");
      window.dispatchEvent(new Event("refreshCampaign"));
      console.log(responseData);
    } catch (error) {
      console.error(error);

      if (error.data && error.data.status === 401) window.alert("User not logged in");
      else if (error.data && error.data.status === 403) window.alert("User is not admin");
      else if (error.data) window.alert(error.data.message);
      else window.alert(error.message);
    }
  };

  useEffect(() => {
    fetchCampaigns();

    window.addEventListener("refreshCampaign", fetchCampaigns);

    return () => {
      window.removeEventListener("refreshCampaign", fetchCampaigns);
    };
  }, []);

  const columns = ["Title"];
  const actions = [
    {
      label: "View",
      onClick: (id) => {
        navigate(`/dashboard/campaign/${id}`);
      },
    },
    {
      label: "Delete",
      onClick: (id) => {
        deleteHandler(id);
      },
    },
  ];
  const buttonStyles = [
    "bg-blue-500", // Style untuk tombol View
    "bg-red-600", // Style untuk tombol Delete
  ];

  return (
    <div className="p-20 overflow-y-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Campaign data</h1>
        <Link to="/dashboard/campaign/create">
          <button
            type="submit"
            className="font-semibold text-white bg-green-500 hover:bg-green-400 border-2 rounded-lg text-sm px-2 ml-24 py-2 text-center me-2 mb-5 "
          >
            Add Campaign
          </button>
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={campaignsData}
        actions={actions}
        buttonStyles={buttonStyles}
      />
    </div>
  );
};

export default TableCampaign;
