import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './login.css';

import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import base_url from '../../urls';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =  async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }
        try {

            const url = `${base_url}/api/login`;
            const response = await axios.post(url, data, { withCredentials: true });
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });

            const receivedToken = response.data.token;
            const userId = response.data.userId;

            // Storing the token in localStorage
            login(receivedToken,userId);
            navigate('/home');
            console.log(response.message);

        }catch (error) {
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

    }

    return (
        <div>
            <div className='mainLogIn'>
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
                                Login
                            </Typography>
                        </div>

                    </div>


                    <div className="inputContainer">
                        <div className="label">
                            <InputLabel htmlFor="component-simple">Email</InputLabel>
                        </div>
                        <div className='input'>
                            <TextField
                                required
                                className='textField'
                                id="email"
                                label="Required"
                                placeholder='Enter your email'
                                type='email'
                                size='small'
                                value={email || ""}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="inputContainer">
                        <div className="label">
                            <InputLabel htmlFor="component-simple">Password</InputLabel>
                        </div>
                        <div className='input'>
                            <TextField
                                required
                                className='textField'
                                id="password"
                                label="Required"
                                placeholder='Enter your password'
                                type='password'
                                size='small'
                                value={password || ""}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="inputContainerLast">
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Stack>
                    </div>

                    <div className="inputContainerLog">
                        <Typography variant="h1" component="h3" className='para'>
                            Don't have an account? Please Signup.
                        </Typography>

                        <Stack direction="row" spacing={2} className='btn'>
                            <Link to="/signup">
                                <Button variant="contained" color="success">
                                    Signup
                                </Button>
                            </Link>
                        </Stack>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Login;
