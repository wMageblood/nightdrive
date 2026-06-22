import { PLAYER_INFORMATION } from "../constants/playerInformation.tsx";
import { classColor } from "../utils/classColor";
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion";

interface PlayerStatsProps {
  selectedClass: string | null;
  filteredRole?: string | null;
}

export const PlayerCard = ({selectedClass, filteredRole}: PlayerStatsProps) => {

    const filteredPlayersTwo = selectedClass ? PLAYER_INFORMATION.filter(player => player.tags.some(tag => tag.label === selectedClass )) : PLAYER_INFORMATION;


  return (
    <div className='w-[85%] md:w-[80%] xl:w-[90%] mx-auto flex flex-wrap justify-center gap-6 mb-8'>
      {filteredPlayersTwo.map(({name, rank, description, mainClass, mainRole, tags, image}) => (
        <motion.div key={name} initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{duration: 0.35}} style={{backgroundImage: `url(${image})`, backgroundPosition: "center 50%"}} className={`p-4 min-w-64 md:min-w-85 min-h-120 flex flex-col justify-end rounded-md inset-shadow-lg bg-cover bg-center border transition duration-300 ease-in-out ${classColor[mainClass.toLowerCase()].border} ${classColor[mainClass.toLowerCase()].shadow}`}>
          <h2 className='text-3xl text-[#cad0d3] font-semibold tracking-tighter'>{name}</h2>
          <div className='flex'>
            {tags.map(({label, icon}) => (
              <div className='flex flex-wrap bg-[#030712] mr-2 p-2 *:text-[#cad0d3] *:text-sm rounded-md border border-[#cad0d3] mt-4 select-none'>
                <p className=''>{icon}</p>
                <p className={`font-semibold ${icon ? 'ml-1' : 'ml-0'}`}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
};

























// <div className='w-[85%] md:w-[80%] xl:w-[90%] mx-auto flex flex-wrap justify-center gap-6'>

//   {filteredPlayers.map(({name, rank, description, mainClass, mainRole, tags}) => (
//     <div className={`p-4 *:mt-5 mb-5 min-w-25 max-w-60 rounded-md inset-shadow-lg border transition duration-300 ease-in-out ${classColor[mainClass.toLowerCase()].bg}/50 ${classColor[mainClass.toLowerCase()].border} ${classColor[mainClass.toLowerCase()].shadow}`}>
//       <h1 className='text-3xl font-Roboto uppercase tracking-tighter font-bold'>{rank}</h1>
//       <h2 className='text-2xl text-[#030712] font-semibold tracking-tighter'>{name}</h2>
//       <h3 className=''>{mainClass}</h3>
//       <p>{description}</p>
//       <div className='flex'>
//         {tags.map(({label, icon}) => (
//           <div className='flex'>
//             <p className=''>{icon}</p>
//             <p className='font-semibold'>{label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   ))}
// </div>