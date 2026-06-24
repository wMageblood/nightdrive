import { ROLE_DATA } from "../constants/RoleData"

interface RoleFilterProps {
  selectedFilter: string | null;
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export const RoleFilter = ({ selectedFilter, setSelectedFilter}: RoleFilterProps) => {
  console.log(`${selectedFilter}`);
  return (
    <div className='w-[85%] md:w-[80%] xl:w-[90%] mx-auto mb-7'>
        <div className='text-2xl mt-6 flex flex-wrap justify-center'>
            {ROLE_DATA.map(({icon, roleName}) => (
              <div onClick={() => setSelectedFilter( selectedFilter === roleName ? null : roleName )} className={`min-w-17 select-none inset-shadow-lg flex items-center mx-2`}>
                <div className={`border border-[#cad0d3] flex items-center justify-center rounded-md p-2 ${selectedFilter === roleName ? 'bg-[#cad0d3] *:text-[#030712]' : 'bg-[#030712] *:text-[#cad0d3]'}`}>
                  <p className='font-semibold'>{icon}</p>
                  <p className='font-semibold ml-1'>{roleName}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
};
