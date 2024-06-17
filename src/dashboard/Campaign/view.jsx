import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Campaigns from "../../network/Campaigns";
import config from "../../utils/config";
import convertDate from "../../utils/dateConverter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { setErrorMessage } from "../../utils/errorHandler";
import LoadingSpin from "../../components/Loading/LoadingSpin";

const ViewCampaign = () => {
  const { id } = useParams();

  const [campaignData, setCampaignData] = useState({});
  const [renderLoading, setRenderLoading] = useState(true);
  const [renderError, setRenderError] = useState(false);
  const [message, setMessage] = useState("");

  const fetchCampaigns = async () => {
    try {
      setRenderLoading(true);
      setRenderError(false);
      setMessage("false");

      const response = await Campaigns.getCampaignById(id);

      setCampaignData({ ...response.data });
      setRenderLoading(false);
      console.log(response.data);
    } catch (error) {
      setRenderError(true);
      setRenderLoading(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (renderLoading)
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <LoadingSpin color="slate" size="10" />
      </div>
    );
  if (renderError) return <h1>{message}</h1>;

  return (
    <section className="p-5 md:p-20">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Detail Campaign</h1>
        <Link to="/dashboard/campaign">
          <button
            type="button"
            className="font-semibold text-white border bg-red-600 border-red-600 hover:bg-red-500 rounded-lg text-md px-14 py-2.5 text-center"
          >
            Back
          </button>
        </Link>
      </div>
      <div className="bg-white p-5 border rounded-md shadow-md w-full">
        <div className="w-full">
          {/* Image */}

          <LazyLoadImage
            src={`${config.baseUrl}/images/campaigns/${campaignData.image}`}
            alt="Gambar campaign"
            className="w-full"
          />
          {/* Detail */}
          <div>
            <ul className="pt-10">
              <li className="font-semibold">
                Title : <span className="font-normal"> {campaignData.title} </span>
              </li>
              <li className="font-semibold">
                Date : <span className="font-normal"> {convertDate(campaignData.createdAt)} </span>
              </li>
              <li className="font-semibold">
                Author : <span className="font-normal"> {campaignData.user.username} </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Content */}
        <div className=" pt-10">
          <h1 className="text-lg font-bold">{campaignData.title}</h1>
          <p className="text-justify">{renderContent(campaignData.content)}</p>
        </div>
      </div>
    </section>
  );
};

export default ViewCampaign;
