import { useState } from "react";
import Navbar from "../components/Navbar";
import { RoleCard } from "../components/RoleCard/RoleCard"
import { RoleFilter } from "../components/RoleFilter";
import { PlayerCard } from "../components/PlayerCard";


const Roster = () => {

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <div className='w-[85%] mx-auto'>
      <Navbar />

      <div className='mt-10'>
        <RoleCard />
      </div>

      <h1 className='text-2xl text-[#cad0d3] font-Rajdhani font-semibold text-center mt-10'></h1>

      <div className='mt-10'>
        <RoleFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
      </div>

      <div className='mt-10'>
        <PlayerCard selectedFilter={selectedFilter} />
      </div>

    </div>
  );
};

export default Roster;