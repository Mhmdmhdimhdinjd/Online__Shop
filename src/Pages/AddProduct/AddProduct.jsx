import { Button, Container, ThemeProvider, createTheme, Box, Typography } from '@mui/material';
import Selectcomponentcontainer from '../../Components/AddProduct/SelectComponents/Container';
import TextFieldcomponentcontainer from "../../Components/AddProduct/textfieldcomponents/Container";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { setInformation } from '../../Redux/Reducers/AddProductReducer';
import AddProductHandler from '../../ReactQuery/AddProductHandler';
import NavBar from '../../Components/Navbar/Index';
import Footer from '../../Components/Footer'
import { useQueryClient } from 'react-query';
import toast from 'react-hot-toast';

const theme = createTheme({
    typography: {
        fontFamily: 'gandom',
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        fontFamily: 'gandom',
                        backgroundColor: 'white',
                        borderRadius: 'inherit'
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textAlign: 'right'
                },
            },
        }
    },
});


const AddProduct = () => {

    const QueryClient = useQueryClient()

    const dispatch = useDispatch()


    const schema = yup.object().shape({
        productName: yup.string().required('نام محصول را وارد کنید').matches(/^[\u0600-\u06FF\s]+$/, 'فقط حروف فارسی مجاز است'),//روش اول 
        aboutProduct: yup.string().matches(/^[\u0600-\u06FF\s]+$/, { message: 'فقط حروف فارسی مجاز است', excludeEmptyString: true, }).required('توضیحات محصول را وارد کنید'),//روش دوم
        UnitOfSale: yup.object().required("واحد محصول را انتخاب کنید"),
        DeliveryMethod: yup.object().required("روش ارسال را انتخاب کنید"),
    });

    const { handleSubmit, reset, control, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            DeliveryMethod: null,
            UnitOfSale: null,
            productName: '',
            aboutProduct: ''
        }
    })

    const { mutate, isLoading } = AddProductHandler()

    const onSubmit = data => {

        mutate(data, {
            onSuccess: (response) => {
                if (response.status === 201) {
                    dispatch(setInformation(data))
                    QueryClient.setQueryData('todos', (oldData) => {

                        if (!oldData || !oldData.pages) {
                            return {
                                pages: [
                                    [data]
                                ]
                            };
                        }

                        const lastPageIndex = oldData.pages.length - 1;
                        const lastPage = oldData.pages[lastPageIndex];
                        const maxItemsPerPage = 10;


                        if (lastPage.length >= maxItemsPerPage) {

                            return {
                                ...oldData,
                                pages: [
                                    ...oldData.pages,
                                    [data]
                                ]
                            };
                        } else {

                            return {
                                ...oldData,
                                pages: [
                                    ...oldData.pages.slice(0, lastPageIndex),
                                    [...lastPage, data]
                                ]
                            };
                        }
                    });
                    toast.success('محصول با موفقیت اضافه شد')
                    reset()
                }
            },
            onError: () => toast.error('مشکلی پیش امده . لطفا بعدا دوباره امتحان کنید')
        })
    };


    return (

        <ThemeProvider theme={theme}>

            <NavBar />

            <Container>

                <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

                    <TextFieldcomponentcontainer Controller={Controller} control={control} errors={errors} />
                    <Selectcomponentcontainer Controller={Controller} control={control} setValue={setValue} errors={errors} />


                    <Box sx={{ direction: 'ltr' }}>

                        <Button disabled={isLoading} sx={{ margin: '2rem 0' }} color="primary" size="large" variant="contained" type="submit">ثـــبت اطـــلاعات اولیه</Button>

                    </Box>

                </form>

            </Container>

            <Footer />

        </ThemeProvider>

    )

}

export default AddProduct