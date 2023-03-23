import React, { useState } from 'react'
import './styles/login.css'
import MyTextInput from '../components/MyTextInput'
import BottomText from '../components/BottomText'
function LogIn() {
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
                <h3>Log In</h3>
                <MyTextInput placeholder={"E-mail"} name={'email'} onChange={handleTextInputs} />
                <MyTextInput placeholder={"Password"} name={'password'} onChange={handleTextInputs} />
                <button>Log In</button>
                <BottomText type={'login'} />
            </div>
        </div>
    )
}

export default LogIn