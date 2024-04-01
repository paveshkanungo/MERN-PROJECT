import React, { Fragment, useState } from 'react';
import './Header.css';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Importing Dashboard icon
import PersonIcon from '@mui/icons-material/Person'; // Importing Person icon
import { Dashboard, ExitToApp } from '@mui/icons-material'; // Importing ExitToApp icon
import ListAllIcon from '@mui/icons-material/List'; // Importing ListAll icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/userAction';


const UserOptions = ( {user} ) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {cartItems} = useSelector((state) => state.cart);

    const [open, setOpen] = useState(false);

    const options = [
        {icon: <ListAllIcon />, name: "Orders", func: orders},
        {icon: <PersonIcon />, name: "Profile", func: account},
        {icon: <ShoppingCartIcon style={{color: cartItems.length > 0 ? "tomato" : "unset"}}/>, name: `Cart(${cartItems.length})`, func: cart},
        {icon: <ExitToApp />, name: "Logout", func: logoutUser}
    ];

    if(user.role === "admin"){
        options.unshift({
            icon: <DashboardIcon/>,
            name: "Dashboard",
            func: dashboard
        });
    }

    function dashboard() {
        navigate("/dashboard");
    }

    function orders() {
        navigate("/orders");
    }

    function account() {
        navigate("/account");
    }

    function cart() {
        navigate("/cart");
    }

    function logoutUser() {
        dispatch(logout());
        toast.success("Logout Successfully");
    }

  return (
    <Fragment>
        <Backdrop open={open} style={{zIndex: "10"}}/>
        <SpeedDial
            className='speedDial'
            ariaLabel='SpeedDial tooltip example'
            onClose={ () => setOpen(false)}
            onOpen={ () => setOpen(true)}
            open={open}
            style={{zIndex: "11"}}
            direction='down'
            icon={
                <img 
                    className='speedDialIcon'
                    src={user.avatar.url ? user.avatar.url : "/Profile.png"}
                    alt='Profile'
                />
            }
        >

            {options.map((item)=>(
                <SpeedDialAction 
                    key={item.name}
                    icon={item.icon} 
                    tooltipTitle={item.name} 
                    onClick={item.func}
                    tooltipOpen={window.innerWidth <= 600 ? true : false}
                />
            ))
            }

        </SpeedDial>
    </Fragment>
  )
}

export default UserOptions;