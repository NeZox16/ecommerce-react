import React from "react";

function Button({ className, type, onClick, children }) {
  return (
    <>
      <button className={className} onClick={onClick} type={type}>
        {children}
      </button>
    </>
  );
}

export default Button;
