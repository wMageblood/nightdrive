import { useState } from "react";
import Navbar from "../components/Navbar";
import { PlayerCard } from "../components/PlayerCard";
import { PLAYER_INFORMATION } from "../constants/playerInformation";
import { RosterTitle } from "../components/svg/RosterTitle";
import { RoleCard } from "../components/RoleCard/RoleCard"
import { ClassStats } from "../components/ClassStats/ClassStats.tsx"


const Roster = () => {

  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  return (
    <div>
      <Navbar />

      <div className="flex justify-center mb-10 mt-25">
        <RosterTitle />
      </div>

      <RoleCard />


      <ClassStats
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
      <div>
        <PlayerCard selectedClass={selectedClass} />
      </div>
    </div>
  );
};

export default Roster;