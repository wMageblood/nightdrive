import { RECRUITMENT } from "../constants/recruitment";

export const RecruitmentStatus = () => {

  const formattedDate = new Date().toLocaleDateString("es-MX");

  return (
    <div className='*:font-Rajdhani *:font-semibold mx-auto w-full shadow-soft-blur'>
      <div className="flex items-center justify-between border-l border-t border-r border-slate-800 px-6 py-4 bg-[#0e1220] rounded-tr-md rounded-tl-md ">
        <div className='text-[#c9cfd2] text-lg mr-10'>
          <p className='text-xl'>ESTAMOS RECLUTANDO!</p>
        </div>

        <p className='text-[#353433] hover:text-[#7a7774] transition duration-300'>UPDATED: {formattedDate}</p>
      </div>
      <div className='bg-[#0e1220] text-[#d9d4c5] px-6 pt-4 pb-2 border border-slate-800 rounded-br-md rounded-bl-md overflow-y-auto h-120 min-h-120 max-h-120 scrollbar-thin scrollbar-thumb-[#1d293d] scrollbar-track-[#0e1220]'>
          <div>
            {RECRUITMENT.map(({specName, specIcon, priority}) => (
              <div className='flex items-center gap-2 *:uppercase mb-3'>
                <img className='border border-[#1d293d] rounded-md shadow-soft-blur w-8 h-8' src={specIcon}/>
                <p className='font-Rajdhani'>{specName}</p>
                <p className={`ml-auto rounded-md px-3 py-0.5 justify-center select-none ${priority === 'High' ? 'bg-[#f99a9a] text-[#b52e2e] shadow-[0_0_14px_rgba(239,68,68,0.35),inset_0_0_10px_rgba(239,68,68,0.18)]' : priority === 'Medium' ? 'bg-[#ede097] text-[#867425] shadow-[0_0_14px_rgba(250,204,21,0.32),inset_0_0_10px_rgba(250,204,21,0.16)]' : 'bg-[#a1ed97] text-[#379539] shadow-[0_0_14px_rgba(34,197,94,0.35),inset_0_0_10px_rgba(34,197,94,0.18)]' } `}>{priority}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
};