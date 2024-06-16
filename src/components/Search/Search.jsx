import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { useArticleState } from "../../context/ArticleStateContext";

const SearchBar = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { allArticlesData, filterArticles } = useArticleState();
  const [searchQuery, setSearchQuery] = useState(params.get("search") || "");
  const [filterQuery, setFilterQuery] = useState(params.get("filter") || "");

  // Replace with your actual useSearchParams hook
  const [currentQueryParameters, setSearchParams] = useSearchParams();

  const searchChangeHandler = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateQueryParams("search", value);
  };

  const filterChangeHandler = (event) => {
    const value = event.target.value;
    setFilterQuery(value);
    updateQueryParams("filter", value);
  };

  const updateQueryParams = (key, value) => {
    params.set(key, value);
    setSearchParams(params.toString());
  };

  useEffect(() => {
    setSearchQuery(params.get("search") || "");
    setFilterQuery(params.get("filter") || "");
  }, [currentQueryParameters]);

  useEffect(() => {
    filterArticles(allArticlesData);
  }, [searchQuery, filterQuery, allArticlesData]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-slate-200 bg-opacity-30 rounded-md shadow-xl w-auto lg:w-full max-w-4xl">
      <div className="relative w-full pb-2 md:w-auto lg:pr-48">
        <input
          type="search"
          value={searchQuery}
          onChange={searchChangeHandler}
          placeholder="Cari Wisata..."
          className="py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
      </div>
      <div className="relative w-full md:w-auto">
        <select
          value={filterQuery}
          onChange={filterChangeHandler}
          className="px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        >
          <option value="" selected>
            Semua kategori
          </option>
          {categoryList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <MdCategory className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

const categoryList = ["ekowisata", "gunung", "laut", "pantai", "religi", "sejarah", "seni"];

export default SearchBar;
