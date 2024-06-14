import { useState, useEffect } from "react";
import CampaignCard from "./CampaignCard";
import Campaigns from "../../network/Campaigns";

const CampaignDetail = () => {
  const [campaignsData, setCampaignsData] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await Campaigns.getAllCampaigns();
        setCampaignsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section data-aos="fade-up" className="container">
      <div className="container p-10 md:p-20 transform duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {campaignsData.map((item) => (
            <CampaignCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignDetail;
