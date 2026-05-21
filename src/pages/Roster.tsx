import Navbar from "../components/Navbar";
import PlayerCard from "../components/PlayerCard";
import { PLAYER_INFORMATION } from "../constants/playerInformation";
import { RosterTitle } from "../components/svg/RosterTitle";

const Roster = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mb-10 mt-25">
        <RosterTitle />
      </div>
      <div className="grid xl:grid-cols-3 gap-3 grid-cols-2 md:mx-30 mx-3 items-stretch mb-4">
        {PLAYER_INFORMATION.map(({rank, name, description, mainClass}) => (<PlayerCard key={name} rank={rank} name={name} description={description} mainClass={mainClass} />))}
      </div>
    </div>
  );
};

export default Roster;