import { useEffect, useRef, useState } from "react";
import { ChevronDownCircle } from "lucide-react";

type ButtonFormProps<T> = {
  data: T[],
  label: string,
  zIndex?: string
  buttonText: string,
  getLabel: (item: T) => string,
  getValue: (item: T) => string,
  getIcon?: (item: T) => string,
  onSelect: (value: string) => void,
};

export const ButtonFormField = <T,>(props: ButtonFormProps<T>) => {

  const [visibility, setVisibility] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setVisibility(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (

    <div ref={wrapperRef} className={`relative ${props.zIndex}`}>
      <p className='block text-slate-600 uppercase font-bold text-xs mb-2'>{props.label}</p>
          <button onFocus={() => setVisibility(true)}  type="button" className="input-form-main-role-styling">
            {props.buttonText}
          </button>
          <ChevronDownCircle className={`text-[#a04aff] absolute right-2 bottom-3 transition-transform duration-200 ${visibility ? 'rotate-90' : 'null'}`} />
          {visibility && (
            <div className="input-form-dropdown-body z-2">
            {props.data.map((item) => (
              <div key={props.getValue(item)} onClick={() => {props.onSelect(props.getValue(item)); setVisibility(false);}} className="input-form-dropdown">
                <img width={23} className="mr-2" src={props.getIcon?.(item)} />  {props.getLabel(item)}
              </div>
            ))}
          </div>
        )}
    </div>
    )
  };

// esta funcion usa un tipo generico llamado T
// <T,> la coma esta para que TSX no tenga problemas pensando que es una tag de JSX
//las props de este componente va a usar el tipo generico <T>
// este componente es generico, y las props dependen de ese mismo tipo generico <T>