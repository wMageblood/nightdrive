import { useState } from "react";
import { CLASS_NAMES } from "../../server/constants/classNames";
import { ROLE_NAMES } from "../../server/constants/roleNames";
import { REALM_LIST } from "../constants/realmList";

const initialState = {name: "", realm: "", main: "", alt: "", role: "", experience: "", availability: "", reasons: "", contact: ""};

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
      const res = await fetch("http://localhost:3001/apply", {
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

      <div className="mx-auto bg-black min-w-xl w-xl lg:w-3xl min-h-6xl h-6xl rounded-sm p-3">

        <div>
          <input id="name" className="bg-sky-900 rounded-sm h-9 w-full mb-5 pl-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value})} placeholder="Nombre o cómo deberíamos llamarte" type="text" />
          <select id="realm" className="bg-sky-900 text-gray-800 mb-5 pl-2 py-1 rounded-sm" value={form.realm} onChange={(e) => setForm({ ...form, realm: e.target.value})}>
            <option value="">Reino</option>
            {REALM_LIST.map((realm) => <option value={realm}>{realm}</option>)}
          </select>
        </div>

          <div className="flex justify-between *:mb-5 *:pl-2">

            <select id="main" className="bg-sky-900 text-gray-800 mb-5 pl-2 py-1 rounded-sm" value={form.main} onChange={(e) => setForm({ ...form, main: e.target.value })}>
                <option value="">Main Class</option>
                {CLASS_NAMES.map(({wowClass, value}) => <option key={value} value={value}>{wowClass}</option>)}
            </select>

            <select id="alt" className="bg-sky-900 text-gray-800 mb-5 pl-2 py-1 rounded-sm" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })}>
                <option value="">Alt Class</option>
                {CLASS_NAMES.map(({wowClass, value}) => <option key={value} value={value}>{wowClass}</option>)}
            </select>

            <select id="role" className="bg-sky-900 text-gray-800 mb-5 pl-2 py-1 rounded-sm" value={form.role} onChange={(e) => setForm({...form, role: e.target.value})}>
                <option value="">Role</option>
                {ROLE_NAMES.map(({role}) => <option key={role} value={role}>{role}</option>)}
            </select>
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