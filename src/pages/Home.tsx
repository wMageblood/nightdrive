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

      <div className="grid grid-cols-3 lg:grid-cols-9 w-fit mx-auto gap-1 place-items-center pb-15 lg:pb-5">
        {MIDNIGHT_RAIDS.map(({bossImage, defeated, boss}) => (<img key={boss} className={`${defeated ? "saturate-5" : null} min-h-48 h-48 min-w-37 w-37`} src={bossImage} />))}
      </div>
    </div>
  );
};

export default Home;