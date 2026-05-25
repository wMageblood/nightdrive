import { useState } from "react";
import { CLASS_NAMES, ROLE_NAMES } from "../constants/wowIcons"
import { REALM_LIST } from "../constants/realmList";

const initialState = { name: "", realm: "", main: "", alt: "", role: "", experience: "", availability: "", reasons: "", contact: "" };

export const InputForm = () => {

  const [realmSearch, setRealmSearch] = useState("")

  const [selectedRole, setSelectedRole] = useState("")
  const [openRole, setOpenRole] = useState(false)
  const [selectedRealm, setSelectedRealm] = useState("")
  const [openRealms, setOpenRealms] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [openSelectedClass, setOpenSelectedClass] = useState(false);

  const [selectedAltClass, setSelectedAltClass] = useState("");
  const [openAltClass, setOpenAltClass] = useState(false)

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

  const filteredRealms = REALM_LIST.filter((realm) => realm.toLowerCase().includes(realmSearch.toLowerCase()));

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

  const handleTest = () => console.log(form);

  return (
    <div>

        {/* <div className="rounded-sm grid grid-cols-1 gap-4 p-4 w-3/4 mx-auto">
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
          { success && <div className="flex items-center justify-center border-3 border-cyan-accent-700 bg-cyan-accent-400 rounded-sm w-1/2 h-24 px-2 py-1 font-Roboto font-bold mx-auto">Tu apply fue enviado.</div> } */}


            <div className="input-wrapper relative bg-inputFormBackground grid grid-cols-1 w-3/4 mx-auto py-8 px-4">

             <div className="flex">
                <div className="relative w-1/2 mb-15 mr-5">
                  <input id="name" required={true} maxLength={50} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value})} placeholder="Nombre de tu personaje" type="text" className="bg-inputFormBackground shadow-3xl border w-full border-inputFormElements text-inputFormElements focus:outline-0 rounded-full h-10 mx-auto pl-4 pr-10 pb-px"/>
                  <div className="group absolute right-1 top-1/2 -translate-y-1/2 z-2">
                    <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center cursor-help transition duration-300 hover:bg-inputFormBackground">
                      i
                    </div>
                    <div className="hidden group-hover:block absolute left-7 -top-5.75 -translate-y-1/2 border-2 border-black bg-inputFormBackground text-white text-xs px-3 py-3 rounded whitespace-nowrap">
                      Tiene que aparecer en la página de Raider.IO
                    </div>
                  </div>
                </div>

                <div onClick={() => setOpenRealms(!openRealms)} className="relative w-1/2 mb-15">
                  <div className={`absolute right-1 top-1/2 -translate-y-1/2 transition-transform duration-200 ${ openRealms ? "rotate-90" : "rotate-360" }`}>
                    <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center transition duration-300 hover:bg-inputFormBackground">
                      <svg id="apply-form-arrow" width="10" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.65715 8.07106C7.04768 8.46158 7.68084 8.46158 8.07136 8.07106L14.4353 1.7071C14.8259 1.31657 14.8259 0.683409 14.4353 0.292885C14.0448 -0.0976396 13.4116 -0.0976396 13.0211 0.292885L7.36426 5.94974L1.7074 0.292885C1.31688 -0.0976396 0.683714 -0.0976396 0.29319 0.292885C-0.0973344 0.683409 -0.0973344 1.31657 0.29319 1.7071L6.65715 8.07106ZM7.36426 5.36395H6.36426V7.36395H7.36426H8.36426V5.36395H7.36426Z" fill="#88898F"/>
                      </svg>
                    </div>
                  </div>
                      <input id="realm" type="text" placeholder="Reino" value={realmSearch} onChange={(e) => { setRealmSearch(e.target.value); setForm({ ...form, realm: e.target.value})}} className="bg-inputFormBackground border shadow-3xl w-full border-inputFormElements text-inputFormElements focus:outline-0 rounded-full h-10 mx-auto pl-4 pr-10 pb-px"/>
                  {openRealms && (
                    <div className="max-h-64 overflow-y-auto absolute w-[90%] rounded-b-2xl border-l border-r border-b right-[5%] -mt-[px] border-inputFormElements bg-inputFormBackground shadow-3xl z-2">
                      {filteredRealms.map((realm) => (
                        <div key={realm} onClick={() => {setSelectedRealm(realm); setRealmSearch(realm); setForm({ ...form, realm}); setOpenRealms(false);}} className="px-4 py-3 text-inputFormElements hover:bg-white/10 cursor-pointer transition-colors flex">
                          {realm}
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
                </div>

            <div className="flex">
              <div onClick={() => setOpenSelectedClass(!openSelectedClass)} className="relative w-1/2 mb-15 mr-5">
                <button type="button" className="w-full rounded-full border border-inputFormElements h-10 px-4 text-left text-inputFormElements bg-inputFormBackground shadow-3xl">
                  {form.main || "Clase Main"}
                </button>
                <div className={`absolute right-1 top-1/2 -translate-y-1/2 transition-transform duration-200 ${ openSelectedClass ? "rotate-90" : "rotate-360" }`}>
                  <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center transition duration-300 hover:bg-inputFormBackground">
                    <svg id="apply-form-arrow" width="10" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.65715 8.07106C7.04768 8.46158 7.68084 8.46158 8.07136 8.07106L14.4353 1.7071C14.8259 1.31657 14.8259 0.683409 14.4353 0.292885C14.0448 -0.0976396 13.4116 -0.0976396 13.0211 0.292885L7.36426 5.94974L1.7074 0.292885C1.31688 -0.0976396 0.683714 -0.0976396 0.29319 0.292885C-0.0973344 0.683409 -0.0973344 1.31657 0.29319 1.7071L6.65715 8.07106ZM7.36426 5.36395H6.36426V7.36395H7.36426H8.36426V5.36395H7.36426Z" fill="#88898F"/>
                    </svg>
                  </div>
                </div>
                {openSelectedClass && (
                  <div className="max-h-64 overflow-y-auto absolute w-[90%] rounded-b-2xl border-l border-r border-b right-[5%] -mt-[px] border-inputFormElements bg-inputFormBackground overflow-hidden shadow-3xl z-3">
                    {CLASS_NAMES.map(({ wowClass, value, icon }) => (
                      <div key={value} onClick={() => { setForm({ ...form, main:value}); setOpenSelectedClass(false)}} className="px-4 py-3 text-inputFormElements hover:bg-white/10 cursor-pointer transition-colors flex">
                        <img width={23} className="border border-black mr-2" src={icon} />  {wowClass}
                      </div>
                    ))}
                  </div>
                )}
              </div>

                <div onClick={() => setOpenAltClass(!openAltClass)} className="relative w-1/2 mb-15">
                  <button type="button" className="w-full rounded-full border border-inputFormElements h-10 px-4 text-left text-inputFormElements bg-inputFormBackground shadow-3xl">
                    {form.alt || "Clase Alt"}
                  </button>
                  <div className={`absolute right-1 top-1/2 -translate-y-1/2 transition-transform duration-200 ${ openAltClass ? "rotate-90" : "rotate-360" }`}>
                    <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center transition duration-300 hover:bg-inputFormBackground">
                      <svg id="apply-form-arrow" width="10" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.65715 8.07106C7.04768 8.46158 7.68084 8.46158 8.07136 8.07106L14.4353 1.7071C14.8259 1.31657 14.8259 0.683409 14.4353 0.292885C14.0448 -0.0976396 13.4116 -0.0976396 13.0211 0.292885L7.36426 5.94974L1.7074 0.292885C1.31688 -0.0976396 0.683714 -0.0976396 0.29319 0.292885C-0.0973344 0.683409 -0.0973344 1.31657 0.29319 1.7071L6.65715 8.07106ZM7.36426 5.36395H6.36426V7.36395H7.36426H8.36426V5.36395H7.36426Z" fill="#88898F"/>
                      </svg>
                    </div>
                  </div>
                  {openAltClass && (
                    <div className="max-h-64 overflow-y-auto absolute w-[90%] rounded-b-2xl border-l border-r border-b right-[5%] -mt-[px] border-inputFormElements bg-inputFormBackground overflow-hidden shadow-3xl z-2">
                      {CLASS_NAMES.map(({ wowClass, value, icon }) => (
                        <div key={value} onClick={() => { setForm({ ...form, alt: value}); setOpenAltClass(false)}} className="px-4 py-3 text-inputFormElements hover:bg-white/10 cursor-pointer transition-colors flex">
                          <img width={23} className="border border-black mr-2" src={icon} />  {wowClass}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex">
                <div className="relative w-1/2 mb-15 mr-5">
                  <input id="availability" required={true} maxLength={100} value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value})} placeholder="Disponibilidad" type="text" className="bg-inputFormBackground border shadow-3xl w-full border-inputFormElements text-inputFormElements focus:outline-0 rounded-full h-10 mx-auto pl-4 pr-10 pb-px"/>
                  <div className="group absolute right-1 top-1/2 -translate-y-1/2 z-1">
                    <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center cursor-help transition duration-300 hover:bg-inputFormBackground">
                      i
                    </div>
                    <div className="hidden group-hover:block absolute left-7 -top-5.75 -translate-y-1/2 border-2 border-black bg-inputFormBackground text-white text-xs px-3 py-3 rounded whitespace-nowrap">
                      Ragnaros opera en la zona horaria CDT. <br/>
                      Ejemplo: <br/>
                      • Horario: 8PM ST (server time) a 11PM ST. <br/>
                      • Días: Lunes, Martes, Miércoles, Jueves, Viernes y Domingo.
                    </div>
                  </div>
                </div>

                <div className="relative w-1/2 mb-15">
                  <input id="experience" required={true} maxLength={100} placeholder="Experiencia previa" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value})} type="text" className="bg-inputFormBackground border shadow-3xl w-full border-inputFormElements text-inputFormElements focus:outline-0 rounded-full h-10 mx-auto pl-4 pr-10 pb-px"/>
                  <div className="group absolute right-1 top-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center cursor-help transition duration-300 hover:bg-inputFormBackground">
                      i
                    </div>
                    <div className="hidden group-hover:block absolute left-7 -top-5.75 -translate-y-1/2 border-2 border-black bg-inputFormBackground text-white text-xs px-3 py-3 rounded whitespace-nowrap">
                        Ejemplo: <br/>
                        • Raideo desde Hellfire Citadel <br/>
                        • Jugué DPS en una raid, healer en otra y <br/>
                          tank en la última, pero mi main rol es: (rol). <br/>
                        • Estuve Poptar Corndog con Dratnos. <br/>
                        • 9/9M Tier-1 Midnight. <br/>
                        • 6/9M Manaforge Omega. <br/>
                    </div>
                  </div>
                </div>
              </div>

            <div className="flex">
              <div className="relative w-1/2 mb-15 mr-5">
                <input id="reasons" required={true} maxLength={100} placeholder="Razones para aplicar" value={form.reasons} onChange={(e) => setForm({ ...form, reasons: e.target.value})} type="text" className="bg-inputFormBackground shadow-3xl border w-full border-inputFormElements text-inputFormElements focus:outline-0 rounded-full h-10 mx-auto pl-4 pr-10 pb-px"/>
                <div className="group absolute right-1 top-1/2 -translate-y-1/2 z-1">
                  <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center cursor-help transition duration-300 hover:bg-inputFormBackground">
                    i
                  </div>
                  <div className="hidden group-hover:block absolute left-7 -top-5.75 -translate-y-1/2 border-2 border-black bg-inputFormBackground text-white text-xs px-3 py-3 rounded whitespace-nowrap">
                    Razones válidas: <br/>
                    • Jugar con el gordinflón (Kayn). <br/>
                    • Raidear más que cualquier otra guild en el universo. <br/>
                    • Aprender a hablar Murloc (chileno). <br/>
                    Razones <span className="underline text-red-600">NO</span> válidas: <br/>
                    • Jugar con los mejores players de LATAM (Shenklong) <span className="line-through">mentira</span>. <br/>
                    • Hacer buen oro después del progress. <br/>
                    • Terminar el tier rápido para raidear menos <span className="line-through">xd</span>. <br/>

                  </div>
                </div>
              </div>

              <div className="relative w-1/2 mb-15">
                <input id="contact" required={true} maxLength={100} value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value})} placeholder="Información de contacto" type="text" className="bg-inputFormBackground shadow-3xl border w-full border-inputFormElements text-inputFormElements focus:outline-0 rounded-full h-10 mx-auto pl-4 pr-10 pb-px"/>
                <div className="group absolute right-1 top-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center cursor-help transition duration-300 hover:bg-inputFormBackground">
                    i
                  </div>
                  <div className="hidden group-hover:block absolute left-7 -top-5.75 -translate-y-1/2 border-2 border-black bg-inputFormBackground text-white text-xs px-3 py-3 rounded whitespace-nowrap">
                    Ejemplo: <br/>
                      • discord1022 <br/>
                      • battlenet#1700 <br/>
                      • myspace.com/emoRockero <br/>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div onClick={() => setOpenRole(!openRole)} className="relative w-1/2 mb-15 mr-5">
                <button type="button" className="w-full rounded-full border border-inputFormElements h-10 px-4 text-left text-inputFormElements bg-inputFormBackground shadow-3xl">
                  {form.role || "Rol"}
                </button>
                <div className={`absolute right-1 top-1/2 -translate-y-1/2 transition-transform duration-200 ${ openRole ? "rotate-90" : "rotate-360" }`}>
                  <div className="w-8 h-8 rounded-full border border-inputFormElements text-inputFormElements bg-inputFormIconBg flex font-extrabold items-center justify-center transition duration-300 hover:bg-inputFormBackground">
                    <svg id="apply-form-arrow" width="10" height="9" viewBox="0 0 15 9" fill="none">
                      <path d="M6.65715 8.07106C7.04768 8.46158 7.68084 8.46158 8.07136 8.07106L14.4353 1.7071C14.8259 1.31657 14.8259 0.683409 14.4353 0.292885C14.0448 -0.0976396 13.4116 -0.0976396 13.0211 0.292885L7.36426 5.94974L1.7074 0.292885C1.31688 -0.0976396 0.683714 -0.0976396 0.29319 0.292885C-0.0973344 0.683409 -0.0973344 1.31657 0.29319 1.7071L6.65715 8.07106ZM7.36426 5.36395H6.36426V7.36395H7.36426H8.36426V5.36395H7.36426Z" fill="#88898F"/>
                    </svg>
                  </div>
                </div>
                {openRole && (
                  <div className="absolute w-[90%] rounded-b-2xl border-l border-r border-b right-[5%] -mt-[px] border-inputFormElements bg-inputFormBackground overflow-hidden shadow-3xl">
                    {ROLE_NAMES.map(({ value, icon }) => (
                      <div key={value} onClick={() => { setForm({ ...form, role: value}); setOpenRole(false)}} className="px-4 py-3 text-inputFormElements hover:bg-white/10 cursor-pointer transition-colors flex">
                        <img width={23} className="mr-2" src={icon} />  {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button disabled={loading} onClick={handleSubmit} type="submit" className={`${loading ? "saturate-5" : null} w-1/2 bg-highlightColor3 rounded-full h-10  font-bold tracking-tighter shadow-3xl active:shadow-3xl-inset`}>{loading ? "Enviando..." : "ENVIAR"}</button>
            </div>


              { error && <div className="flex items-center justify-center bg-red-accent-400 rounded-sm h-12 px-2 font-Roboto font-bold mx-auto"><span className="tracking-tighter px-2 text-red-accent-800">Error en tu apply, asegurate de poner un personaje válido o de llenar todos los campos.</span></div>  }
              { success && <div className="flex items-center justify-center bg-cyan-accent-400 rounded-sm h-12 px-2 font-Roboto font-bold mx-auto"><span className="tracking-tighter px-2 text-cyan-accent-800">Tu apply fue enviado.</span></div> }

            </div>
    </div>
  );
};