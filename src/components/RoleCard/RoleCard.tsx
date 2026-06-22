import { PLAYER_INFORMATION } from "../../constants/playerInformation"

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
    <div className='w-[85%] md:w-[80%] xl:w-[90%] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        <div className='text-3xl px-6 py-4 text-white border border-cyan-500 bg-cyan-500/10 rounded-md'>
          <h1>Miembros: {' '}</h1>
          <p className='text-6xl font-semibold'>
            {activeMembers}
          </p>
        </div>
        <div className='text-3xl px-6 py-4 text-white border border-cyan-500 bg-cyan-500/10 rounded-md'>
          <h1>Tanks: {' '}</h1>
          <p className='text-6xl font-semibold'>
            {tankCount}
          </p>
        </div>
        <div className='text-3xl px-6 py-4 text-white border border-emerald-500 bg-emerald-500/10 rounded-md'>
          <h1>Healers: {' '}</h1>
          <p className='text-6xl font-semibold'>
            {healerCount}
          </p>
        </div>
        <div className='text-3xl px-6 py-4 text-white border border-red-500 bg-red-500/10 rounded-md'>
          <h1>DPS: {' '}</h1>
          <p className='text-6xl font-semibold'>
            {dpsCount}
          </p>
        </div>
        <div className='text-3xl px-6 py-4 text-white border border-gray-500 bg-gray-500/10 rounded-md'>
          <h1>Inactivos: {' '}</h1>
          <p className='text-6xl font-semibold'>
            {inactiveCount}
          </p>
        </div>
        <div className='flex col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-5 gap-1'>
            <div
              className="border border-cyan-500 bg-cyan-500/10 h-full rounded-md rounded-br-none rounded-tr-none"
              style={{ width: `${tankPercentage}%` }}
            >
              <p className='text-white text-2xl px-2 py-5 text-center md:text-left'>{tankPercentage.toFixed(0)}%</p>
            </div>
            <div
              className="border border-emerald-500 bg-emerald-500/10 h-full"
              style={{ width: `${healerPercentage}%`, minWidth: "4rem" }}
            >
              <p className='text-white text-2xl px-2 py-5'>{healerPercentage.toFixed(0)}%</p>
            </div>
            <div
              className="border border-red-500 bg-red-500/10 h-full rounded-md rounded-bl-none rounded-tl-none"
              style={{ width: `${dpsPercentage}%` }}
            >
              <p className='text-white text-2xl px-2 py-5'>{dpsPercentage.toFixed(0)}%</p>
            </div>
        </div>
      </div>
    </div>
  )
};