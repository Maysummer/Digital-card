import React from "react";
import twitter from '../assets/Twitter Icon.svg'
import fb from '../assets/Facebook Icon.svg'
import ig from '../assets/Instagram Icon.svg'
import github from '../assets/GitHub Icon.svg'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/__Maysummer__" target="_blank" rel="noreferrer">
                <img src={twitter} alt="" />
            </a>
            <a href="https://web.facebook.com/udojiken/" target="_blank" rel="noreferrer">
                <img src={fb} alt="" />
            </a>
            <a href="https://www.instagram.com/may_summer1/" target="_blank" rel="noreferrer">
                <img src={ig} alt="" />
            </a>
            <a href="https://github.com/Maysummer" target="_blank" rel="noreferrer">
                <img src={github} alt="" />
            </a>
        </div>
    )
}

export default Footer