import type React from "react"

interface helpIconProps {
  zIndex?: string,
  fieldDescription: React.ReactNode;
}

export const HelpIcon = ({zIndex, fieldDescription}: helpIconProps) => {
  return (

    <div className={`group absolute right-1 top-1/2 -translate-y-1/2 ${zIndex}`}>
      <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center cursor-help transition duration-300 hover:bg-inputFormBackground">
        i
      </div>
      <div className="hidden group-hover:block absolute left-7 -top-5.75 -translate-y-1/2 border-2 border-black bg-inputFormBackground text-white text-xs px-3 py-3 rounded whitespace-nowrap">
          {fieldDescription}
      </div>
    </div>
  )
};