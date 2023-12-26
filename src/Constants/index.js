import css from "../Assests/css.png";
import tailwind from "../Assests/tailwind.png"
import html from "../Assests/html.png"
import nodejs from "../Assests/nodejs.png"
import reactjs from "../Assests/reactjs.png"
import mongodb from "../Assests/mongodb.png"
import javascript from "../Assests/javascript.png"
import web from "../Assests/web.png"
import ux from "../Assests/ux.png"
import reacr from "../Assests/reacr.png"
import git from "../Assests/git.png"
import pro1 from "../Assests/pro1.png"
import pro2 from "../Assests/pro2.png"
import pro3 from "../Assests/pro3.png"
import vite from "../Assests/vite.png"

const services =[
    {
        title : "Web Developer",
        icon : web,
    },
    {
        title : "React Developer",
        icon : reacr,
    },
    {
        title : "UI/UX Designer",
        icon : ux,
    },
];

const technologies = [
    {
        name : "HTML 5",
        icon : html,
    },
    {
        name : "CSS 3",
        icon : css,
    },
    {
        name : "JavaScript",
        icon : javascript,
    },
    {
        name : "VITE",
        icon : vite,
    },
    {
        name : "React JS",
        icon : reactjs,
    },
    {
        name : "Tailwind",
        icon : tailwind,
    },
    {
        name : "Node JS",
        icon : nodejs,
    },
    {
        name : "MongoDB",
        icon : mongodb,
    },
    {
        name : "git",
        icon : git,
    },

];

const projects = [
    {
        name : "Tic Tac Toe",
        description : 
            "The game allows two players to take turns marking 'X' and 'O' on a 3x3 grid until a player wins and then reset the game ",
        tags : [
            {
                name : "JavaScript",
                color : "blue-text-gradient",
            },
            {
                name : "React + Vite",
                color : "green-text-gradient",
            },
            {
                name : "daisyui",
                color : "pink-text-gradient",
            },
        ],
        image : pro1,
        sourse_code_link : "https://github.com/manish25Coder/TIC_TAC_TOE-react",
        sourse_deploy_link : "https://tictactoe-vite.netlify.app/"
    },
    {
        name : "Pokedex",
        description : 
            "Pokedex are created by React framework using pokedex API.Were you can see the all types of pokemons and by clicking one of them you can se the details of that pokemon",
        tags : [
            {
                name : "JavaScript",
                color : "blue-text-gradient",
            },
            {
                name : "React + Vite",
                color : "green-text-gradient",
            },
            {
                name : "daisyui",
                color : "pink-text-gradient",
            },
        ],
        image : pro2,
        sourse_code_link : "https://github.com/manish25Coder/pokeDex",
        sourse_deploy_link : "https://pokedexapi1.netlify.app"
    },
    {
        name : "LMS",
        description : 
            "An LMS (Learning Management System) project typically involves the development and implementation of application or platform designed to facilitate the administration, delivery, tracking, and management of educational courses, training programs, or learning content",
        tags : [
            {
                name : "JavaScript",
                color : "blue-text-gradient",
            },
            {
                name : "React + Vite",
                color : "green-text-gradient",
            },
            {
                name : "daisyui & TailwindCss",
                color : "pink-text-gradient",
            },
        ],
        image : pro3,
        sourse_code_link : "https://github.com/manish25Coder/LMS_frontend",
        sourse_deploy_link : "https://tictactoe-vite.netlify.app/"
    },
];

export { services, technologies, projects};
