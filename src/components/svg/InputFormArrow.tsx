interface InputFormArrowProps {
  isOpen: boolean;
}

export const InputFormArrow = ({isOpen}: InputFormArrowProps) => {
  return (
      <div className={`absolute right-1 top-1/2 -translate-y-1/2 transition-transform duration-200 ${ isOpen ? "rotate-90" : "rotate-360" }`}>
        <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center transition duration-300 hover:bg-inputFormBackground">
          <svg id="apply-form-arrow" width="10" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.65715 8.07106C7.04768 8.46158 7.68084 8.46158 8.07136 8.07106L14.4353 1.7071C14.8259 1.31657 14.8259 0.683409 14.4353 0.292885C14.0448 -0.0976396 13.4116 -0.0976396 13.0211 0.292885L7.36426 5.94974L1.7074 0.292885C1.31688 -0.0976396 0.683714 -0.0976396 0.29319 0.292885C-0.0973344 0.683409 -0.0973344 1.31657 0.29319 1.7071L6.65715 8.07106ZM7.36426 5.36395H6.36426V7.36395H7.36426H8.36426V5.36395H7.36426Z" fill="#88898F"/>
          </svg>
        </div>
      </div>
  )
};