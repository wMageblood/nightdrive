import { useEffect, useRef, useState } from "react";
import { REALM_LIST } from "../../constants/wowConstants";
import { ChevronDownCircle } from "lucide-react";


interface RealmFormProps {
  label: string,
  value: string,
  placeholder: string,
  onChange: (value: string) => void,
}

export const RealmFormField = ({value, onChange, label, placeholder}: RealmFormProps) => {

  const [realmSearch, setRealmSearch] = useState("")
  const [selectedRealm, setSelectedRealm] = useState("")
  const [visibility, setVisibility] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredRealms = REALM_LIST.filter((realm) => realm.toLowerCase().includes(realmSearch.toLowerCase()));

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setVisibility(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div ref={wrapperRef} className="relative">
      <p className='block text-slate-600 uppercase font-bold text-xs mb-2'>{label}</p>
      <ChevronDownCircle className={`text-[#a04aff] absolute right-2 bottom-3 transition-transform duration-200 ${visibility ? 'rotate-90' : null}`} />
      <input id="realm" type="text" placeholder={placeholder} value={realmSearch} onFocus={() => setVisibility(true)} onChange={(e) => { setRealmSearch(e.target.value); onChange(e.target.value)}}
        className="input-form-realm-styling"
      />
        {visibility && (
          <div className="input-form-dropdown-body shadow-3xl z-2">
            {filteredRealms.map((realm) => (
              <div key={realm} onClick={() => {setSelectedRealm(realm); setRealmSearch(realm); onChange(realm); setVisibility(false);}} className="input-form-dropdown">
                {realm}
              </div>
            ))}
          </div>
        )}
    </div>
    )
  };