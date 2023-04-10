import React from 'react'
import './styles/home.css'
import image from '../images/backImg.jpg'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
function Home() {
    const w = window.innerWidth
    const h = window.innerHeight
    console.log(jwtDecode(Cookies.get('jwt_user')))
    return (
        <div style={{ backgroundImage: `url(${image})`, width: w, height: h }}>
            {/* <img src='../images/backImg.jpg' width={'100%'} height={h} /> */}
            <nav style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button class="btn btn-outline-success" type="submit">Search</button>
                <button class="btn btn-outline-success" type="submit" style={{ fontWeight: '900', fontSize: 20 }}>Play Now</button>
                <button class="btn btn-outline-danger" type="submit">Log Out</button>
            </nav>
        </div>
    )
}

export default Home