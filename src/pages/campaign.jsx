import CampaignDetail from "../components/Campaign/CampaignDetail";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CampaignPage = () => {
  return (
    <>
      <div>
        <LazyLoadImage src="img/campaign.jpg" alt="" />
      </div>
      <div className="container pt-20">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Campaign Terbaru Kami
        </h1>
      </div>

      {/* Campaign Card */}
      <CampaignDetail />
    </>
  );
};

export default CampaignPage;
