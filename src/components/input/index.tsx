import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

type InputProps = {
  name: string;
  label: string;
};

export function Input(data: InputProps, { ...rest }) {
  const inputRef = useRef(null);

  const {
    fieldName,
    defaultValue = "",
    registerField,
    error,
  } = useField(data.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <>
      {data.label && <label htmlFor={fieldName}>{data.label}</label>}

      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </>
  );
}
