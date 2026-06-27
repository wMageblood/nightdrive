import { useState } from "react";
import { STATUS_MESSAGES } from "../constants/statusMessage";
import { FIELD_DESCRIPTIONS } from "../constants/formFields";
import { InputFormField } from "./inputFormFields/InputFormField";
import { RealmFormField } from "./inputFormFields/RealmFormField";
import { CLASS_NAMES, ROLE_NAMES } from "../constants/wowConstants";
import { SubmitButton } from "../components/inputFormFields/SubmitButton";
import { ButtonFormField } from "../components/inputFormFields/ButtonFormField";
import { ListCollapse, MessageCircleWarningIcon} from "lucide-react";
import { TextAreaFormField } from "./inputFormFields/TextAreaFormField";

const initialState = { name: "", realm: "", main: "", role: "", availability: "", contact: "", experience: "", reasons: "", personal: ""  };

export const InputForm = () => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const activeStatus = error ? STATUS_MESSAGES.error : success ? STATUS_MESSAGES.success : null;

  const [form, setForm] = useState({
    name: "",
    realm: "",
    main: "",
    role: "",
    availability: "",
    contact: "",
    experience: "",
    reasons: "",
    personal: "",
  });

  const handleSubmitTest = () => console.log(form)

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
      <div className='flex text-center px-4 text-sm font-Inter text-white bg-[#af4afe]/28 py-4 mb-10 border border-[#af4afe] rounded-md shadow-[0_0_6px_rgba(172,72,250,0.55),0_0_30px_rgba(172,72,250,0.35)]'>
        <MessageCircleWarningIcon />
        <h1 className='ml-3'>Este apply es nuestra <span className='font-semibold'>primera impresión</span>. Los applies cortos, con horrores ortográficos o con poca información se eliminan directamente - tómate tu tiempo.</h1>
      </div>


      <div className="relative bg-[#0e1220] border border-slate-800 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 pt-6 pb-4 gap-6">

          <div className='col-span-full font-semibold text-[#cad0d3] flex items-center'>
            <h1 className="text-[#B04AFF] font-Inter tracking-tighter text-lg">
              <span className="text-2xl font-Inter [text-shadow:0_0_16px_#B04AFF,0_0_16px_#B04AFF,0_0_32px_#B04AFF]">
                •
              </span>
              {" "}TU PERSONAJE
            </h1>
            <div className='flex-1 h-0.5 bg-linear-to-r from-[#B04AFF] to-bg-transparent ml-3'></div>
          </div>

        {/* <div>
          <label className='block text-slate-600 uppercase font-bold text-xs mb-2'>Nombre de tu personaje</label>
          <input className='focus:outline-0 border rounded-md px-2.5 py-3 border-slate-800 w-full placeholder:text-slate-600 placeholder:font-semibold text-[#9da4ac]' type='text' placeholder='Ej. Esh'></input>
        </div> */}


          <div className=''>
            <InputFormField id={'name'} placeholder='Ej. Esh' label={'Nombre de tu personaje'} inputMaxLenght={50} inputValue={form.name} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value})} fieldDescription={FIELD_DESCRIPTIONS.name} zIndex={''}/>
          </div>
          <div className=''>
            <RealmFormField placeholder='Selecciona tu reino' label={'Reino'} value={form.realm} onChange={(value) => setForm({...form, realm: value})}/>
          </div>
          <div className=''>
            <ButtonFormField buttonText={form.main || 'Tu clase principal'} label='Main' data={CLASS_NAMES} getLabel={(item) => item.wowClass} getValue={(item) => item.value} getIcon={(item) => item.icon} onSelect={(value) => setForm({ ...form, main: value})} zIndex={''}/>
          </div>
          <div className=''>
            <ButtonFormField buttonText={form.role || 'Selecciona tu rol'} label='Rol' data={ROLE_NAMES} getLabel={(item) => item.value} getValue={(item) => item.value} getIcon={(item) => item.icon} onSelect={(value) => setForm({ ...form, role: value })} zIndex={''}/>
          </div>
          <div>
            <InputFormField placeholder='Dias y horarios de raid' label={'Disponibilidad'} id={'availability'} inputMaxLenght={150} inputValue={form.availability} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, availability: e.target.value})} fieldDescription={FIELD_DESCRIPTIONS.availability} zIndex={''} />
          </div>
          {/* <div className=''>
            <ButtonFormField buttonText={form.alt || ''} label='Alt' data={CLASS_NAMES} getLabel={(item) => item.wowClass} getValue={(item) => item.value} getIcon={(item) => item.icon} onSelect={(value) => setForm({ ...form, alt: value})} zIndex={''}/>
          </div> */}
          <div>
            <InputFormField placeholder='Usuario de Discord o BattleTag#1234' label={'Discord y BNET'} id={'contact'} inputMaxLenght={100} inputValue={form.contact} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, contact: e.target.value})} fieldDescription={FIELD_DESCRIPTIONS.contact}/>
          </div>

          <div className='col-span-full font-semibold text-[#cad0d3] mt-5 flex items-center'>
            <h1 className="text-[#B04AFF] font-Inter tracking-tighter text-lg">
              <span className="text-2xl [text-shadow:0_0_16px_#B04AFF,0_0_16px_#B04AFF,0_0_32px_#B04AFF]">
                •
              </span>
              {" "}SOBRE TI
            </h1>
            <div className='flex-1 h-0.5 bg-linear-to-r from-[#B04AFF] to-bg-transparent ml-3'></div>
          </div>

          <div className='col-span-1 md:col-span-full'>
            <TextAreaFormField placeholder={'Incluye progreso, guilds anteriores, roles que has jugado y cualquier logro relevante.'} label={'Experiencia'} id={'experience'} inputMaxLenght={950} inputValue={form.experience} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, experience: e.target.value})} fieldDescription={FIELD_DESCRIPTIONS.experience} zIndex=''/>
          </div>
          <div className='col-span-1'>
            <TextAreaFormField placeholder={'¿Por qué nosotros? ¿Qué buscas?'} label={'Razones para aplicar'} id={'reasons'} inputMaxLenght={800} inputValue={form.reasons} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, reasons: e.target.value})} fieldDescription={FIELD_DESCRIPTIONS.reasons} zIndex={''}/>
          </div>
          <div className='col-span-1'>
            <TextAreaFormField placeholder={'Cuéntanos quien eres fuera del juego.'} label={'Describete lo mejor que puedas'} id={'personal'} inputMaxLenght={800} inputValue={form.personal} stateValues={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, personal: e.target.value})} fieldDescription={FIELD_DESCRIPTIONS.reasons} zIndex={''}/>
          </div>
          <div className='border-b border-slate-800 w-full col-span-full mt-5 mb-2'/>
          <div className='flex col-span-full items-center text-slate-800 font-bold font-Rajdhani mb-5 justify-between'>
            Se envía directo a nuestro Discord.
            <span className='text-2xl text-red-500'>ESTAMOS HACIENDO CAMBIOS, NO ENVIES APPLIES YA QUE NO LLEGARAN, VUELVE MAS TARDE</span>
            <SubmitButton status={loading} handler={handleSubmit}/>
          </div>
          <div className="bg-red-500 ml-auto">
          </div>

      {/*
      */}

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