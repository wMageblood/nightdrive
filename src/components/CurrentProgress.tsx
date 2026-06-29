import { RAID_PROGRESSION } from "../constants/raidProgression";
import { ChevronRight } from "lucide-react";

export const CurrentProgress = () => {
  return (
    <div className='*:font-Rajdhani *:font-semibold mx-auto w-full shadow-soft-blur'>

      <div className="flex items-center justify-between border-l border-t border-r border-slate-800 px-6 py-4 bg-[#0e1220] rounded-tr-md rounded-tl-md">
        <div className='text-[#c9cfd2] text-xl'>
          <span className="text-[#29be44] animate-pulse">●</span> PROGRESIÓN ACTUAL:
        </div>

        <a href={'/apply'} className='text-[#29be44] text-lg flex items-center'>
          APLICA <ChevronRight className='w-5' />
        </a>
      </div>

      <div className='bg-[#0e1220] text-[#d9d4c5] px-6 py-4 rounded-br-md rounded-bl-md border border-slate-800 h-95 md:h-120 flex flex-col'>
        <span className='md:text-lg xl:text-xl'>VS / DR / MQD</span>
          <div className=''>
            {RAID_PROGRESSION.map(({difficulty, kills, total, color, backgroundColor, hexColor}) => (
              <div key={difficulty} className='mt-5'>
                <h1 className={`ml-5 ${color} md:text-lg xl:text-xl`}>{`${difficulty.toUpperCase()} ${kills}/${total}`}</h1>
                <div className='w-full'>
                  <div className="h-2 rounded-full bg-[#1d1717] my-4 mx-5 shadow-soft-blur">
                    <div className="h-full" style={{ width: `${(kills / total) * 100}%`, backgroundColor: hexColor,}}/>
                  </div>
                  <div className={`mx-5 gap-1 w-full ${kills - total === 0 ? 'hidden' : 'flex'}`}>
                    {Array.from({length: total}).map((_, index) => (
                      <div key={index} className='aspect-square w-5 mt-2 rounded-md shadow-soft-blur' style={{backgroundColor: index < kills ? hexColor : `#1d1717`, border: `2px solid ${hexColor}`}} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mx-auto pt-10 flex justify-center mt-auto'>
            <a href={'https://raider.io/guilds/us/ragnaros/Ascended'} className='hover:text-white transition duration-300'>RAIDER.IO</a>
            <a href={'https://www.warcraftlogs.com/guild/us/ragnaros/Ascended'} className='mx-10 hover:text-white transition duration-300'>WLOGS</a>
            <a href={'https://worldofwarcraft.blizzard.com/en-us/guild/us/ragnaros/ascended'} className='hover:text-white transition duration-300'>ARMOURY</a>
          </div>
      </div>
    </div>
  )
};