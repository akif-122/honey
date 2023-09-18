import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Button = ({ btnContent }) => {
    return (
        <>
            <Link className={btnContent.sm ? "m-btn b-sm c-btn" : "m-btn c-btn"} to={`/${btnContent.btnLink}`}>{btnContent.btnText}</Link>
        </>
    )
}

export default Button