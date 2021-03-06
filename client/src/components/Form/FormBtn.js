import React from "react";

export const FormBtn = props => (
  <button {...props} className="btn btn-primary">
    {props.children}
  </button>
);
