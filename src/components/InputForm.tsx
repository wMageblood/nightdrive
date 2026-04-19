import { useState } from "react";


type InputFormProps = Partial<{
  type: string;
  id: string;
  required: boolean;
  className: string;
}>

export const InputForm = ({type, id, required, className}: InputFormProps) => {

  // const webhook = process.env.DISCORD_WEBHOOK;

  const [formData, setFormData] = useState({
    main: "",
    alt: "",
    experience: "",
    availability: "",
    reasons: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClick = () => {
    console.log(formData);
    setFormData({ main: "", alt: "", experience: "", availability: "", reasons: "", contact: "",})

  }

  return (
    <div>

      <div className="mx-auto bg-black min-w-xl w-xl lg:w-3xl min-h-6xl h-6xl rounded-sm p-3">

          <div className="flex justify-between *:mb-5 *:pl-2">
            <input id="main" className="bg-sky-900 rounded-sm h-9" value={formData.main} onChange={handleChange} placeholder="Main Class" type="text" />
            <input id="alt" className="bg-sky-900 rounded-sm h-9" value={formData.alt} onChange={handleChange} type="text" placeholder="Alt Class" />
          </div>

          <div className="*:w-full *:mb-5 *:pl-2">
            <input id="experience" className="bg-sky-900 rounded-sm h-9" value={formData.experience} onChange={handleChange} placeholder="Raiding Experience" type="text" />
            <input id="availability" className="bg-sky-900 rounded-sm h-9" value={formData.availability} onChange={handleChange} placeholder="Availability" type="text" />
            <input id="reasons" className="bg-sky-900 rounded-sm h-9" value={formData.reasons} onChange={handleChange} placeholder="Apply Reasons" type="text" />
            <input id="contact" className="bg-sky-900 rounded-sm h-9" value={formData.contact} onChange={handleChange} placeholder="DISCORD / BATTLE NET / CONTACT INFO" type="text" />
          </div>

          <div>
            <button onClick={handleClick} type="submit" className="bg-blue-500 px-3 py-2 rounded-sm">ENVIAR</button>
          </div>

      </div>

    </div>
  );
};