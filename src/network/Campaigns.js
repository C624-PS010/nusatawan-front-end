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

  async addCampaign(data) {
    const response = API.post(`/campaigns`, data, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    return (await response).data;
  },

  async deleteCampaignById(id) {
    const response = API.delete(`/campaigns/${id}`, { withCredentials: true });

    return (await response).data;
  },
};

export default Campaigns;
