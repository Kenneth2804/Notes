import React, {useRef} from "react";
import {FaBars} from "react-icons/fa"
import "../assets/css/navbar.css"

export const Navbar = () =>{
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("move_nav")
    }


    
    return (
        <div>
            <header>
                <nav ref={navRef}>
                    <a href="/home">HOME</a>
                    <a href="/foro">FORO</a>
                    <a href="/info">ABOUT US</a>
                    <button className="nava close" onClick={showNavbar}>X</button>
                </nav>
                    <button className="nava" onClick={showNavbar}>
                        <FaBars>asdasd</FaBars>
                    </button>
            </header>
        </div>
    )
}