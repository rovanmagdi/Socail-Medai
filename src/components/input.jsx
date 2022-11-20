import React from "react";
import { StyledInputBase } from "../styled/Input";

const InputComponent = (
 { placeholder,
  type,
  name,
  id,
  onChange,
  value,
  onBlur}
) => {
  return (
    <>
      <StyledInputBase
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </>
  );
};

export default InputComponent;
