import React from "react";
import './Experience.style.scss';
import { AiFillExperiment } from "react-icons/ai";
import CardExperience from "./Card";

export const Experience = () => {
    return (
        <section className="about">
            <div>
                <h1 className="title">
                    <span className="icon"><AiFillExperiment /></span> 
                    Where I’ve Worked
                </h1>
            </div>
            <CardExperience />
        </section>
    )
}