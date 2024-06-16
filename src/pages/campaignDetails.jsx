import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Campaigns from "../network/Campaigns";
import convertDate from "../utils/dateConverter";
import config from "../utils/config";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DetailPageSkeleton from "../components/DetailPageSkeleton";
import { setErrorMessage } from "../utils/errorHandler";

const CampaignDetails = () => {
  const { id } = useParams();

  const [campaignData, setCampaignData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      setIsError(false);
      setMessage("false");

      const response = await Campaigns.getCampaignById(id);

      setCampaignData({ ...response.data });
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch articles: ", error);

      setLoading(false);
      setIsError(true);
      setMessage(setErrorMessage(error));
    }
  };

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

  useEffect(() => {
    fetchCampaigns();
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="h-[85px] bg-gray-800 w-full"></div>
        <DetailPageSkeleton />;
      </>
    );
  }

  if (isError) {
    return (
      <>
        {" "}
        <div className="h-[85px] bg-gray-800 w-full"></div>
        <div className="w-screen h-screen flex justify-center items-center text-3xl font-bold">
          {message}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-[85px] bg-gray-800 w-full"></div>
      <div className="px-20 py-10">
        <div className="h-[300px] overflow-hidden w-full">
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
    </>
  );
};

export default CampaignDetails;
