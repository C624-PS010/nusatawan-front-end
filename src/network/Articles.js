import API from "./API";

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
    const response = API.post(`/articles`, data, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    return (await response).data;
  },

  async deleteArticleById(id) {
    const response = API.delete(`/articles/${id}`, { withCredentials: true });

    return (await response).data;
  },

  // Comments
  async getAllComments(articleId) {
    const response = API.get(`/articles/${articleId}/comments`);

    return (await response).data;
  },

  async addComment(articleId, userId, comment) {
    const response = API.post(
      `/articles/${articleId}/comments`,
      { userId, comment },
      { withCredentials: true }
    );

    return (await response).data;
  },

  async deleteComment(articleId, commentId) {
    const response = API.delete(`/articles/${articleId}/comments/${commentId}`, {
      withCredentials: true,
    });

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
    const response = API.post(
      `/ratings/${articleId}`,
      { userId, rating },
      { withCredentials: true }
    );

    return (await response).data;
  },
};

export default Articles;
