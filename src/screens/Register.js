import React, { useState } from 'react'
import BottomText from '../components/BottomText'
import MyTextInput from '../components/MyTextInput'
import './styles/login.css'
import axios from 'axios'
function Register() {
    const [userInfo, setUserInfo] = useState({})

    const handleTextInputs = (name, value) => {
        let updatedValue = { [name]: value };
        setUserInfo(userInfo => ({
            ...userInfo,
            ...updatedValue
        }));
    }

    const submitRegister = () => {
        axios.post('http://localhost:5000/auth/register', userInfo)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div id='main'>
            <div id='container'>
                <h3>Register</h3>
                <MyTextInput placeholder={"User Name"} name={'username'} onChange={handleTextInputs} />
                <MyTextInput placeholder={"E-mail"} name={'email'} onChange={handleTextInputs} />
                <MyTextInput placeholder={"Password"} name={'password'} onChange={handleTextInputs} />
                <button onClick={submitRegister}>Register</button>
                <BottomText type={'register'} />
            </div>
        </div>
    )
}

export default Register