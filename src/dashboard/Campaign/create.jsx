import { MdDriveFolderUpload } from "react-icons/md";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

// eslint-disable-next-line react/prop-types
const ImageInput = ({ onImageSelect }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      if (onImageSelect) {
        onImageSelect(file);
      }
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
      <div className="flex items-center justify-center">
        <label className="cursor-pointer">
          <span className="inline-block bg-gray-200 hover:bg-gray-300 rounded-md p-2">
            {image ? (
              <img src={image} alt="Selected" className="w-40 h-40 object-cover rounded-md" />
            ) : (
              <MdDriveFolderUpload className="w-12 h-12 text-gray-500" />
            )}
          </span>
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
      </div>
    </div>
  );
};

// FORM UTAMA
// eslint-disable-next-line react/prop-types
const CreateCampaign = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageSelect = (file) => {
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setFormData({
      title: "",
      content: "",
      image: null,
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex justify-between px-20 pt-6">
          <h1 className="text-3xl font-bold mb-4">Create Campaign</h1>
          <a href="/Campaign">
            <button
              type="submit"
              className="font-semibold text-white border bg-red-600  border-red-600 hover:bg-red-500 rounded-lg text-md px-14 py-2.5 mt-5 text-center me-2 mb-2 "
            >
              Back
            </button>
          </a>
        </div>
        <section className="flex justify-center">
          <form onSubmit={handleSubmit} className="bg-white p-5 border rounded-md shadow-md w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the content"
              />
            </div>
            <ImageInput onImageSelect={handleImageSelect} />
            <div className="mt-4">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Category
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateCampaign;
