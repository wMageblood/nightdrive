import { PLAYER_INFORMATION } from "../constants/playerInformation.tsx";
import { classColor } from "../utils/classColor";
import { motion } from "framer-motion"
import wLogsLogo from "../assets/wLogsLogo.png"
import wowLogo from "../assets/wowLogo.png"
import raiderIoLogo from "../assets/raiderIoLogo.png"

interface PlayerStatsProps {
  selectedFilter: string | null;
}

export const PlayerCard = ({selectedFilter}: PlayerStatsProps) => {

    const filteredPlayers = selectedFilter ? PLAYER_INFORMATION.filter(player => player.tags.some(tag => tag.label === selectedFilter )) : PLAYER_INFORMATION;

  return (
    <div className='flex flex-wrap justify-center mb-8 gap-4'>
      {filteredPlayers.map(({name, mainClass, characterName, characterRealm, tags, image}) => (
        <motion.div key={name} initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{duration: 0.35}} style={{backgroundImage: `url(${image})`, backgroundPosition: "center 50%"}} className={`p-4 min-w-64 relative md:min-w-85 min-h-120 flex flex-col justify-end rounded-md inset-shadow-lg bg-cover bg-center border transition duration-300 ease-in-out ${classColor[mainClass.toLowerCase()].border} ${classColor[mainClass.toLowerCase()].shadow}`}>
          <h2 className='text-3xl text-[#cad0d3] font-semibold tracking-tighter'>{name}</h2>
          <div className='flex'>
            {tags.map(({label, icon}) => (
              <div key={label} className='flex flex-wrap bg-[#030712] mr-2 p-2 *:text-[#cad0d3] *:text-sm rounded-md border border-[#cad0d3] mt-4 select-none'>
                <p className=''>{icon}</p>
                <p className={`font-semibold ${icon ? 'ml-1' : 'ml-0'}`}>{label}</p>
              </div>
            ))}
          </div>
          <div className='absolute top-3 left-[36%] flex items-center gap-2'>
            <a href={`https://www.warcraftlogs.com/character/US/${characterRealm}/${characterName}`}><img className='w-6 h-6' src={wLogsLogo} /></a>
            <a href={`https://worldofwarcraft.com/en-us/character/us/${characterRealm}/${characterName}`}><img className='w-8 h-7' src={wowLogo} /></a>
            <a href={`https://raider.io/characters/us/${characterRealm}/${characterName}`}><img className='w-7 h-7' src={raiderIoLogo} /></a>
          </div>
        </motion.div>
      ))}
    </div>
  )
};