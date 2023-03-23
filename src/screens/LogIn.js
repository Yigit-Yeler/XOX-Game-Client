import React from 'react'
import './styles/login.css'
import MyTextInput from '../components/MyTextInput'
function LogIn() {
    return (
        <div id='main'>
            <div id='container'>
                <h3>Log In</h3>
                <MyTextInput placeholder={"E-mail"} />
                <MyTextInput placeholder={"Password"} />
                <button>Log In</button>
            </div>
        </div>
    )
}

export default LogIn