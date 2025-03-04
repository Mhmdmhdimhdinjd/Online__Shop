import { ShoppingCartOutlined as ShoppingCartOutlinedIcon } from '@mui/icons-material';
import { IconButton , Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ShoppingBasketIcon = () => {

    const navigate = useNavigate()

const itemsQuantitystate = useSelector((state) => state.cart.itemsQuantity)

    return (

        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="shopping Basket"
            sx={{ mr: 2, position: 'relative' }}
            onClick={() => navigate("/Online__Shop/Shoppingbasket")}
        >
            <ShoppingCartOutlinedIcon />
            {itemsQuantitystate !== 0 &&
                (<Typography sx={{ position: 'absolute', color: 'red', right: '0', bottom: '8px' }}>
                    {itemsQuantitystate}
                </Typography>
                )
            }
        </IconButton>

    )

}

export default ShoppingBasketIcon