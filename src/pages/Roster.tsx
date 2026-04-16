import Navbar from "../components/Navbar";
import PlayerCard from "../components/PlayerCard";
import PLAYER_INFORMATION from "../constants/playerInformation";
import { RosterTitle } from "../components/svg/RosterTitle";

const Roster = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mb-10 mt-25">
        <RosterTitle />
      </div>
      <div className="grid grid-cols-2 mb-5 lg:grid-cols-4 gap-3 w-fit mx-auto place-items-center">
        {PLAYER_INFORMATION.map(({rank, name, description, firstImage, secondImage, thirdImage, mainClass}) => (<PlayerCard rank={rank} name={name} description={description} firstImage={firstImage} secondImage={secondImage} thirdImage={thirdImage} mainClass={mainClass} />))}
      </div>
    </div>
  );
};

export default Roster