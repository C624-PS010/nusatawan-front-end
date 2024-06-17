// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable";
import Articles from "../../network/Articles";
import { useGlobalState } from "../../context/GlobalStateContext";
import { setErrorMessage } from "../../utils/errorHandler";
import NeutralAlert from "../../components/Alert/NeutralAlert";
import LoadingSpin from "../../components/Loading/LoadingSpin";

const TableArtikel = () => {
  const { userProfile } = useGlobalState();
  const [articlesData, setArticlesData] = useState([]);
  const [message, setMessage] = useState("");
  const [renderLoading, setRenderLoading] = useState(false);
  const [renderError, setRenderError] = useState(false);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      setRenderError(false);
      setRenderLoading(true);

      const response = await Articles.getAllArticles();

      setArticlesData(response.data);
      setRenderLoading(false);
      console.log(response);
    } catch (error) {
      setRenderLoading(false);
      setRenderError(true);
      setMessage(setErrorMessage(error));
    }
  };

  const deleteHandler = async (id) => {
    try {
      setMessage("Deleting data...");

      if (!userProfile) throw new Error("User not logged in");
      else if (!userProfile.isAdmin) throw new Error("User is not admin");

      const response = await Articles.deleteArticleById(id);

      setMessage("Data deleted");
      console.log(response);
      window.dispatchEvent(new Event("refreshArticle"));
    } catch (error) {
      setMessage(setErrorMessage(error));
    }
  };

  useEffect(() => {
    fetchArticles();

    window.addEventListener("refreshArticle", fetchArticles);

    return () => {
      window.removeEventListener("refreshArticle", fetchArticles);
    };
  }, []);

  const columns = ["Title", "Location", "Category", "User"];
  const actions = [
    {
      label: "View",
      onClick: (id) => {
        navigate(`/dashboard/artikel/${id}`);
      },
    },
    ...(userProfile.isAdmin
      ? [
          {
            label: "Delete",
            onClick: (id) => {
              deleteHandler(id);
            },
          },
        ]
      : []),
  ];
  const buttonStyles = [
    "bg-blue-500", // Style untuk tombol View
    "bg-red-600", // Style untuk tombol Delete
  ];

  return (
    <div className="p-20">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Article Data</h1>
        <Link to="/dashboard/artikel/create">
          <button
            type="submit"
            className="font-semibold text-white bg-green-500 hover:bg-green-400 border-2 rounded-lg text-sm px-2 ml-24 py-2 text-center me-2 mb-5 "
          >
            Add article
          </button>
        </Link>
      </div>
      {renderLoading ? (
        <div className="flex justify-center items-center w-full">
          <LoadingSpin color="slate" />
        </div>
      ) : renderError ? (
        <h1>{message}</h1>
      ) : (
        <DataTable
          columns={columns}
          data={articlesData}
          actions={actions}
          buttonStyles={buttonStyles}
        />
      )}
      {message && <NeutralAlert message={message} setMessage={setMessage}></NeutralAlert>}
    </div>
  );
};

export default TableArtikel;
