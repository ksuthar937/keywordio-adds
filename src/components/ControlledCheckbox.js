import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox({ checked, handleChange }) {
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
