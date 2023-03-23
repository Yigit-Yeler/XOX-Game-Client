import React from 'react'
import { Link } from 'react-router-dom'

function BottomText({ type }) {
    if (type == 'login') {
        return (
            <div>Don't you have an account? <Link to={'../register'} style={{ color: 'white' }}>Register Now!</Link></div>
        )
    }
    else if (type == 'register') {
        return (
            <div>You have already an account? <Link to={'../login'} style={{ color: 'white' }}>Login Now!</Link></div>
        )
    }

}

export default BottomText