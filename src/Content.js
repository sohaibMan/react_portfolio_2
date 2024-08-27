// import images
import Hero_person from "./assets/images/Hero/person.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import mysql from "./assets/images/Skills/mysql.png";
import cpp from "./assets/images/Skills/cpp.png";
import rust from "./assets/images/Skills/rust.png";
import linux from "./assets/images/Skills/linux.png";
import git from "./assets/images/Skills/git.png";
import datastructure from "./assets/images/Skills/datastructure.png";
import java from "./assets/images/Skills/java.png";
import uml from "./assets/images/Skills/uml.png";
import typescript from "./assets/images/Skills/typescript.png";
import teamwork from "./assets/images/Skills/teamwork.png";
import python from "./assets/images/Skills/python.png";
import spring from "./assets/images/Skills/spring.png";
import azure from "./assets/images/Skills/azure.png";
import oci from "./assets/images/Skills/azure.png";
import docker from "./assets/images/Skills/docker.png";
import redis from "./assets/images/Skills/redis.png";
import oracle from "./assets/images/Skills/oracle.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import cert1 from "./assets/images/Certifications/cert1.png";
import cert2 from "./assets/images/Certifications/cert2.png";
import cert5 from "./assets/images/Certifications/cert5.png";
import cert6 from "./assets/images/Certifications/cert6.png";
import cert7 from "./assets/images/Certifications/cert7.png";
import cert8 from "./assets/images/Certifications/cert8.jpeg";

import bricoll from "./assets/images/Projects/bricoll.webp";
import aman from "./assets/images/Projects/aman.png";



import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

import hireme_person from "./assets/images/Hireme/person.png";


import {GrMail} from "react-icons/gr";
import {GiSkills} from "react-icons/gi";
import {MdOutlinePermContactCalendar} from "react-icons/md";
import {TbCertificate, TbSmartHome} from "react-icons/tb";
import {BiUser} from "react-icons/bi";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {SiUpwork} from "react-icons/si";
import {TbBrandFiverr} from "react-icons/tb";
import {RiProjectorLine, RiServiceLine} from "react-icons/ri";

const Nav = [{
    link: "#home", icon: TbSmartHome,
}, {
    link: "#aboutme", icon: BiUser,
}, {
    link: "#skills", icon: GiSkills,
}, {
    link: "#certifications", icon: TbCertificate,
}, {
    link: "#services", icon: RiServiceLine,
}, {
    link: "#projects", icon: RiProjectorLine,
}, {
    link: "#contact", icon: MdOutlinePermContactCalendar,
},];

const social_media = [{
    text: "souhaibemanah@gmail.com", icon: GrMail, link: "mailto:souhaibemanah@gmail.com",
}, {
    text: "sohaib manah", icon: AiFillLinkedin, link: "https://www.linkedin.com/in/sohaibmanah/",
}, {
    text: "sohaibMan", icon: AiFillGithub, link: "https://github.com/sohaibMan",
}, {
    text: "sohaib M", icon: SiUpwork, link: "https://www.upwork.com/freelancers/~010a44723a9108a1bc",
}, {
    text: "sohaibesohaib", icon: TbBrandFiverr, link: "https://www.fiverr.com/sohaibesohaib",
},];
const cert_content = [{
    title: "Oracle Cloud Infrastructure 2024 Certified Developer Professional",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A6899DA6F34ED5EF28441C50C3ADC540C22A5FE8B04C00DFBFD7A2327CAA8342",
    image: "https://brm-workforce.oracle.com/pdf/certview/images/OCID2024CP.png",
},
{
    title: "Oracle Certified Professional, Java SE 8 Programmer",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CAC10CA6FEB07F7594AAA16490FF85E72A3996ED5907FDD76F786193B1AD4C23",
    image: "https://brm-workforce.oracle.com/pdf/certview/images/OCPJSE8.png",
},{
    title: "Oracle Cloud Infrastructure 2024 Certified DevOps Professional",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A88816F811CBECC96C98A98849FA24F215297A68B605E3052BFBAE19B20280FF",
    image:  "https://brm-workforce.oracle.com/pdf/certview/images/OCI2024DOPOCP.png",
},{
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=611586DC56727A99CFD820F677EED9809570F3AC73E3AE5C39D549FD7EFCE3C2",
    image: "https://brm-workforce.oracle.com/pdf/certview/images/OCAJSE8.png",
},{
    title: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FE72ADBA433C5AB9A3F8BC8FA86259C5F51A804ECF6B37724495FB75E6DD7970",
    image: "https://brm-workforce.oracle.com/pdf/certview/images/OCI24AICFA.png",
},{
    title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A88816F811CBECC96C98A98849FA24F2E5B9D63975CCB1088E7C3D9D63F230F4",
    image: "https://brm-workforce.oracle.com/pdf/certview/images/OCI2024FNDCFA.png",
},{
    title: "MongoDB Associate Developer",
    link: "https://brm-workforce.oracle.com/pdf/certview/images/OCI24AICFA.png",
    image: cert1,
}, {
    title: "Agile Project Management", link: 'https://coursera.org/share/a92c70e92b02890f7d7a5ab3deb418ab', image: cert8
}, {
    title: "MongoDB Data Modeling", image: cert2, link: "https://learn.mongodb.com/c/lkxA2J6RTE2Ash0IL--EtA",
}, {
    title: "Postman API Fundamentals Student Expert",
    link: "https://badgr.com/public/assertions/JKnbd3dAQwCPpg3dxr1n_A?identity__email=sohaib.manah@etu.uae.ac.ma",
    image: cert5,
}, {
    title: "SQL (Advanced)", link: "https://www.hackerrank.com/certificates/3a683fbab8d4", image: cert6,
}, {
    title: "MongoDB Python Developer Path",
    link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/a96c73c5-e997-5d54-80a0-54f8afa0e457-sohaib-manah-0239280c-b43a-45ac-a4b7-a55c4db1b568-certificate.pdf",
    image: cert7,
},];

export const content = {
    en: {
        Nav, hero: {
            title: "(DevOps + OCI) Professional",
            firstName: "SOHAIB",
            LastName: "MANAH",
            // btnText: "View my resume",
            // btnLink: "https://www.canva.com/design/DAFltazUEpM/1HUGhv9zLupr7TU3NbZ68w/view",
            image: Hero_person,
            hero_content: [{
                count: `+${new Date(new Date() - new Date("2022-01-01")).getFullYear() - 1970}`,
                text: "Years of Experience in Web development And  Cloud ",
            }, {
                count: "10+", text: "Projects Worked in my career",
            },],
        }, skills: {
            title: "Skills", subtitle: "MY TOP SKILLS", skills_content: [{
                name: "Rust", para: "with microservices architecture and grpc and actix-web", logo: rust,
            }, {
                name: "c | c++", para: "university projects | data structures & algorithms | OOP", logo: cpp,
            }, {
                name: "Java", para: "Swing (Desktop Graphical User Interface)", logo: java,
            }, {
                name: "TypeScript | JavaScript", para: "with React & Next js & Node js", logo: typescript,
            }, {
                name: "Python", para: "in Graph theory", logo: python,
            }, {
                name: "Node js | Express.js ", para: "with  Rest Api |  GraphQL | Grpc", logo: nodejs,
            }, {
                name: "Data Structure | Problem Solving | Graph Theory",
                para: "in c & c++ & java & javascript",
                logo: datastructure,
            }, {
                name: "Spring",
                para: "J2EE , spring boot, spring security , spring data , spring cloud, eureka",
                logo: spring,
            }, {
                name: "Linux servers management",
                para: "Familiar with bash scripting & system administration basics",
                logo: linux,
            }, {
                name: "Microsoft Azure", para: "with Azure blob storage & Azure VM & Azure App Service", logo: azure,
            }, {
                name: "Oracle Cloud Infrastructure",
                para: "Familiar with all oracle cloud services and solutions",
                logo: oci,
            }, {
                name: "Docker", para: "with kubernetes , jenkins , portainer", logo: docker,
            }, {
                name: "Git | GitHub", para: "Familiar with git and github", logo: git,
            }, {
                name: "MongoDB associate developer", para: "in NodeJs", logo: mongodb,
            }, {
                name: "MySql | PostgresSql", para: "and relational data modeling with UML & ERD & MERISE ", logo: mysql,
            }, {
                name: "Redis", para: "for caching and session management", logo: redis,
            }, {
                name: "oracle DBA", para: "with pl/sql, stored procedures, triggers, functions, views", logo: oracle,
            }, {
                name: "teamwork | communication",
                para: "I like to work in a team and I am a good communicator",
                logo: teamwork,
            }, {
                name: "Scrum & Agile | UML | Data Modeling(Sql & NoSql)",
                para: "Project management and Software Design",
                logo: uml,
            },],
        }, services: {
            title: "Services", subtitle: "WHAT I OFFER", service_content: [{
                title: "Web Development",
                para: "building web applications and websites with modern technologies and best practices is my passion and I can help you to do that with my experience in this field",
                logo: services_logo1,
            }, {
                title: "Cloud architect",
                para: "I can help you to design and implement cloud solutions that are secure, scalable, and cost-effective",
                logo: services_logo2,
            }, {
                title: "DevOps",
                para: "I can help you to automate your deployment process and make it more reliable and resilient",
                logo: services_logo3,
            },],
        }, Projects: {
            title: "Projects", subtitle: "MY CREATION", project_content: [{
                title: "SaaS Insurance Platform for Football Clubs using machine learning and blockchain",
                image: aman,
                githubLink: "https://github.com/2aman-lafr9a",
            }, {
                title: "Freelance website -- 'bricoll'",
                image: bricoll,
                githubLink: "https://github.com/sohaibMan/bricoll",
            },
            ],
        }, Testimonials: {
            title: "Testimonials", subtitle: "MY CLIENT REVIEWS", testimonials_content: [{
                review: "“Sohaib was terrific, did a great job understanding my projects' needs, and delivered super fast! I highly recommend his services.”",
                img: avatar3,
                name: "jean V. Fiver Client",
                rating: 5

            }, {
                review: "“I wanted to take a moment to share my positive experience with Sohaib, whom I recently hired to assist with our company's rebranding effort. ”",
                img: avatar3,
                name: "khalid D. Fiver Client",
                rating: 5
            }, {
                review: "“Thank you for reaching out and for your great work . we are very satisfied with the final product.Your expertise and professionalism were invaluable to our project, and I have no doubt that you will continue to provide excellent services ”",
                img: avatar1,
                name: "Mohamed E. Bougeons ensemble's designer ",
                rating: 5
            }, {
                review: "“I know how important it is to work with reliable, flexible, and responsive individuals, and Sohaib certainly demonstrated these qualities throughout the entire project.  Their expertise and attention to detail were invaluable”",
                img: avatar2,
                name: "Manal Z. It Geeks's team leader",
                rating: 5
            }],
        }, Aboutme: {
            title: "About Me",
            subtitle: "Hello Dear,This is a brief introduction about me",
            image1: hireme_person,
            image2: hireme_person,
            para: "I'm a junior software engineer with a passion for building software, solving real-life problems, and exploring new technologies. I enjoy learning from others and sharing my knowledge. I've had the opportunity to intern at Oracle and work with two startups, which have greatly enriched my experience.",
            btnText: "More about me",
        }, Contact: {
            title: "Contact Me",
            subtitle: "LET'S GET IN TOUCH",
            social_media,
        }, Certifications: {
            title: "Certifications", subtitle: "My Certifications", cert_content,
        },
    }, fr: {
        Nav, hero: {
            title: "(DevOps | OCI) Professionnel",
            firstName: "SOHAIB",
            LastName: "MANAH",
            // btnText: "Consulter mon curriculum vitæ",
            // btnLink: "https://www.canva.com/design/DAFltazUEpM/1HUGhv9zLupr7TU3NbZ68w/view",
            image: Hero_person,
            hero_content: [{
                count: `+${new Date(new Date() - new Date("2022-01-01")).getFullYear() - 1970}`,
                text: "An d'expérience en développement Web et en développement de logiciels",
            }, {
                count: "10+", text: "Projets Travaillé dans ma carrière",
            },],
        }, skills: {
            title: "compétences", subtitle: "MES MEILLEURES COMPÉTENCES", skills_content: [

                {
                    name: "c | c++",
                    para: "projets universitaires | structures de données et algorithmes | POO",
                    logo: cpp,
                }, {
                    name: "Rust", para: "aves architecture des microservices et grpc et actix-web", logo: rust,
                }, {
                    name: "Java", para: "Swing (Interface utilisateur graphique)", logo: java,
                }, {
                    name: "Python", para: "avec la Théorie des graphes", logo: python,
                }, {
                    name: "Structure des données | Résolution de problèmes | Théorie des graphes",
                    para: "en c & c++ & java & javascript",
                    logo: datastructure,
                }, {
                    name: "TypeScript | JavaScript", para: "avec React & Next js & Node js", logo: typescript,
                }, {
                    name: "Node js | Express.js ", para: "avec  Rest Api |  GraphQL", logo: nodejs,
                },

                {
                    name: "Spring",
                    para: "J2EE , spring boot, spring security , spring data , spring cloud, eureka",
                    logo: spring,
                }, {
                    name: "Management des serveurs Linux",
                    para: "Connaissance des bases de script bash et d'administration système",
                    logo: linux,
                }, {
                    name: "Git | GitHub", para: "Connaissance de git and github", logo: git,
                }, {
                    name: "Microsoft Azure",
                    para: "avec Azure blob storage & Azure VM & Azure App Service",
                    logo: azure,
                }, {
                    name: "Oracle Cloud Infrastructure ( Associate level )",
                    para: "Connaissance de tous les services et solutions cloud d'oracle",
                    logo: oci,
                }, {

                    name: "Docker", para: "avec kubernetes , jenkins , portainer", logo: docker,
                }, {
                    name: "MongoDB développeur", para: "avec NodeJs & Java", logo: mongodb,
                }, {
                    name: "MySql | PostgresSql",
                    para: "plus la modélisation de données relationnelles avec UML & ERD & MERISE ",
                    logo: mysql,
                }, {
                    name: "redis", para: "pour la mise en cache et la gestion des sessions", logo: redis,
                }, {
                    name: "oracle DBA",
                    para: "avec pl/sql, procédures stockées, déclencheurs, fonctions, vues",
                    logo: oracle,
                }, {
                    name: "Travail en équipe | communication",
                    para: "J'aime travailler en équipe et je suis un bon communicateur",
                    logo: teamwork,
                }, {
                    name: "Scrum & Agile | conception UML | Modélisation des données (Sql & NoSql)",
                    para: "Conception et gestion des projets,",
                    logo: uml,
                },

            ],
        }, services: {
            title: "Les services", subtitle: "ce que j'offre", service_content: [{
                title: "Développement web",
                para: "Construire des applications web et des sites web avec des technologies modernes et les meilleures pratiques est ma passion et je peux vous aider à le faire avec mon expérience dans ce domaine",
                logo: services_logo1,
            }, {
                title: "Architecte cloud",
                para: "Je peux vous aider à concevoir et à mettre en œuvre des solutions cloud sécurisées, évolutives et rentables",
                logo: services_logo2,
            }, {
                title: "DevOps",
                para: "Je peux vous aider à automatiser votre processus de déploiement et à le rendre plus fiable et résilient",
                logo: services_logo3,
            },],
        }, Projects: {
            title: "Projects", subtitle: "Ma création", project_content: [{
                title: "Plateforme d'assurance SaaS pour les clubs de football en utilisant machine learning et blockchain",
                image: aman,
                githubLink: "https://github.com/2aman-lafr9a",
            }, {
                title: "site web de freealnce -- 'bricoll'",
                image: bricoll,
                githubLink: "https://github.com/sohaibMan/bricoll",
            }],
        }, Testimonials: {
            title: "Témoignages", subtitle: "ÉVALUATIONS DE MES CLIENTS", testimonials_content: [{
                review: "“Merci d’avoir communiqué avec nous et de l’excellent travail que vous avez accompli.  nous sommes très satisfaits du produit final, votre expertise et votre professionnalisme ont été inestimables pour notre projet, et je n’ai aucun doute que vous continuerez à offrir d’excellents services.“",
                img: avatar1,
                name: "Mohamed E. Bougeons ensemble club ",
            }, {
                review: "“Je sais à quel point il est important de travailler avec des personnes fiables, flexibles et réactives, et Sohaib a certainement démontré ces qualités tout au long du projet.  Leur expertise et leur souci du détail étaient inestimables",
                img: avatar2,
                name: "Manal Z. chef d'équipe d'It Geeks",
            }, {
                review: "“Sohaib était formidable, a fait un excellent travail en comprenant les besoins de mes projets, et livré super rapide! Je recommande vivement ses services.”",
                img: avatar3,
                name: "jean V. Fiverr Client",
            }, {
                review: "“Je voulais prendre un moment pour partager mon expérience positive avec Sohaib, que j’ai récemment embauché pour aider à l’effort de rebranding de notre entreprise. ”",
                img: avatar3,
                name: "khalid D. Fiverr Client",
            },],
        }, Aboutme: {
            title: "A propos de moi",
            subtitle: "Bonjour Cher,Ceci est une brève introduction sur moi",
            image1: hireme_person,
            image2: hireme_person,
            para: " je suis un ingénieur logiciel junior passionné par la création de logiciels, la résolution de problèmes concrets et l'exploration de nouvelles technologies. J'aime apprendre des autres et partager mes connaissances. J'ai eu l'opportunité de faire un stage chez Oracle et de travailler avec deux startups, ce qui a grandement enrichi mon expérience",
            btnText: "En savoir plus",
        }, Contact: {
            title: "contactez-moi", subtitle: "RESTONS EN CONTACT", social_media,
        }, Certifications: {
            title: "Certifications", subtitle: "mes Certifications", cert_content,
        },
    },
};
