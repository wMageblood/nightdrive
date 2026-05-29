import { HelpIcon } from "./HelpIcon";

interface InputFormProps {
  id: string,
  inputMaxLenght: number,
  inputValue: string,
  stateValues: any,
  inputPlaceholder: string,
  fieldDescription: any,
  zIndex?: string,
}


export const InputFormField = ({id, inputMaxLenght, inputValue, stateValues, inputPlaceholder, fieldDescription, zIndex}: InputFormProps) => {

  return (

    <div className={`relative w-1/2 mb-15 ${zIndex}`}>
      <input id={id} required={true} maxLength={inputMaxLenght} value={inputValue} onChange={stateValues} placeholder={inputPlaceholder} type="text" className={`input-form-styling`}/>
      <HelpIcon zIndex="z-2" fieldDescription={fieldDescription}/>
    </div>
  )
};