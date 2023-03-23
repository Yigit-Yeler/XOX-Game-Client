import React from 'react'
import './styles/input.css'
function MyTextInput({ placeholder, onChange, name }) {
    return (
        <input placeholder={placeholder} onChange={(e) => onChange(name, e.target.value)} />
    )
}

export default MyTextInput