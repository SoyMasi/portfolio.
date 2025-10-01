import type { IconName } from '../components/iconskills/IconAll.astro';

// Definición del tipo Skill
type Skill = {
    title: string;
    icon: IconName;
};

// Definición y exportación del array de skills
export const skills: Skill[] = [
    {
        title: "Python",
        icon: "python",
    },
    {
        title: "C++",
        icon: "cplusplus"
    },
    {
        title: "Bash",
        icon: "bash",
    },
    {
        title: "Linux",
        icon: "linux",
    },
    {
        title: "Docker",
        icon: "docker",
    },
    {
        title: "MySQL",
        icon: "mysql",
    },
    {
        title: "Mongo Db",
        icon: "mongodb",
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
        title: "Node Js",
        icon: "nodejs",
    },
    {
        title: "React Js",
        icon: "react",
    },
    {
        title: "Html",
        icon: "html",
    },
    {
        title: "Css",
        icon: "css",
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
        title: "PowerBI",
        icon: "powerbi",
    },
    {
        title: "Git",
        icon: "git",
    },
];