import React, { useState } from 'react'
import './styles/login.css'
import image from '../images/backImg.jpg'
import MyTextInput from '../components/MyTextInput'
import BottomText from '../components/BottomText'
import axios from 'axios'
import jwt from 'jwt-decode'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function LogIn() {
    const w = window.innerWidth
    const h = window.innerHeight
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate()
    const handleTextInputs = (name, value) => {
        let updatedValue = { [name]: value };
        setUserInfo(userInfo => ({
            ...userInfo,
            ...updatedValue
        }));
    }

    const submitLogin = () => {
        axios.post('http://localhost:5000/auth/login', userInfo)
            .then(function (response) {

                console.log(jwt(response.data.token));

                Cookies.set("jwt_user", response.data.token, {
                    expires: new Date(jwt(response.data.token).exp * 1000)
                })

                navigate('../')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div id='main' style={{ backgroundImage: `url(${image})`, width: w, height: h }}>
            <div id='container'>
                <h3>Log In</h3>
                <MyTextInput placeholder={"E-mail"} name={'email'} onChange={handleTextInputs} />
                <MyTextInput placeholder={"Password"} name={'password'} onChange={handleTextInputs} />
                <button onClick={submitLogin}>Log In</button>
                <BottomText type={'login'} />
            </div>
        </div>
    )
}

export default LogIn