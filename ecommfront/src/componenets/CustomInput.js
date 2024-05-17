import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname,values,onChange,onBlur } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        value={values}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default CustomInput;