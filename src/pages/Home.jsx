import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './home.css';

import base_url from '../urls';
import ApiLogout from '../api/apiLogout';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = async () => {

        try {

            const url = `${base_url}/api/logout`;
            const response = await ApiLogout.get(url);
            logout();
            navigate("/");

            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });

            console.log(response.message);

        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "colored",
                });
            }
        }

    };

    return (
    <div className='mainHome'>
        <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className='box'
                >
                    <div className="inputContainerOne">
                        <div className="label">
                            <Typography variant="h1" component="h2" className='heading'>
                                Home 
                            </Typography>
                        </div>

                    </div>

                    <div className="inputContainerLast">
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="primary" onClick={handleLogout}>
                                Log Out
                            </Button>
                        </Stack>
                    </div>
                </Box>

    </div>
)
}

export default Home;
