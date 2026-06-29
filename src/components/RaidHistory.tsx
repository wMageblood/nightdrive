import { RAID_RANKINGS } from "../constants/rankHistory";
import { rankingColor } from "../utils/rankingColor";

export const RaidHistory = () => {
  return (
    <div className='*:font-Rajdhani *:font-semibold mx-auto mb-10 w-full shadow-soft-blur'>
          <div className="flex items-center justify-between border-l border-t border-r border-slate-800 px-6 py-4 bg-[#0e1220] rounded-tr-md rounded-tl-md ">
            <div className='text-[#c9cfd2] text-lg mr-10'>
              <p className='text-xl'>RANKS ANTERIORES:</p>
            </div>
          </div>
          <div className='bg-[#0e1220] text-[#d9d4c5] border border-slate-800 px-6 pt-4 pb-2 rounded-br-md rounded-bl-md overflow-y-auto h-120 max-h-120 scrollbar-thin scrollbar-thumb-[#1d293d] scrollbar-track-[#0e1220]'>

            <div className="grid grid-cols-4 gap-5 px-4 py-2 text-center bg-[#0e1220] text-sm uppercase text-[#7a7774]">
              <div className='pr-7'>Raid</div>
              <div className=''>World</div>
              <div className=''>Region</div>
              <div className='pl-5'>Realm</div>
            </div>

            <div className='grid grid-cols-4 gap-5 py-3 text-center uppercase items-center'>
              <h1 className='col-span-4 text-2xl text-[#c9cfd2] text-center border border-slate-800 bg-[#030712] shadow-soft-blur'>Midnight</h1>
                {RAID_RANKINGS.filter(row => row.expansionName === 'Midnight').map((row, index) => (
                  <div key={index} className='contents *:text-lg'>
                    <div>{row.raidName}</div>
                    <div className={`${rankingColor(row.worldRank)}`}>{row.worldRank}</div>
                    <div className={`${rankingColor(row.regionRank)}`}>{row.regionRank}</div>
                    <div className={`${rankingColor(row.realmRank)}`}>{row.realmRank}</div>
                  </div>
                ))}
            </div>


            <div className='grid grid-cols-4 gap-5 py-3 text-center uppercase'>
                <h1 className='col-span-4 text-2xl text-[#c9cfd2] text-center border border-slate-800 bg-[#030712] shadow-soft-blur'>The War Within</h1>
                {RAID_RANKINGS.filter(row => row.expansionName === 'TWW').map((row, index) => (
                  <div key={index} className='contents *:text-lg'>
                    <div>{row.raidName}</div>
                    <div className={`${rankingColor(row.worldRank)}`}>{row.worldRank}</div>
                    <div className={`${rankingColor(row.regionRank)}`}>{row.regionRank}</div>
                    <div className={`${rankingColor(row.realmRank)}`}>{row.realmRank}</div>
                  </div>
                ))}
            </div>

            <div className='grid grid-cols-4 gap-5 py-3 text-center uppercase items-center'>
                <h1 className='col-span-4 text-2xl text-[#c9cfd2] text-center border border-slate-800 bg-[#030712] shadow-soft-blur'>Dragonflight</h1>
                {RAID_RANKINGS.filter(row => row.expansionName === 'DF').map((row, index) => (
                  <div key={index} className='contents *:text-lg'>
                    <div>{row.raidName}</div>
                    <div className={`${rankingColor(row.worldRank)}`}>{row.worldRank}</div>
                    <div className={`${rankingColor(row.regionRank)}`}>{row.regionRank}</div>
                    <div className={`${rankingColor(row.realmRank)}`}>{row.realmRank}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
  )
};