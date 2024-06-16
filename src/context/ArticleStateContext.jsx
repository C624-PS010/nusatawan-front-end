// Create the context
import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Articles from "../network/Articles";
import { setErrorMessage } from "../utils/errorHandler";

const ArticlesContext = createContext();

// Create a provider component
const ArticlesProvider = ({ children }) => {
  // Query params
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  // States
  const [allArticlesData, setAllArticlesData] = useState([]);
  const [filteredArticleData, setFilteredArticleData] = useState([]);
  const [articleData, setArticleData] = useState({});
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Utils
  const fetchAllArticles = async () => {
    try {
      setMessage("");
      setIsError(false);
      setLoading(true);

      const response = await Articles.getAllArticles();
      setAllArticlesData(response.data);
      filterArticles(response.data);

      setIsError(false);
      setLoading(false);
      setMessage("Berhasil mendapatkan semua artikel");
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch articles", error);

      setIsError(true);
      setLoading(false);

      setMessage(setErrorMessage(error));
    }
  };

  const fetchArticle = async (id) => {
    try {
      setMessage("");
      setIsError(false);
      setLoading(true);

      const response = await Articles.getArticleById(id);
      setArticleData(response.data);
      setFilteredArticleData(response.data);
      filterArticles(response.data);

      setIsError(false);
      setLoading(false);
      setMessage("Berhasil mendapatkan artikel");
      console.log(response.data);
    } catch (error) {
      console.error(error);

      setIsError(true);
      setLoading(false);

      setMessage(setErrorMessage(error));
    }
  };

  const filterArticles = (articles) => {
    const searchQuery = params.get("search");
    const filterQuery = params.get("filter");

    if (!searchQuery && !filterQuery) {
      setFilteredArticleData(articles);
    } else {
      console.log("articles: ", articles);
      console.log(searchQuery, filterQuery);
      const filtered = articles.filter((article) => {
        if (searchQuery && !filterQuery) {
          return article.title
            .toLowerCase()
            .startsWith(searchQuery.toLowerCase());
        } else if (!searchQuery && filterQuery) {
          return article.categoryName === filterQuery;
        } else {
          return (
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            article.categoryName === filterQuery
          );
        }
      });
      setFilteredArticleData(filtered);
    }
  };

  // Hooks
  useEffect(() => {
    window.addEventListener("renderAllArticles", fetchAllArticles);
    window.addEventListener("renderArticle", fetchArticle);
    window.addEventListener("queryChange", () =>
      filterArticles(allArticlesData)
    );

    fetchAllArticles();

    return () => {
      window.removeEventListener("renderAllArticles", fetchAllArticles);
      window.removeEventListener("renderArticle", fetchArticle);
      window.addEventListener("queryChange", () =>
        filterArticles(allArticlesData)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ArticlesContext.Provider
      value={{
        allArticlesData,
        filteredArticleData,
        articleData,
        isError,
        loading,
        message,
        filterArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

const useArticleState = () => {
  const context = useContext(ArticlesContext);
  if (context === undefined) {
    throw new Error(
      "useArticleState must be used within a ArticleStateProvider"
    );
  }
  return context;
};

export { ArticlesProvider, useArticleState };
