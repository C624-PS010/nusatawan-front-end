import API from "./API";
import {
  getAuth,
  getAdminAuth,
  checkAuth,
  checkAdminAuth,
} from "../utils/authHandler";

const Articles = {
  // Articles
  async getAllArticles() {
    const response = API.get("/articles");

    return (await response).data;
  },

  async getArticleById(id) {
    const response = API.get(`/articles/${id}`);

    return (await response).data;
  },

  async addArticle(data) {
    checkAuth();

    const response = API.post(`/articles`, data, {
      headers: {
        "auth-user": `Bearer ${getAuth()}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return (await response).data;
  },

  async deleteArticleById(id) {
    checkAuth();
    checkAdminAuth();

    const response = API.delete(`/articles/${id}`, {
      headers: {
        "auth-user": `Bearer ${getAuth()}`,
        "auth-admin": `Bearer ${getAdminAuth()}`,
      },
    });

    return (await response).data;
  },

  // Comments
  async getAllComments(articleId) {
    const response = API.get(`/articles/${articleId}/comments`);

    return (await response).data;
  },

  async addComment(articleId, userId, comment) {
    checkAuth();

    const response = API.post(
      `/articles/${articleId}/comments`,
      { userId, comment },
      { headers: { "auth-user": `Bearer ${getAuth()}` } }
    );

    return (await response).data;
  },

  async deleteComment(articleId, commentId) {
    checkAuth();
    checkAdminAuth();

    const response = API.delete(
      `/articles/${articleId}/comments/${commentId}`,
      {
        headers: {
          "auth-user": `Bearer ${getAuth()}`,
          "auth-admin": `Bearer ${getAdminAuth()}`,
        },
      }
    );

    return (await response).data;
  },
  // Rating
  async getAvgRating(id) {
    const response = API.get(`/ratings/${id}/average`);

    return (await response).data;
  },

  async getTotalUserRating(id) {
    const response = API.get(`/ratings/${id}/total`);

    return (await response).data;
  },

  async postRating(articleId, userId, rating) {
    checkAuth();

    const response = API.post(
      `/ratings/${articleId}`,
      { userId, rating },
      { headers: { "auth-user": `Bearer ${getAuth()}` } }
    );

    return (await response).data;
  },
};

export default Articles;
