import { Button, Container, Grid, ThemeProvider, createTheme, Box} from '@mui/material';
import Selectcomponentcontainer from '../../Components/Add product/selectcomponents/container';
import TextFieldcomponentcontainer from "../../Components/Add product/textFieldcomponents/container";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { setInformation } from '../../redux/reducers/Slice';
import AddProductHandler from '../../ReactQuery/AddProduct';
import NavBar from '../../Components/Navbar/Index';
import Footer from '../../Components/Footer';



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

    const dispatch = useDispatch()

    const schema = yup.object().shape({
        productName: yup.string().required('نام ضروری است').matches(/^[\u0600-\u06FF\s]+$/, 'فقط حروف فارسی مجاز است'),//روش اول 
        aboutProduct: yup.string().matches(/^[\u0600-\u06FF\s]+$/, { message: 'فقط حروف فارسی مجاز است', excludeEmptyString: true, }).required('نام خانوادگی ضروری است'),//روش دوم
        UnitOfSale: yup.object().required("استان را انتخاب کنید"),
        DeliveryMethod: yup.object().required("شهر را انتخاب کنید"),
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
                    reset()
                }
            }
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