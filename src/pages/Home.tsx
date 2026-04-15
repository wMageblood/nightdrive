import Navbar from "../components/Navbar";
import MIDNIGHT_RAIDS from "../constants/midnightRaids";
import { AscendedTitle } from "../components/svg/AscendedTitle";
import { MagiMark } from "../components/svg/MagiMark";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="relative flex items-center justify-center mb-10 mt-25">
        <MagiMark />
        <div className="absolute font-Roboto text-9xl text-title font-bold tracking-tighter ">
          <AscendedTitle />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {MIDNIGHT_RAIDS.map(({bossImage, defeated}) => (<img className={`${defeated ? "saturate-10" : null}`} src={bossImage} />))}
      </div>
    </div>
  );
};

export default Home;