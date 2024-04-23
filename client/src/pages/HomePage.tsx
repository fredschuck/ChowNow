import { useNavigate } from "react-router-dom";
import landingImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 p-4">
        <h1 className="text-5xl font-bold tracking-tight text-orange-500">
          Indulge in the flavors you crave
        </h1>
        <span className="text-xl text-gray-600">
          Order delicious takeout now and get it delivered right to your door!
        </span>
        <SearchBar
          placeHolder="Search in your city"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="food" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeout even faster!
          </span>
          <span className="text-gray-600">
            Create an account for faster ordering and exclusive offers.
          </span>
          <img src={appDownload} alt="app download" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
