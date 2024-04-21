import landingImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-500">
          Indulge in the flavors you crave
        </h1>
        <span className="text-xl text-gray-600">
          Order now for a delicious takeaway delivered right to your door!
        </span>
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
