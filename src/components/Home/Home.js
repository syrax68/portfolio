import React from "react";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Experience } from "../Experience/Experience";
import { Project } from "../Project/Project";
import './Home.style.scss';

export const Home = () => {
    return (
        <>
            <section className="main">
                <div className="about-info">
                    <p>Hi, my name is</p>
                    <h1>RAKOTONARIVO Miandrisoa Sandratra</h1>
                    <h4>I'M A <span className="stack">MERN DEVELOPER</span> </h4>
                    <p>As a fullstack developer, i can build your website with React JS, Node Js, Symfony, Mysql or MongoDB.</p>
                </div>
            </section>
            <About />
            <Experience />
            <Project />
            <Contact />
        </>
    )
}