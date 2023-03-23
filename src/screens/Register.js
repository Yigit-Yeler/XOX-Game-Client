import React, { useState } from 'react'
import BottomText from '../components/BottomText'
import MyTextInput from '../components/MyTextInput'
import './styles/login.css'
function Register() {
    const [userInfo, setUserInfo] = useState({})

    const handleTextInputs = (name, value) => {
        let updatedValue = { [name]: value };
        setUserInfo(userInfo => ({
            ...userInfo,
            ...updatedValue
        }));
    }

    return (
        <div id='main'>
            <div id='container'>
                <h3>Register</h3>
                <MyTextInput placeholder={"User Name"} name={'username'} onChange={handleTextInputs} />
                <MyTextInput placeholder={"E-mail"} name={'email'} onChange={handleTextInputs} />
                <MyTextInput placeholder={"Password"} name={'password'} onChange={handleTextInputs} />
                <MyTextInput placeholder={"Password Again"} name={'repassword'} onChange={handleTextInputs} />
                <button>Register</button>
                <BottomText type={'register'} />
            </div>
        </div>
    )
}

export default Register