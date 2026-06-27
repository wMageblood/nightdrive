import { HelpCircle } from "lucide-react";

interface helpIconProps {
  zIndex?: string,
  fieldDescription: React.ReactNode;
}

export const HelpIcon = ({zIndex, fieldDescription}: helpIconProps) => {
  return (

          <div className='bg-[#0e1220] absolute group top-0 -right-4 mr-1.25 h-11 flex items-center border-t-2 border-b-2 border-r-2 border-[#cad0d3] rounded-md rounded-tl-none rounded-bl-none'>
            <HelpCircle className='ml-1 mr-1.5 text-[#cad0d3] w-6 cursor-help' />
            <div className={`${zIndex} opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute bg-[#181818]/95 text-[#cad0d3] px-4 py-2 -translate-y-1/2 md:-bottom-12 md:left-2 right-2 bottom-12 font-semibold w-80 border border-t-[#9c9da2] border-l-[#727273] border-r-[#727273] border-b-[#727273] rounded-md shadow-soft-blur`}>
              {fieldDescription}
            </div>
          </div>
  )
};