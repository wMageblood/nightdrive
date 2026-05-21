import { useState } from "react";
import { CLASS_NAMES, ROLE_NAMES } from "../../server/constants/embededMessageProperties"
import { REALM_LIST } from "../constants/realmList";

const initialState = { name: "", realm: "", main: "", alt: "", role: "", experience: "", availability: "", reasons: "", contact: "" };

export const InputForm = () => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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

            <button disabled={loading} onClick={handleSubmit} type="submit" className={`${loading ? "saturate-5" : null} bg-linear-to-r from-heirloom to-heirloom/1 rounded-sm px-2 h-8 uppercase font-bold font-Roboto active:bg-heirloom active:inset-shadow-lg`}>{loading ? "Enviando..." : "ENVIAR"}</button>

      </div>

      { error && <div className="flex items-center justify-center border-3 border-red-accent-700 bg-red-accent-400 rounded-sm w-1/2 h-24 px-2 py-1 font-Roboto font-bold mx-auto">Hubo un problema, asegurate de llenar todos los campos o de poner un personaje valido.</div>      }
      { success && <div className="flex items-center justify-center border-3 border-cyan-accent-700 bg-cyan-accent-400 rounded-sm w-1/2 h-24 px-2 py-1 font-Roboto font-bold mx-auto">Tu apply fue enviado.</div> }

    </div>
  );
};