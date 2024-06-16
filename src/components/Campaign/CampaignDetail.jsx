import { useState, useEffect } from "react";
import CampaignCard from "./CampaignCard";
import CampaignCardSkeleton from "./CampaignCardSkeleton";
import Campaigns from "../../network/Campaigns";
import { setErrorMessage } from "../../utils/errorHandler";

const CampaignDetail = () => {
  const [campaignsData, setCampaignsData] = useState([]);
  const [renderLoading, setRenderLoading] = useState(true);
  const [renderError, setRenderError] = useState(false);
  const [message, setMessage] = useState("");
  const skeleton = [1, 2, 3];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setMessage("");
        setRenderError(false);
        setRenderLoading(true);

        const response = await Campaigns.getAllCampaigns();

        setCampaignsData(response.data);
        setRenderLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch articles", error);

        setRenderLoading(false);
        setRenderError(true);
        setMessage(setErrorMessage(error));
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
          {renderLoading ? (
            skeleton.map((item) => <CampaignCardSkeleton key={item} />)
          ) : renderError ? (
            <h1>{message}</h1>
          ) : campaignsData.length === 0 ? (
            <h1 className="text-2xl font-bold">Tidak ada artikel</h1>
          ) : (
            campaignsData.map((item) => <CampaignCard key={item.id} {...item} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default CampaignDetail;
