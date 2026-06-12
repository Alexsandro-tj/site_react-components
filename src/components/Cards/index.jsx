import styled from "styled-components";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Cards() {
    const socialLinks = [
        {
            id: 1,
            name: "Github",
            color: "#333", // cor ao passar o mouse por cima
            url: "https://github.com/Alexsandro-tj",
            rotate: -15,
            icon: <FaGithub size={44} />  // angulo de rotação do card
        },
        {
            id: 2,
            name: "LinkedIn",
            color: "#0077b5", // cor ao passar o mouse por cima
            url: "https://linkedin.com/in/alex-sandro-do-santos",
            rotate: -5,
            icon: <FaLinkedin size={44} />  // angulo de rotação do card
        },
        {
            id: 3,
            name: "Instagram",
            color: "#e1306c", // cor ao passar o mouse por cima
            url: "https://www.instagram.com/alexsandrosantos385?igsh=MWZxN2pibHNrYTN6Zw%3D%3D&utm_source=qr",
            rotate: 25,
            icon: <FaInstagram size={44} />  // angulo de rotação do card
        }
    ];
    const [activecard, setActiveCard] = useState(null);

    //function que abre o link
    const handleCardClick = (link) => {
        setActiveCard(link.id);// Avisa a memaória que o card foi clicado

        setTimeout(() => {
            window.open(link.url, "_blank");// abrir link em nova aba
            setActiveCard(null);// limpar a memória do useState
        }, 300);
    };
    return (
        <Container>
            <span>
                Cards de Redes Sociais
            </span>
            <Styledwrapper>
                <div className="container">
                    {socialLinks.map((link) => (
                        <div key={link.id} className={`glass ${activecard === link.id ? "clicked" : ""}`} data-text={link.name}
                            style={{
                                '--r': link.rotate,
                                '--bg-color': link.color
                            }}
                            onClick={() => { handleCardClick(link) }}
                        >
                            {link.icon}
                        </div>
                    ))}
                </div>
            </Styledwrapper>
        </Container>
    );
}
const Container = styled.div`
color: #ffffff;

span{
margin-bottom: 20px;
font-size: 20px;
}

`;

const Styledwrapper = styled.div`
.container {
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
}

.glass {
position: relative;
width: 170px;
height: 250px;
background: liear-gradient(#fff2, transparent);
border: 1px solid rgba(255,255,255,0.1);
box-shadow: 0 25px 25px rgba(0,0,0,0.25);

display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: 0 -45px; /*sobreposição dos cards*/
backdrop-filter: blur(10px);

transform: rotate(calc(--r) * 1deg);

transition: 0.5s;
cursor: pointer;
}

.container:hover .glass{
transform: rotate(0deg);
margin: 0 20px;
}

.glass:hover{
background-color: var(--bg-color);
transform:scale(1.1);
z-index: 100;
box-shadow: 0 0 20px var(--bg-color);
}

.glass::before {
content: attr(data-text);
position: absolute;
bottom: 0;
width: 100%;
height: 40px;
background: rgba(255,255,255,0.05);
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-family: sans-serif;
opacity: 0;
transition: 0.3s;
}
.glass:hover::before{
opacity: 1; 
}

.glass.clicked {
transform: scale(1.1);
filter: brightness(1.9);

}


`;

