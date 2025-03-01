import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

const TextFieldcomponent = forwardRef(({ data, errors, ...props }, ref) => (
    <TextField
        {...props}
        ref={ref}
        placeholder={data.placeholder}
        variant="outlined"
        fullWidth
        error={!!errors[data.name]}
        helperText={errors[data.name]?.message}
    />
));

export default TextFieldcomponent;
