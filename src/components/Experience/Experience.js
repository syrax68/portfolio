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
            <div>
                <div className="worked">
                    <h2>FULLSTACK DEVELOPER <span>@ Compagnie Optédif</span></h2>
                    <p className="description">
                        Redesign and development of new features of the Optédif.com site on NextJS, Express and MongoDB.
                    </p>
                </div>
                <CardExperience />
                {/* <div className="worked">
                    <h2>FRONT END DEVELOPER <span>@ FactoryOnline</span></h2>
                    <p className="description">
                        Integration of new templates
                    </p>
                    <p className="description">
                        Connecting APIs with the front office
                    </p>
                </div>
                <div className="worked">
                    <h2>FULLSTACK DEVELOPER <span>@ Blue Cactus Factory</span></h2>
                    <p className="description">
                        Web application development on Symfony 5 <br></br>
                        Analysis and design of the various projects
                    </p>
                </div>
                <div className="worked">
                    <h2>SYMFONY DEVELOPER <span>@ Fanampiana</span></h2>
                    <p className="description">
                        Maintenance of the Fanampiana.com site in order to optimize the site and improve its use as well as its ergonomics.
                    </p>
                </div>
                <div className="worked">
                    <h2>JUNIOR WEB DEVELOPER <span>@ Créa-tic|</span></h2>
                    <p className="description">
                        Realization of the e-commerce site e-tsenab.com using the Prestashop CMS (Version 1.7). Maintenance and improvement of the site according to the needs of the client.
                    </p>
                </div>
                <div className="worked">
                    <h2>WEB DEVELOPER <span>@ Softimad|</span></h2>
                    <p className="description">
                        Development of a web application. This application was developed using the Opencart CMS using the CodeIgniter framework which is based on the PHP language.
                    </p>
                </div> */}
            </div>
        </section>
    )
}