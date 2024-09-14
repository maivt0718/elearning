import React from "react";

const InputCustom = ({
  label = "",
  id,
  placeholder,
  name,
  onChange,
  value,
  classWrapper="",
  onBlur,
  error,
  touched,
  type = "text",
  classNameInput="",
  classNameLabel=""
}) => {
  return (
    <>
      <div className={`${classWrapper}`}>
        {label ? (
          <label
            htmlFor={id}
            className={`block mb-2 text-sm font-medium text-gray-900 capitalize ${classNameLabel}`}
          >
            {label}
          </label>
        ) : null}
        <div className="w-full h-full">
        <input
          type={type}
          id={id}
          name={name}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 ${classNameInput}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {touched && error ? <p className="text-red-600">{error}</p> : null}</div>
      </div>
    </>
  );
};

export default InputCustom;
