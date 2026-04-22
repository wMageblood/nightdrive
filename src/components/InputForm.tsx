import { useState } from "react";
import WOW_CLASSES from "../constants/wowClasses";

const initialState = { main: "", alt: "", mainClassOption: "", experience: "", availability: "", reasons: "", contact: ""};

export const InputForm = () => {

  const [form, setForm] = useState({
    main: "",
    alt: "",
    mainClassOption: "",
    experience: "",
    availability: "",
    reasons: "",
    contact: "",
  });

  const handleSubmit = async () => {

  const data = form;

    try {
      const res = await fetch("http://localhost:3001/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json()
      console.log(form)
      console.log(result);
      setForm({...initialState})
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>

      <div className="mx-auto bg-black min-w-xl w-xl lg:w-3xl min-h-6xl h-6xl rounded-sm p-3">

          <div className="flex justify-between *:mb-5 *:pl-2">
            <input id="main" className="bg-sky-900 rounded-sm h-9" value={form.main} onChange={(e) => setForm({ ...form, main: e.target.value})} placeholder="Main Class" type="text" />
            <input id="alt" className="bg-sky-900 rounded-sm h-9" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value})} type="text" placeholder="Alt Class" />
          </div>

          <div className="flex justify-between *:mb-5 *:pl-2">

            <select className="px-3 bg-white" value={form.mainClassOption} onChange={(e) => setForm({ ...form, mainClassOption: e.target.value})}>
              {WOW_CLASSES.map(({ wowClass, spec }) => <option key={spec} value={spec} className="odd:bg-red-500 even:bg-red-200">{`${wowClass} - ${spec}`}</option>)}
            </select>

            {/* <select className="px-3 bg-white" value={form.mainClassOption} onChange={(e) => setForm({ ...form, mainClassOption: e.target.value })}>
              <option value="">Select a spec</option>

              {WOW_CLASSES.map(({ wowClass, spec }) => (<option key={spec} value={spec} className="odd:bg-red-500 even:bg-red-200">{`${wowClass} - ${spec}`}</option>))}
              </select> */}


          </div>

          <div className="*:w-full *:mb-5 *:pl-2">
            <input id="experience" className="bg-sky-900 rounded-sm h-9" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value})} placeholder="Raiding Experience" type="text" />
            <input id="availability" className="bg-sky-900 rounded-sm h-9" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value})} placeholder="Availability" type="text" />
            <input id="reasons" className="bg-sky-900 rounded-sm h-9" value={form.reasons} onChange={(e) => setForm({ ...form, reasons: e.target.value})} placeholder="Apply Reasons" type="text" />
            <input id="contact" className="bg-sky-900 rounded-sm h-9" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value})} placeholder="DISCORD / BATTLE NET / CONTACT INFO" type="text" />
          </div>

          <div>
            <button onClick={handleSubmit} type="submit" className="bg-blue-500 px-3 py-2 rounded-sm">ENVIAR</button>
          </div>

      </div>

    </div>
  );
};