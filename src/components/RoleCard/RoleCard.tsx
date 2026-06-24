import { PLAYER_INFORMATION } from "../../constants/playerInformation"
import banner from "../../assets/banners/banner-two-narrow.png"

export const RoleCard = () => {

  const tankCount = PLAYER_INFORMATION.filter(
    player => player.mainRole === 'Tank'
  ).length;

  const healerCount = PLAYER_INFORMATION.filter(
    player => player.mainRole === 'Healer'
  ).length;

  const dpsCount = PLAYER_INFORMATION.filter(
    player => player.mainRole === 'DPS'
  ).length;

  const inactiveCount = PLAYER_INFORMATION.filter(
    player => player.mainRole === 'Inactive'
  ).length;

  const activeMembers = tankCount + healerCount + dpsCount;

  const tankPercentage = (tankCount / activeMembers) * 100;
  const healerPercentage = (healerCount / activeMembers) * 100;
  const dpsPercentage = (dpsCount / activeMembers) * 100;

  return (
    <div className=''>

      <div className='relative'>
        <img className='w-full rounded-md mb-10 mask-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] border border-[#181b28]' src={banner} />
        <h1 className='font-Geist text-lg md:text-2xl text-white font-semibold absolute bottom-[5%] left-[2%] tracking-wide'> La crème de la crème latinoamericana </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='text-3xl px-6 py-4 text-white border border-[#181b28] bg-[#0e1220] border-l-highlightColor4 border-l-4 rounded-md *:font-Rajdhani shadow-soft-blur'>
          <h1>Miembros:</h1>
          <p className='text-6xl font-semibold'>
            {activeMembers}
          </p>
        </div>
        <div className='text-3xl px-6 py-4 text-white border border-[#181b28] bg-[#0e1220] border-l-cyan-500 border-l-4 rounded-md *:font-Rajdhani shadow-soft-blur'>
          <h1>Tanks</h1>
          <p className='text-6xl font-semibold'>
            {tankCount}
          </p>
        </div>
        <div className='text-3xl px-6 py-4 text-white border border-[#181b28] bg-[#0e1220] border-l-emerald-500 border-l-4 rounded-md *:font-Rajdhani shadow-soft-blur'>
          <h1>Healer</h1>
          <p className='text-6xl font-semibold'>
            {healerCount}
          </p>
        </div>
        <div className='text-3xl px-6 py-4 text-white border border-[#181b28] bg-[#0e1220] border-l-red-500 border-l-4 rounded-md *:font-Rajdhani shadow-soft-blur'>
          <h1>DPS</h1>
          <p className='text-6xl font-semibold'>
            {dpsCount}
          </p>
        </div>
      </div>

        <div className='flex col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-5 mt-10 gap-6'>
            <div className="border border-[#181b28] bg-[#0e1220] border-l-cyan-500 border-l-4 h-full rounded-md shadow-soft-blur min-w-20" style={{ width: `${tankPercentage}%` }}>
              <p className='text-white text-2xl px-2 py-5 text-center md:text-left'>{tankPercentage.toFixed(0)}%</p>
            </div>
            <div className="border border-[#181b28] border-l-emerald-500 border-l-4 h-full bg-[#0e1220] rounded-md shadow-soft-blur" style={{ width: `${healerPercentage}%`, minWidth: "4rem" }}>
              <p className='text-white text-2xl px-2 py-5'>{healerPercentage.toFixed(0)}%</p>
            </div>
            <div className="border border-[#181b28] border-l-red-500 border-l-4 bg-[#0e1220] h-full rounded-md shadow-soft-blur" style={{ width: `${dpsPercentage}%` }}>
              <p className='text-white text-2xl px-2 py-5'>{dpsPercentage.toFixed(0)}%</p>
            </div>
        </div>
    </div>
  )
};