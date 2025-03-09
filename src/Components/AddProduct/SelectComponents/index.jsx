import React, { forwardRef } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Typography } from '@mui/material';

const animatedComponents = makeAnimated();

const SelectComponent = forwardRef(({ errors, data, ...props }, ref) => {
    return (
        <>
            <Select
                ref={ref}
                value={data.value}
                options={data.options}
                placeholder={data.placeholder}
                components={animatedComponents}
                isDisabled={data.isDisabled}
                onChange={data.onChange}
                isMulti={data.isMulti}
                closeMenuOnSelect={data.closeMenuOnSelect}
                {...props}
            />

            {errors[data.name] && (
                <Typography color="error" fontSize="0.75rem">
                    {errors[data.name].message}
                </Typography>
            )}
        </>
    );
});

export default SelectComponent;
