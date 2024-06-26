// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Articles from "../../network/Articles";
import Campaigns from "../../network/Campaigns";
import { useGlobalState } from "../../context/GlobalStateContext";

const MainDashboard = () => {
  const { userProfile, isLoggedIn } = useGlobalState();
  const [article, setArticle] = useState([]);
  const [campaign, setCampaign] = useState([]);

  const fetchData = async () => {
    const articleResponse = await Articles.getAllArticles();
    const campaignResponse = await Campaigns.getAllCampaigns();

    setArticle(articleResponse.data);
    setCampaign(campaignResponse.data);

    console.log(articleResponse);
    console.log(campaignResponse);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6">
          Welcome, <span>{isLoggedIn ? userProfile.username : "User"}!</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Campaign</h2>
            <p>
              Total Campaign: <span>{campaign.length}</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Artikel</h2>
            <p>
              Total Artikel: <span>{article.length}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
