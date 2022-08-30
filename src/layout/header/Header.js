import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Header.style.scss';
import { BsInfoCircleFill } from 'react-icons/bs';
import { AiFillExperiment } from 'react-icons/ai';
import { MdOutlineWork, MdContactSupport } from 'react-icons/md';

const Header = () => {
    const [header, setHeader] = useState("header")
    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("header2")
        } 
    }
    
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <nav className={header}>
            <div>
                <h1>
                    <Link to="/" className="text-logo">SYRAX</Link>
                </h1>
            </div>
            <div className="left-menu">
                <Link to="/about"><span><BsInfoCircleFill /></span> About me</Link>
                <Link to="/experience"><span><AiFillExperiment /></span> Experience</Link>
                <Link to="/work"><span><MdOutlineWork /></span>Work</Link>
                <Link to="/contact"><span><MdContactSupport /></span>Contact</Link>
            </div>
        </nav>
    )
}

export default Header;