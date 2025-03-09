import React, { useEffect } from "react";
import Selectcomponent from "./index";
import { Grid } from "@mui/material";
import { useWatch } from "react-hook-form";

const UnitOfSale = [
    { value: 'pack', label: 'بسته' },
    { value: 'box', label: 'جعبه' },
];

const DeliveryMethod = {
    pack: [
        { value: 'payk', label: 'پیک' },
        { value: 'post', label: 'پست' },
    ],
    box: [
        { value: 'mashin', label: 'ماشین' },
        { value: 'post', label: 'پست' },
    ],
};

const Selectcomponentcontainer = ({ control, Controller, setValue, errors }) => {
    const selectedUnitOfSale = useWatch({
        control,
        name: 'UnitOfSale',
    });

    useEffect(() => {
        if (selectedUnitOfSale) {
            setValue('DeliveryMethod', null);
        }
    }, [selectedUnitOfSale, setValue]);

    const selectdata = [
        {
            id: 1,
            name: 'UnitOfSale',
            title: 'انتخاب واحد محصول',
            options: UnitOfSale,
            placeholder: 'لطفا واحد محصول را انتخاب کنید',
            isDisabled: false,
            isMulti: false,
            closeMenuOnSelect: true,
        },
        {
            id: 2,
            name: 'DeliveryMethod',
            title: 'انتخاب روش ارسال',
            options: selectedUnitOfSale ? DeliveryMethod[selectedUnitOfSale.value] : [],
            placeholder: "لطفا روش ارسال را انتخاب کنید",
            isDisabled: !selectedUnitOfSale,
            isMulti: false,
            closeMenuOnSelect: true,
        }
    ]

    return (
        <>
            {
                selectdata.map((data) => (
                    <Grid item xs={12} sm={6} key={data.id}>
                        <h3>{data.title}</h3>
                        <Controller
                            name={data.name}
                            control={control}
                            render={({ field }) => (
                                <Selectcomponent
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

export default Selectcomponentcontainer;
