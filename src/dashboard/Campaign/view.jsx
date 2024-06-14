import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Campaigns from "../../network/Campaigns";
import config from "../../utils/config";
import convertDate from "../../utils/dateConverter";

const ViewCampaign = () => {
  const { id } = useParams();

  const [campaignData, setCampaignData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCampaigns = async () => {
    try {
      const response = await Campaigns.getCampaignById(id);
      setCampaignData({ ...response.data });
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch campaigns: ", error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <section className="p-20 overflow-y-auto">
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

          <img
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
          <p className="text-justify">{campaignData.content}</p>
        </div>
      </div>
    </section>
  );
};

export default ViewCampaign;
