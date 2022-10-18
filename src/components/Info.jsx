import React from "react";
import email from "../assets/Mail.svg"
import linkedin from "../assets/linkedin.svg"
import '../styles/Info.css'

function Info() {
    return (
        <div>
            <p className="nmesoma">Nmesoma Udojike</p>
            <p className="frontend">Frontend Developer</p>
            <p className="website">maysummer.tech</p>
            <div className="info-dets">
                <a href="mailto: udojike.nmesoma@gmail.com">
                    <div className=" contact email">
                        <img src={email} alt="" />
                        <p>Email</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/udojike-nmesoma/" target="_blank" rel="noreferrer">
                    <div className="contact linkedin">
                        <img src={linkedin} alt="" />
                        <p>LinkedIn</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Info