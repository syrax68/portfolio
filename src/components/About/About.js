import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaReact, FaHtml5, FaNodeJs, FaSymfony, FaPhp } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiMongodb, SiTypescript } from "react-icons/si";
import './About.style.scss';

export const About = () => {
    return (
        <section className="about">
            <div>
                <h1 className="title">
                    <span className="icon"><BsInfoCircleFill /></span> 
                    About me
                </h1>
            </div>
            <div className="bloc-info">
                <div className="description">
                    <p>
                        Hello my name is Sandratra and i like spending my time on the computer. After my studies at 
                        <a className="link" href="http://ispm-edu.com/" target="_blank" rel="noreferrer"> ISPM</a>, I started working as a <span className="stack">freelance web developer</span>. Currently I have <span className="blue">4 years</span> of experience in the field.
                    </p>
                </div>
                <div className="bloc-image">
                    <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="profile"/>
                </div>
            </div>
            <div className="skills">
                <p>
                    {'>'} Here are a few technologies I’ve been working with recently
                </p>
                <div>
                    <ul className="list-skill">
                        <li><FaHtml5 /><span>HTML</span></li>
                        <li><TbBrandJavascript /><span>Javascript</span></li>
                        <li><SiTypescript /><span>TypeScript</span></li>
                        <li><FaReact /><span>React</span></li>
                        <li><FaNodeJs /><span>NodeJs</span></li>
                        <li><GrGraphQl /><span>GraphQl</span></li>
                        <li><FaSymfony /><span>Symfony</span></li>
                        <li><FaPhp /><span>PHP</span></li>
                        <li><SiMongodb /><span>MongoDB</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}