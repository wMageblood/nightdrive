import Navbar from "../components/Navbar";
import mainBanner from "../assets/banners/banner-one.png"
import { CurrentProgress } from "../components/CurrentProgress";
import { RecruitmentStatus } from "../components/RecruitmentStatus";
import { RaidHistory } from "../components/RaidHistory";

const Home = () => {

  return (
    <div className="w-[85%] mx-auto">

      <Navbar />

      <div className='mt-10'>
        <img className='w-full border border-[#181b28] rounded-md' src={mainBanner} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6'>
        <CurrentProgress />
        <RecruitmentStatus />
        <RaidHistory />
      </div>
    </div>
  );
};

export default Home;