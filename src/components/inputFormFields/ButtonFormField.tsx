import { useState } from "react";
import { InputFormArrow } from "../svg/InputFormArrow";

type ButtonFormProps<T> = {
  data: T[],
  zIndex?: string
  buttonText: string,
  getLabel: (item: T) => string,
  getValue: (item: T) => string,
  getIcon?: (item: T) => string,
  onSelect: (value: string) => void,
};

export const ButtonFormField = <T,>(props: ButtonFormProps<T>) => {

  const [visibility, setVisibility] = useState(false);

  return (

    <div onClick={() => setVisibility(!visibility)} className={`relative w-1/2 mb-15 ${props.zIndex}`}>
          <button type="button" className="input-form-button">
            {props.buttonText}
          </button>
            <InputFormArrow isOpen={visibility}/>
          {visibility && (
            <div className="input-form-dropdown-body">
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