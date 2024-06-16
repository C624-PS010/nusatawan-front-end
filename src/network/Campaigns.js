import API from "./API";
import { getAuth, getAdminAuth, checkAuth, checkAdminAuth } from "../utils/authHandler";

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
    checkAuth();

    const response = API.post(`/campaigns`, data, {
      headers: {
        "auth-user": `Bearer ${getAuth()}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return (await response).data;
  },

  async deleteCampaignById(id) {
    checkAuth();
    checkAdminAuth();

    const response = API.delete(`/campaigns/${id}`, {
      headers: {
        "auth-user": `Bearer ${getAuth()}`,
        "auth-admin": `Bearer ${getAdminAuth()}`,
      },
    });

    return (await response).data;
  },
};

export default Campaigns;
