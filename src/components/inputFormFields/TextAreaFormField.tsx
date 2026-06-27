import { HelpIcon } from "./HelpIcon";

interface TextAreaFormFieldProps {
  id: string,
  inputMaxLenght: number,
  inputValue: string,
  stateValues: any,
  fieldDescription: any,
  zIndex?: string,
  label: string,
  placeholder: string,
}


export const TextAreaFormField = ({id, inputMaxLenght, inputValue, stateValues, fieldDescription, label, zIndex, placeholder}: TextAreaFormFieldProps) => {

  return (

    <div className={`relative ${zIndex}`}>
      <p className='block text-slate-600 uppercase font-bold text-xs mb-2'>{label}</p>
      <textarea id={id} placeholder={placeholder} required={true} maxLength={inputMaxLenght} value={inputValue} onChange={stateValues} className={`input-text-area-styling resize-y`}/>
      {/* <HelpIcon zIndex="z-50" fieldDescription={fieldDescription}/> */}
    </div>
  )
};