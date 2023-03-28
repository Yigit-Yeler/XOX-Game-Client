import React, { useState } from 'react'
import image from '../images/backImg.jpg'
import BottomText from '../components/BottomText'
import MyTextInput from '../components/MyTextInput'
import './styles/login.css'
import axios from 'axios'
import { useNavigate, useNavigation } from 'react-router-dom'
import jwt from 'jwt-decode'
import Cookies from 'js-cookie'
function Register() {
    const w = window.innerWidth
    const h = window.innerHeight
    const navigate = useNavigate()
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
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div id='main' style={{ backgroundImage: `url(${image})`, width: w, height: h }}>
            <div id='container' >
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