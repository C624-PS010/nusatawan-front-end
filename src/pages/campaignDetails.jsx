import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Campaigns from "../network/Campaigns";
import convertDate from "../utils/dateConverter";
import config from "../utils/config";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CampaignDetails = () => {
  const { id } = useParams();

  const [campaignData, setCampaignData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await Campaigns.getCampaignById(id);
        setCampaignData({ ...response.data });
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch articles: ", error);
      }
    };

    fetchCampaigns();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <div className="h-[300px] overflow-hidden">
        <LazyLoadImage
          src={`${config.baseUrl}/images/campaigns/${campaignData.image}`}
          alt={`Gambar kampanye ${campaignData.title}`}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          Ditulis oleh {campaignData.user.username} pada {convertDate(campaignData.createdAt)}
        </p>
        <h1 className="text-3xl font-bold pb-10">{campaignData.title}</h1>
        <p className="text-justify">{campaignData.content}</p>
      </div>
    </div>
  );
};

export default CampaignDetails;
