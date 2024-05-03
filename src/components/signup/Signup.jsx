import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './signUp.css';


import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import base_url from '../../urls';


const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        try {

            const url = `${base_url}/api/signup`;
            const { data: res } = await axios.post(url, data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            toast.success(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
            console.log(res.message);

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
    }


    return (
        <div className='mainSignUp'>
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
                            SignUp
                        </Typography>
                    </div>

                </div>

                <div className="inputContainer">
                    <div className="label">
                        <InputLabel htmlFor="component-simple">First Name</InputLabel>
                    </div>
                    <div className='input'>
                        <TextField
                            required
                            className='textField'
                            id="firstName"
                            label="Required"
                            placeholder='Enter your first name'
                            type='text'
                            size='small'
                            value={firstName||""}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="inputContainer">
                    <div className="label">
                        <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                    </div>
                    <div className='input'>
                        <TextField
                            required
                            className='textField'
                            id="lastName"
                            label="Required"
                            placeholder='Enter your last name'
                            type='text'
                            size='small'
                            value={lastName||""}
                            onChange={(e) => setLastName(e.target.value)}

                        />
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
                            value={email||""}
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
                            value={password||""}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="inputContainer">
                    <div className="label">
                        <InputLabel htmlFor="component-simple">Confirm Password</InputLabel>
                    </div>
                    <div className='input'>
                        <TextField
                            required
                            className='textField'
                            id="confirmPassword"
                            label="Required"
                            placeholder='Confirm your password'
                            type='password'
                            size='small'
                            value={confirmPassword||""}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                        Already have an account? Please login.
                    </Typography>

                    <Stack direction="row" spacing={2} className='btn'>
                        <Link to="/login">
                            <Button variant="contained" color="success">
                                Login
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </Box>
        </div>
    )
}

export default Signup;
