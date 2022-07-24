import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { star } from './star';

export const Particule = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={star} 
        />
    )
}