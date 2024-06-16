import { MdDriveFolderUpload } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Campaigns from "../../network/Campaigns";
import localUser from "../../utils/localUser";
import Loading from "../../components/Loading/LoadingSpin";
import { LazyLoadImage } from "react-lazy-load-image-component";

// FORM UTAMA
const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
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

  const campaignSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const localUserData = localUser.get();
      if (!localUserData) throw new Error("User not logged in");

      const { title, content, image } = formData;
      const userId = localUserData.id;

      const responseData = await Campaigns.addCampaign({
        title,
        content,
        image,
        userId,
      });

      console.log(responseData);
      setIsError(false);
      setMessage("Berhasil membuat campaign");
      setIsLoading(false);
      navigate("/dashboard/campaign");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError(true);

      if (error.data && error.status === 401) setMessage("User not logged in");
      else if (error.data) setMessage(error.data.message);
      else setMessage(error.message);
    }
  };

  return (
    <div className="overflow-y-auto">
      <div className="flex justify-between px-20 pt-6">
        <h1 className="text-3xl font-bold mb-4">Create Campaign</h1>
        <Link to="/dashboard/campaign">
          <button
            type="submit"
            className="font-semibold text-white border bg-red-600  border-red-600 hover:bg-red-500 rounded-lg text-md px-14 py-2.5 mt-5 text-center me-2 mb-2 "
          >
            Back
          </button>
        </Link>
      </div>
      <section className="flex justify-center pb-10">
        <form
          onSubmit={campaignSubmitHandler}
          className="bg-white p-5 border rounded-md shadow-md w-1/2"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
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
            <p
              className={`w-full text-${
                isError ? "red" : "green"
              }-500 mb-2 rounded p-1`}
            >
              {message}
            </p>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-white w-full font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLoading ? <Loading /> : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

// Input Gambar
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
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Upload Image
      </label>
      <div className="flex items-center justify-center">
        <label className="cursor-pointer">
          <span className="inline-block bg-gray-200 hover:bg-gray-300 rounded-md p-2">
            {image ? (
              <LazyLoadImage
                src={image}
                alt="Selected"
                className="w-40 h-40 object-cover rounded-md"
              />
            ) : (
              <MdDriveFolderUpload className="w-12 h-12 text-gray-500" />
            )}
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );
};

export default CreateCampaign;
