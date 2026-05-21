import { useState } from "react";
import { CLASS_NAMES, ROLE_NAMES } from "../../server/constants/embededMessageProperties"
import { REALM_LIST } from "../constants/realmList";

const initialState = { name: "", realm: "", main: "", alt: "", role: "", experience: "", availability: "", reasons: "", contact: "" };

export const InputForm = () => {

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
      console.log(result);
      setForm({...initialState})
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>

        <div className="rounded-sm grid grid-cols-1 gap-4 p-4 w-3/4 mx-auto">
          <input id="name" className="bg-linear-to-r from-legendary via-legendary/10 to-legendary/1 focus:bg-legendary rounded-sm px-2 h-8 font-Roboto" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value})} placeholder="Nombre de tu personaje" type="text" />
            <select id="realm" className="text-black bg-linear-to-r from-legendary via-legendary/10 to-legendary/1 focus:bg-legendary appearance-none rounded-sm px-2 h-8 font-bold font-Roboto" value={form.realm} onChange={(e) => setForm({ ...form, realm: e.target.value})}>
              <option value="" className="">Reino</option>
              {REALM_LIST.map((realm) => <option className={``} value={realm}>{realm}</option>)}
            </select>


          <select id="main" className="text-black bg-linear-to-r from-epic via-epic/10 to-epic/1 focus:bg-epic appearance-none rounded-sm px-2 h-8 font-bold font-Roboto" value={form.main} onChange={(e) => setForm({ ...form, main: e.target.value })}>
              <option value="">Clase Main</option>
              {CLASS_NAMES.map(({wowClass, value}) => <option key={value} value={value}>{wowClass}</option>)}
          </select>

          <select id="alt" className="text-black bg-linear-to-r from-epic via-epic/10 to-epic/1 focus:bg-epic appearance-none rounded-sm px-2 h-8 font-bold font-Roboto" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })}>
              <option value="">Clase Alt</option>
              {CLASS_NAMES.map(({wowClass, value}) => <option key={value} value={value}>{wowClass}</option>)}
          </select>

          <select id="role" className="text-black bg-linear-to-r from-rare via-rare/10 to-rare/1 focus:bg-rare appearance-none rounded-sm px-2 h-8 font-bold font-Roboto" value={form.role} onChange={(e) => setForm({...form, role: e.target.value})}>
              <option value="">Rol</option>
              {ROLE_NAMES.map(({role}) => <option key={role} value={role}>{role}</option>)}
          </select>

              <input id="experience" className="bg-linear-to-r from-rare via-rare/10 to-rare/1 focus:bg-rare rounded-sm px-2 h-8 font-Roboto" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value})} placeholder="Experiencia previa" type="text" />
              <input id="availability" className="bg-linear-to-r from-uncommon via-uncommon/10 to-uncommon/1 focus:bg-uncommon rounded-sm px-2 h-8 font-Roboto" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value})} placeholder="Disponibilidad" type="text" />
              <input id="reasons" className="bg-linear-to-r from-uncommon via-uncommon/10 to-uncommonfrom-uncommon/1 focus:bg-uncommon rounded-sm px-2 h-8 font-Roboto" value={form.reasons} onChange={(e) => setForm({ ...form, reasons: e.target.value})} placeholder="Razones para aplicar" type="text" />
              <input id="contact" className="bg-linear-to-r from-artifact via-artifact/10 to-artifact/1 focus:bg-artifact rounded-sm px-2 h-8 font-Roboto" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value})} placeholder="Discord" type="text" />

            <button type="submit" className="bg-linear-to-r from-heirloom to-heirloom/1 rounded-sm px-2 h-8 uppercase font-bold font-Roboto active:bg-heirloom active:inset-shadow-lg">ENVIAR</button>

      </div>
{/*
      <div className="mx-auto bg-inputForm-background/15 border-2 border-gray-neutral-600 min-w-xl w-xl lg:w-3xl min-h-6xl h-6xl rounded-sm p-3 *:font-Roboto">

        <div className="flex justify-between mb-8">
          <input id="name" className="text-legendary font-bold w-2/3 h-9 mb-5 pl-2 border-b-3 border-legendary" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value})} placeholder="Nombre de tu personaje" type="text" />
          <select id="realm" className="text-white font-bold mb-5 pl-2 py-[6.5px] appearance-none border-b-3 border-legendary" value={form.realm} onChange={(e) => setForm({ ...form, realm: e.target.value})}>
            <option value="" className="">Reino</option>
            {REALM_LIST.map((realm) => <option className={``} value={realm}>{realm}</option>)}
          </select>
        </div>

          <div className="flex justify-between *:mb-16 *:pl-2">
            <select id="main" className="bg-transparent font-bold border-b-3 border-epic appearance-none text-white mb-5 pl-2 py-1 mr-5 w-1/3" value={form.main} onChange={(e) => setForm({ ...form, main: e.target.value })}>
                <option value="">Clase Main</option>
                {CLASS_NAMES.map(({wowClass, value}) => <option key={value} value={value}>{wowClass}</option>)}
            </select>

            <select id="alt" className="bg-transparent font-bold border-b-3 border-epic appearance-none text-white mb-5 pl-2 py-1 w-1/3" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })}>
                <option value="">Clase Alt</option>
                {CLASS_NAMES.map(({wowClass, value}) => <option key={value} value={value}>{wowClass}</option>)}
            </select>

            <select id="role" className="bg-transparent font-bold border-b-3 border-epic appearance-none text-white mb-5 pl-2 py-1 ml-5 w-1/3" value={form.role} onChange={(e) => setForm({...form, role: e.target.value})}>
                <option value="">Rol</option>
                {ROLE_NAMES.map(({role}) => <option key={role} value={role}>{role}</option>)}
            </select>
          </div>

          <div className="*:w-full *:mb-15 *:pl-2 *:bg-gray-neutral-600/0 *:h-9 *:border-b-3">
            <input id="experience" className="border-rare" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value})} placeholder="Experiencia previa" type="text" />
            <input id="availability" className="border-uncommon" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value})} placeholder="Disponibilidad" type="text" />
            <input id="reasons" className="border-poor" value={form.reasons} onChange={(e) => setForm({ ...form, reasons: e.target.value})} placeholder="Razones para aplicar" type="text" />
            <input id="contact" className="border-artifact" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value})} placeholder="Discord" type="text" />
          </div>

          <div>
            <button onClick={handleSubmit} type="submit" className="bg-heirloom font-bold tracking-tighter px-3 py-2 rounded-sm w-full">ENVIAR</button>
          </div>

      </div> */}

    </div>
  );
};