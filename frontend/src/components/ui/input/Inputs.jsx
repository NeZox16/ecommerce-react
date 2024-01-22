import React, { forwardRef } from "react";
import styles from "./Input.module.sass";

export function Input({
  placeholder = "",
  type = "text",
  autocomplete = "off",
  className = "",
  value = "",
  setValue = () => {},
}) {
  return (
    <input
      value={value}
      onChange={setValue}
      autoComplete={autocomplete}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
}

export const InputWithValidation = forwardRef(
  (
    {
      placeholder = "",
      type = "text",
      autocomplete = "off",
      className = "",
      error,
      helperText,
      ...register
    },
    ref
  ) => {
    return (
      <>
        <input
          ref={ref}
          autoComplete={autocomplete}
          className={`${className} ${error && styles.hasError}`}
          type={type}
          placeholder={placeholder}
          {...register}
        />
        {error && <p className={styles.errorText}>{helperText}</p>}
      </>
    );
  }
);
