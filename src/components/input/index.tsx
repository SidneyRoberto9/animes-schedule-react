import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";
import { inputObj } from "../../model/animes";

type InputProps = {
  name: string;
  label: string;
  type: string;
  values?: any;
};

export function Input(data: InputProps, { ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField, error } = useField(
    data.name
  );

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

      {data.type === "input" && (
        <input
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          {...rest}
        />
      )}

      {data.type === "select" && (
        <select
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          {...rest}
        >
          {data.values.map((value: inputObj) => (
            <option key={value.number} value={value.value}>
              {value.value}
            </option>
          ))}
        </select>
      )}

      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </>
  );
}
