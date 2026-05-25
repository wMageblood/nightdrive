import { useState } from "react";
import { CLASS_NAMES, ROLE_NAMES } from "../constants/wowIcons";
import { REALM_LIST } from "../constants/realmList";
import { InputFormArrow } from "./svg/InputFormArrow";
import { HelpIcon } from "./HelpIcon";

const initialState = {
  name: "",
  realm: "",
  main: "",
  alt: "",
  role: "",
  experience: "",
  availability: "",
  reasons: "",
  contact: "",
};

export const InputForm = () => {
  const [realmSearch, setRealmSearch] = useState("");

  const [selectedRealm, setSelectedRealm] = useState("");
  const [openRealms, setOpenRealms] = useState(false);

  const [selectedRole, setSelectedRole] = useState("");
  const [openRole, setOpenRole] = useState(false);

  const [selectedClass, setSelectedClass] = useState("");
  const [openSelectedClass, setOpenSelectedClass] = useState(false);

  const [selectedAltClass, setSelectedAltClass] = useState("");
  const [openAltClass, setOpenAltClass] = useState(false);

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

  const filteredRealms = REALM_LIST.filter((realm) =>
    realm.toLowerCase().includes(realmSearch.toLowerCase()),
  );

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

      const result = await res.json();

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
      setForm({ ...initialState });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="input-wrapper relative bg-inputFormBackground grid grid-cols-1 w-3/4 mx-auto py-8 px-4">
        <div className="flex">
          <div className="relative w-1/2 mb-15 mr-5">
            <input
              id="name"
              required={true}
              maxLength={50}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nombre de tu personaje"
              type="text"
              className="input-form-styling"
            />
            <HelpIcon
              zIndex="z-2"
              fieldDescription="Tiene que aparecer en la página de Raider.IO"
            />
          </div>
          <div
            onClick={() => setOpenRealms(!openRealms)}
            className="relative w-1/2 mb-15"
          >
            <InputFormArrow isOpen={openRealms} />
            <input
              id="realm"
              type="text"
              placeholder="Reino"
              value={realmSearch}
              onChange={(e) => {
                setRealmSearch(e.target.value);
                setForm({ ...form, realm: e.target.value });
              }}
              className="input-form-styling"
            />
            {openRealms && (
              <div className="input-form-dropdown-body shadow-3xl z-2">
                {filteredRealms.map((realm) => (
                  <div
                    key={realm}
                    onClick={() => {
                      setSelectedRealm(realm);
                      setRealmSearch(realm);
                      setForm({ ...form, realm });
                      setOpenRealms(false);
                    }}
                    className="input-form-dropdown"
                  >
                    {realm}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex">
          <div
            onClick={() => setOpenSelectedClass(!openSelectedClass)}
            className="relative w-1/2 mb-15 mr-5"
          >
            <button type="button" className="input-form-button">
              {form.main || "Clase Main"}
            </button>
            <InputFormArrow isOpen={openSelectedClass} />
            {openSelectedClass && (
              <div className="input-form-dropdown-body z-3">
                {CLASS_NAMES.map(({ wowClass, value, icon }) => (
                  <div
                    key={value}
                    onClick={() => {
                      setForm({ ...form, main: value });
                      setOpenSelectedClass(false);
                    }}
                    className="input-form-dropdown"
                  >
                    <img
                      width={23}
                      className="border border-black mr-2"
                      src={icon}
                    />{" "}
                    {wowClass}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            onClick={() => setOpenAltClass(!openAltClass)}
            className="relative w-1/2 mb-15"
          >
            <button type="button" className="input-form-button">
              {form.alt || "Clase Alt"}
            </button>
            <InputFormArrow isOpen={openAltClass} />
            {openAltClass && (
              <div className="input-form-dropdown-body z-2">
                {CLASS_NAMES.map(({ wowClass, value, icon }) => (
                  <div
                    key={value}
                    onClick={() => {
                      setForm({ ...form, alt: value });
                      setOpenAltClass(false);
                    }}
                    className="input-form-dropdown"
                  >
                    <img
                      width={23}
                      className="border border-black mr-2"
                      src={icon}
                    />{" "}
                    {wowClass}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex">
          <div className="relative w-1/2 mb-15 mr-5">
            <input
              id="availability"
              required={true}
              maxLength={150}
              value={form.availability}
              onChange={(e) =>
                setForm({ ...form, availability: e.target.value })
              }
              placeholder="Disponibilidad"
              type="text"
              className="input-form-styling"
            />
            <HelpIcon
              zIndex="z-1"
              fieldDescription={
                <>
                  Ragnaros opera en la zona horaria CDT. <br />
                  Ejemplo: <br />
                  • Horario: 8PM ST (server time) a 11PM ST. <br />• Días:
                  Lunes, Martes, Miércoles, Jueves, Viernes y Domingo.
                </>
              }
            />
          </div>

          <div className="relative w-1/2 mb-15">
            <input
              id="experience"
              required={true}
              maxLength={250}
              placeholder="Experiencia previa"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              type="text"
              className="input-form-styling"
            />
            <HelpIcon
              fieldDescription={
                <>
                  Ejemplo: <br />
                  • Raideo desde Hellfire Citadel <br />
                  • Jugué DPS en una raid, healer en otra y <br />
                  tank en la última, pero mi main rol es: (rol). <br />
                  • Estuve Poptar Corndog con Dratnos. <br />
                  • 9/9M Tier-1 Midnight. <br />
                  • 6/9M Manaforge Omega. <br />
                </>
              }
            />
          </div>
        </div>

        <div className="flex">
          <div className="relative w-1/2 mb-15 mr-5">
            <input
              id="reasons"
              required={true}
              maxLength={350}
              placeholder="Razones para aplicar"
              value={form.reasons}
              onChange={(e) => setForm({ ...form, reasons: e.target.value })}
              type="text"
              className="input-form-styling"
            />
            <HelpIcon
              zIndex="z-1"
              fieldDescription={
                <>
                  Razones válidas: <br />
                  • Jugar con el gordinflón (Kayn). <br />
                  • Raidear más que cualquier otra guild en el universo. <br />
                  • Aprender a hablar Murloc (chileno). <br />
                  Razones <span className="underline text-red-600">
                    NO
                  </span>{" "}
                  válidas: <br />• Jugar con los mejores players de LATAM
                  (GrisKayn) <span className="line-through">mentira</span>.{" "}
                  <br />
                  • Hacer buen oro después del progress. <br />• Terminar el
                  tier rápido para raidear menos{" "}
                  <span className="line-through">xd</span>. <br />
                </>
              }
            />
          </div>

          <div className="relative w-1/2 mb-15">
            <input
              id="contact"
              required={true}
              maxLength={100}
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              placeholder="Información de contacto"
              type="text"
              className="input-form-styling"
            />
            <HelpIcon
              fieldDescription={
                <>
                  {" "}
                  Ejemplo: <br />• discord1022 <br />• battlenet#1700 <br />•
                  myspace.com/emoRockero <br />
                </>
              }
            />
          </div>
        </div>

        <div className="flex">
          <div
            onClick={() => setOpenRole(!openRole)}
            className="relative w-1/2 mb-15 mr-5"
          >
            <button type="button" className="input-form-button">
              {form.role || "Rol"}
            </button>
            <InputFormArrow isOpen={openRole} />
            {openRole && (
              <div className="input-form-dropdown-body">
                {ROLE_NAMES.map(({ value, icon }) => (
                  <div
                    key={value}
                    onClick={() => {
                      setForm({ ...form, role: value });
                      setOpenRole(false);
                    }}
                    className="input-form-dropdown"
                  >
                    <img width={23} className="mr-2" src={icon} /> {value}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            disabled={loading}
            onClick={handleSubmit}
            type="submit"
            className={`${loading ? "saturate-5" : null} w-1/2 bg-highlightColor3 hover:bg-highlightColor3/50 rounded-full h-10  font-bold tracking-tighter shadow-3xl active:shadow-3xl-inset`}
          >
            {loading ? "Enviando..." : "ENVIAR"}
          </button>
        </div>

        {error && (
          <div className="flex items-center justify-center bg-red-accent-400 rounded-sm h-12 px-2 font-Roboto font-bold mx-auto">
            <span className="tracking-tighter px-2 text-red-accent-800">
              Error en tu apply, asegurate de poner un personaje válido o de
              llenar todos los campos.
            </span>
          </div>
        )}
        {success && (
          <div className="flex items-center justify-center bg-cyan-accent-400 rounded-sm h-12 px-2 font-Roboto font-bold mx-auto">
            <span className="tracking-tighter px-2 text-cyan-accent-800">
              Tu apply fue enviado.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
