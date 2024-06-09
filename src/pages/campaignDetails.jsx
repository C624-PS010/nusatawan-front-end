import { useLocation } from "react-router-dom";

const CampaignDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, "useLocation");
  const { image, date, title, description, author } = location.state;

  return (
    <div className="p-5">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-3xl font-bold pb-10">{title}</h1>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default CampaignDetails;