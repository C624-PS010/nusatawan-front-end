import API from "./API";

const Campaigns = {
  async getAllCampaigns() {
    const response = API.get("/campaigns");

    return (await response).data;
  },

  async getCampaignById(id) {
    const response = API.get(`/campaigns/${id}`);

    return (await response).data;
  },
};

export default Campaigns;
