import React from "react";

export type InputProps = {
  label?: string;
  description?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
