import CampaignDetail from "../components/Campaign/CampaignDetail";

const CampaignPage = () => {
  return (
    <>
      <div>
        <img src="img/campaign.jpg" alt="" className="h-[583px] w-full object-cover" />
      </div>
      <div className="container pt-20">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Campaign Terbaru Kami
        </h1>
      </div>
      <CampaignDetail />
    </>
  );
};

export default CampaignPage;
