import Navbar from "../components/Navbar";
import MIDNIGHT_RAIDS from "../constants/midnightRaids";
import { AscendedTitle } from "../components/svg/AscendedTitle";
import { MagiMark } from "../components/svg/MagiMark";
import { rankingColor } from "../utils/rankingColor";

const Home = () => {

  return (
    <div className="">
      <Navbar />
      <div className="relative flex items-center justify-center mb-10 mt-10">
          <MagiMark />
        <div className="absolute">
          <AscendedTitle />
        </div>
      </div>
        <div className="flex justify-center *:xl:mx-15 *:mx-5 text-white mb-15">
          <p className={`text-xl font-bold font-Roboto text-nowrap`}>World: <span className={`${rankingColor(132)}`}>132</span></p>
          <p className={`text-xl font-bold font-Roboto text-nowrap`}>Region: <span className={`${rankingColor(38)}`}>38</span></p>
          <p className={`text-xl font-bold font-Roboto text-nowrap`}>Realm: <span className={`${rankingColor(1)}`}>1</span></p>
        </div>

      <div className="grid xl:grid-cols-9 grid-cols-3 justify-items-center">
        {MIDNIGHT_RAIDS.map(({bossImage, defeated, boss}) => (<img key={boss} className={`${defeated ? "saturate-5" : null} min-w-32 w-32 min-h-37 h-37 mb-3`} src={bossImage} />))}
      </div>
    </div>
  );
};

export default Home;