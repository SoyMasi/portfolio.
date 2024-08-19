import type { IconName } from '../components/iconskills/IconAll.astro';

// Definición del tipo Skill
type Skill = {
    title: string;
    icon: IconName;
};

// Definición y exportación del array de skills
export const skills: Skill[] = [
    {
        title: "Html",
        icon: "html",
    },
    {
        title: "Css",
        icon: "css",
    },
    {
        title: "JavaScript",
        icon: "javaScript",
    },
    {
        title: "TypeScript",
        icon: "typeScript",
    },
    {
        title: "Python",
        icon: "python",
    },
    {
        title: "C++",
        icon: "cplusplus"
    },
    {
        title: "React Js",
        icon: "react",
    },
    {
        title: "Node Js",
        icon: "nodejs",
    },
    {
        title: "Tailwindcss",
        icon: "tailwind",
    },
    {
        title: "Bootstrap",
        icon: "bootstrap",
    },
    {
        title: "Git",
        icon: "git",
    },
    {
        title: "Github",
        icon: "github",
    },
    {
        title: "Mongo Db",
        icon: "mongodb",
    },
    {
        title: "MySQL",
        icon: "mysql",
    },
    {
        title: "PHP",
        icon: "php",
    },
    {
        title: "Docker",
        icon: "docker",
    },
    {
        title: "Linux",
        icon: "linux",
    },
    {
        title: "Bash",
        icon: "bash",
    },
];