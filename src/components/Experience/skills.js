
export const allSkills = [
    { 
        icon: process.env.PUBLIC_URL + '/img/optedif.png', 
        label: "Compagnie Optédif",
        post: "FULLSTACK DEVELOPER",
        delay: "January 2021 - Today",
        descriptions: [
            "Redesign and development of new features of the Optédif.com site on NextJS, Express and MongoDB."
        ]
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/factory.png', 
        label: "Factory-Online",
        post: "FRONT END DEVELOPER",
        delay: "March 2022 - June 2022",
        descriptions: [
            "Integration of new templates",
            "Connecting APIs with the front office."
        ]
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/blue.png', 
        label: "Blue Cactus Factory",
        post: "FULLSTACK DEVELOPER",
        delay: "January 2021 - November 2021",
        descriptions: [
            "Web application development on Symfony 5",
            "Analysis and design of the various projects"
        ]
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/fanampiana.svg', 
        label: "Fanampiana",
        post: "SYMFONY DEVELOPER",
        delay: "March 2020 - January 2021",
        descriptions: [
            "Maintenance of the Fanampiana.com site in order to optimize the site and improve its use as well as its ergonomics."
        ]
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/creatic.png', 
        label: "Créa-tic",
        post: "JUNIOR WEB DEVELOPER",
        delay: "June 2020 - September 2020",
        descriptions: [
            "Realization of the e-commerce site e-tsenab.com using the Prestashop CMS (Version 1.7).",
            "Maintenance and improvement of the site according to the needs of the client."
        ]
    },
    { 
        icon: process.env.PUBLIC_URL + '/img/softimad.png', 
        label: "Softimad",
        post: "WEB DEVELOPER",
        delay: "November 2018 - February 2019",
        descriptions: [
            "Development of a web application. This application was developed using the Opencart CMS using the CodeIgniter framework which is based on the PHP language."
        ]
    },
];
  
export const initialTabs = allSkills;

export function getNextIngredient(
    skills
){
const existing = new Set(skills);
    return allSkills.find((ingredient) => !existing.has(ingredient));
}
  