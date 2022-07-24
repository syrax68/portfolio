
export const allSkills = [
    { 
        icon: process.env.PUBLIC_URL + '/img/optedif.png', 
        label: "Compagnie Optédif",
        post: "FULLSTACK DEVELOPER",
        delay: "January 2021- Today",
        description: "Redesign and development of new features of the Optédif.com site on NextJS, Express and MongoDB."
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/factory.png', 
        label: "Factory-Online",
        post: "FULLSTACK DEVELOPER",
        delay: "January 2021- Today",
        description: "Redesign and development of new features of the Optédif.com site on NextJS, Express and MongoDB."
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/blue.png', 
        label: "Blue Cactus Factory",
        post: "FULLSTACK DEVELOPER",
        delay: "January 2021- Today",
        description: "Redesign and development of new features of the Optédif.com site on NextJS, Express and MongoDB."
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/fanampiana.svg', 
        label: "Fanampiana",
        post: "FULLSTACK DEVELOPER",
        delay: "January 2021- Today",
        description: "Redesign and development of new features of the Optédif.com site on NextJS, Express and MongoDB."
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/creatic.png', 
        label: "Créa-tic",
        post: "FULLSTACK DEVELOPER",
        delay: "January 2021- Today",
        description: "Redesign and development of new features of the Optédif.com site on NextJS, Express and MongoDB."
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/softimad.png', 
        label: "Softimad" 
    },
];
  
export const initialTabs = allSkills;

export function getNextIngredient(
    skills
){
const existing = new Set(skills);
    return allSkills.find((ingredient) => !existing.has(ingredient));
}
  