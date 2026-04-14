import Navbar from "../components/Navbar";
import PlayerCard from "../components/PlayerCard";
import PLAYER_INFORMATION from "../constants/playerInformation";

const Roster = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="font-Roboto text-9xl text-title font-bold tracking-tighter text-center mt-25 mb-10">
          ROSTER
        </h1>
      </div>
      <div className="grid grid-cols-2 mb-5 lg:grid-cols-4 gap-3 w-fit mx-auto place-items-center pb-5">
        {PLAYER_INFORMATION.map(({rank, name, description, firstImage, secondImage, thirdImage, mainClass}) => (<PlayerCard rank={rank} name={name} description={description} firstImage={firstImage} secondImage={secondImage} thirdImage={thirdImage} mainClass={mainClass} />))}
      </div>
    </div>
  );
};

export default Roster