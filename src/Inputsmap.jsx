import React from "react";
import Input from "./Input";
import Inputs from "./Inputs";
function Inputsmap({ handleChange }) {
  return Inputs.map((item) => (
    <Input
      key={item.id}
      name={item.name}
      type={item.type}
      text={item.text}
      placeholder={item.placeholder}
      onChange={handleChange}
    />
  ));
}
export default Inputsmap;
