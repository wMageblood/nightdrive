import { useState } from "react";
import { InputFormArrow } from "../svg/InputFormArrow";
import { REALM_LIST } from "../../constants/wowConstants";

interface RealmFormProps {
  value: string,
  onChange: (value: string) => void,
}

export const RealmFormField = ({value, onChange}: RealmFormProps) => {

  const [realmSearch, setRealmSearch] = useState("")
  const [selectedRealm, setSelectedRealm] = useState("")
  const [visibility, setVisibility] = useState(false)

  const filteredRealms = REALM_LIST.filter((realm) => realm.toLowerCase().includes(realmSearch.toLowerCase()));

  return (
    <div onClick={() => setVisibility(!visibility)} className="relative w-1/2 mb-15 z-4">
      <InputFormArrow isOpen={visibility}/>
      <input id="realm" type="text" placeholder="Reino" value={realmSearch} onChange={(e) => { setRealmSearch(e.target.value); onChange(e.target.value)}} className="input-form-styling"/>
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