"use client";

// import "./input.css"
import { useState } from "react";

// Props called: Label - kommer udefra
// props with "" can be overwritten
export default function Input({
  label,
  type,
  name,
  placeholder = "",
  value = "",
  statusMessage = "",
}) {
  // skal bruge useState til valuen, da den er = "" hvor den ikke kan rettes, med mindre det er usestate og CSR
  const [valueState, setValueState] = useState(value);

  return (
    <label className="block my-6 relative">
      <input
        className={`py-2 pl-2 rounded-sm w-full peer ${
          statusMessage ? "outline outline-red-500 outline-2" : null
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={valueState}
        onChange={(event) => {
          setValueState(event.target.value);
        }}
        autoFocus={statusMessage ? true : false}
      />
      <span className="absolute top-2 left-2 text-black peer-focus:text-white peer-focus:-top-6 peer-focus:text-sm [transition:all_300ms_ease-in-out] peer-[:not([value=''])]:-top-6 peer-[:not([value=''])]:text-sm peer-[:not([value=''])]:text-white">
        {label}
      </span>
      <span className="block text-red-500 text-xs">{statusMessage}</span>
    </label>
  );
}
