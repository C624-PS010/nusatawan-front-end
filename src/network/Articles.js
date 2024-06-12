import API from "./API";

const Articles = {
  async getAllArticles() {
    const response = API.get("/articles");

    return (await response).data;
  },

  async getArticleById(id) {
    const response = API.get(`/articles/${id}`);

    return (await response).data;
  },
};

export default Articles;
