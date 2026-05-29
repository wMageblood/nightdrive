import { useState } from "react";
import { STATUS_MESSAGES } from "../constants/statusMessage"
import { FIELD_DESCRIPTIONS } from "../constants/formFields";
import { InputFormField } from "./inputFormFields/InputFormField";
import { RealmFormField } from "./inputFormFields/RealmFormField";
import { CLASS_NAMES, ROLE_NAMES } from "../constants/wowConstants"
import { SubmitButton } from "../components/inputFormFields/SubmitButton"
import { ButtonFormField } from "../components/inputFormFields/ButtonFormField"

const initialState = { name: "", realm: "", main: "", alt: "", role: "", experience: "", availability: "", reasons: "", contact: "" };

export const InputForm = () => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const activeStatus = error ? STATUS_MESSAGES.error : success ? STATUS_MESSAGES.success : null;

  const [form, setForm] = useState({
    name: "",
    realm: "",
    main: "",
    alt: "",
    role: "",
    experience: "",
    availability: "",
    reasons: "",
    contact: "",
  });

  const handleSubmit = async () => {

    setSuccess(false);
    setLoading(true);
    setError(false);

  const data = form;

    try {
      const res = await fetch("https://ascended.onrender.com/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      const result = await res.json()

      if (!result.success) {
        setError(true);
    setTimeout(() => {
        setError(false);
      }, 6000);
      return;
    }

      if (result.success) {
        setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
      }

      console.log(result);
      setForm({...initialState})
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="input-wrapper relative bg-inputFormBackground grid grid-cols-1 w-3/4 mx-auto py-8 px-4">
        <div className="flex">
          <InputFormField id={'name'} inputMaxLenght={50} inputValue={form.name} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value})} inputPlaceholder={'Nombre de tu personaje'} fieldDescription={FIELD_DESCRIPTIONS.name} zIndex={'mr-5'}/>
          <RealmFormField value={form.realm} onChange={(value) => setForm({...form, realm: value})}/>
        </div>

        <div className="flex">
          <ButtonFormField buttonText={form.main || 'Clase Main'} data={CLASS_NAMES} getLabel={(item) => item.wowClass} getValue={(item) => item.value} getIcon={(item) => item.icon} onSelect={(value) => setForm({ ...form, main: value})} zIndex={'z-3 mr-5'}/>
          <ButtonFormField buttonText={form.alt || 'Clase Alt'} data={CLASS_NAMES} getLabel={(item) => item.wowClass} getValue={(item) => item.value} getIcon={(item) => item.icon} onSelect={(value) => setForm({ ...form, alt: value})} zIndex={'z-3'}/>
        </div>

        <div className="flex">
          <InputFormField id={'availability'} inputMaxLenght={150} inputValue={form.availability} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, availability: e.target.value})} inputPlaceholder={'Disponibilidad'} fieldDescription={FIELD_DESCRIPTIONS.availability} zIndex={'mr-5'} />
          <InputFormField id={'experience'} inputMaxLenght={250} inputValue={form.experience} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, experience: e.target.value})} inputPlaceholder={'Experiencia previa'} fieldDescription={FIELD_DESCRIPTIONS.experience}/>
        </div>

        <div className="flex">
          <InputFormField id={'reasons'} inputMaxLenght={350} inputValue={form.reasons} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, reasons: e.target.value})} inputPlaceholder={'Razones para aplicar'} fieldDescription={FIELD_DESCRIPTIONS.reasons} zIndex={'mr-5'}/>
          <InputFormField id={'contact'} inputMaxLenght={100} inputValue={form.contact} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, contact: e.target.value})} inputPlaceholder={'Información de contacto'} fieldDescription={FIELD_DESCRIPTIONS.contact}/>
        </div>

        <div className="flex">
          <ButtonFormField buttonText={form.role || 'Rol'} data={ROLE_NAMES} getLabel={(item) => item.value} getValue={(item) => item.value} getIcon={(item) => item.icon} onSelect={(value) => setForm({ ...form, role: value })} zIndex={'mr-5'}/>
          <SubmitButton status={loading} handler={handleSubmit}/>
        </div>

        {activeStatus && (
          <div className={`flex items-center justify-center ${activeStatus.className} rounded-sm h-12 px-2 font-Roboto font-bold mx-auto`}>
            <span className={`tracking-tighter px-2 ${activeStatus.textClass}`}>
              {activeStatus.message}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};