import React from "react";
import TextFieldcomponent from ".";
import { Grid } from "@mui/material";

const TextFielddata = [
    {
        id: 1,
        title: 'نام محصول',
        name: 'productName',
        placeholder: 'نام خود را وارد کنید',
        defaultValue:''
    },
    {
        id: 2,
        title: 'درباره محصول',
        name: 'aboutProduct',
        placeholder: 'نام خانوادکی خود را وارد کنید',
        defaultValue:''
    },
]

const TextFieldcomponentcontainer = ({ Controller, control, errors }) => {


    return (
        <>

            {
                TextFielddata.map((data) => (
                    <Grid item xs={12} sm={6} key={data.id} >
                        <h3>{data.title}</h3>
                        <Controller
                            name={data.name}
                            control={control}
                            defaultValue={data.defaultValue}
                            render={({ field }) => (
                                <TextFieldcomponent
                                    {...field}
                                    errors={errors}
                                    data={data}
                                />
                            )}
                        />
                    </Grid>
                ))
            }

        </>
    )
}


export default TextFieldcomponentcontainer