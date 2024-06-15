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
  const renderContent = (content) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Replace custom tags with HTML tags
      const formattedParagraph = paragraph
        .replace(
          /\[b\](.*?)\[\/b\]/g,
          "<div style='font-weight: bold; font-size: 18px; padding-top: 20px; '>$1</div>"
        )
        .replace(/\[li\](.*?)\[\/li\]/g, "<li >$1</li>")
        .replace(/\n/g, "<br />");

      return (
        <p
          key={index}
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        ></p>
      );
    });
  };

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
        <p className="text-justify">{renderContent(campaignData.content)}</p>
      </div>
    </div>
  );
};

export default CampaignDetails;
