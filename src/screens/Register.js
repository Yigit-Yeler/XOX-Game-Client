import React from 'react'
import MyTextInput from '../components/MyTextInput'
import './styles/login.css'
function Register() {
    return (
        <div id='main'>
            <div id='container'>
                <h3>Register</h3>
                <MyTextInput placeholder={"User Name"} />
                <MyTextInput placeholder={"E-mail"} />
                <MyTextInput placeholder={"Password"} />
                <button>Register</button>
            </div>
        </div>
    )
}

export default Register