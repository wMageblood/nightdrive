import Navbar from "../components/Navbar";
import MIDNIGHT_RAIDS from "../constants/midnightRaids";
import { AscendedMark } from "../components/AscendedMark";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="relative flex items-center justify-center mb-10 mt-25">
        <AscendedMark />
        <h1 className="absolute font-Roboto text-9xl text-title font-bold tracking-widest">
          ASCENDED
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {MIDNIGHT_RAIDS.map(({bossImage}) => (<img className="hover:saturate-0" src={bossImage} />))}
      </div>
    </div>
  );
};

export default Home;