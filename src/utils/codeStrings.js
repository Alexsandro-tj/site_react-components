export const hoverCardsCode = `
import React from 'react';
import styled from "styled-components";

export default function HoverCards({title = "Hover me", description = "O texto aparece ao passar o mouse sobre o card" }) {

    return (
        <Container>
            <div className="cards">
                <div className="align">
                    <span className="red" />
                    <span className="yellow" />
                    <span className="green" />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Container>
    );
};

const Container = styled.div\`
.cards{
width: 190px;
height: 120px;
padding: 0.5rem;
margin-bottom: 50px;

background: rgba(198,198,198,0.34);
backdrop-filter: blur(5px);

border-radius: 8px;
border-bottom: 3px solid rgba(255,255,255,0.440);
boder-left: 2px outset rgba(255,255,255,0.545) ;
box-shadow: -40px 50px 30px rgba(0,0,0,0.280);

transform: skewX(10deg);

transition: 0.4s;

overflow: hidden;
color: #ffffff;
font-family: sans-serif;

}
.cards:hover{
height: 254px;
transform: skewX(0deg);
}
.align{
padding: 1rem;
display: flex;
flex-direction: row;
gap: 5px;
align-self: flex-start;
}

.red {
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #ff605c;
box-shadow: -5px 5px 5px rgba(0,0,0,0.280);
}
.yellow {
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #ffbd44;
box-shadow: -5px 5px 5px rgba(0,0,0,0.280);
}
.green {
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #00ca4b;
box-shadow: -5px 5px 5px rgba(0,0,0,0.280);
}
.cards h1 {
text-align: center;
margin: 1.3rem;
color: rgba(218,244,237);
text-shadow: -10px 5px 10px rgba(0,0,0,0.573);
}
\`;
`;

export const goldenCardsCode = `

import styled from "styled-components";

export default function GoldenCards() {
    return (
        <Container>
            <div className="card">
                <div className="border" />
                <div className="content">
                    <div className="logo">
                        <span className="logo-main">AS</span>
                        <span className="logo-full">Alex Santos</span>
                    </div>
                    <span className="role">Full Stack Developer</span>
                </div>
                
                <span className="bottom-text">Curso React PRO</span>

            </div>
        </Container>
    );
};
const Container = styled.div\`
/* Variaveis de cores*/
--gold: #db9f67;
--dark: #243137;

.card{
width: 300px;
height: 200px;
background: var(--dark);
position: relative;
display: grid;
place-content: center;  /* centralizando o conteudo do container */
border-radius: 10px;
overflow: hidden;
transtion: all 0.5s ease-in-out;
cursor: pointer;


}
.border {
max-width:300px;
max-height: 200px;
position: absolute;
inset: 0;
border: 2px solid var(--gold);
opacity: 0;
transform: rotate(10deg);
transition: all 0.5s ease-in-out;


}
.card:hover {
border-radius: 0;
transform: scale(1.05);
box-shadow: 0 10px 20px rgba(0,0,0,0.5);

}
.card:hover .border{
opacity: 1;
inset: 15px;
transform: rotate(0deg);

}
.content  {
text-align: center;
z-index: 10; 

}
.logo{
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 10px;
justify-content: center;
}
.logo-main{
color: var(--gold);
font-size: 2.5rem;
font-weight: 900;
letter-spacing: 2px;
transition: 0.5s;
}
.logo-full{
color: var(--gold);
font-size:0;
opacity:0;
letter-spacing: 0;
transition: 0.5s;
white-space: nowrap;
text-transform: uppercase;
}
.role{
color: #fff;
font-size:0.8rem;
text-transform: uppercase;
letter-spacing: 2px;
opacity: 0.7;
transition: 0.5s;
}
.card:hover .logo-main{
font-size: 1.5rem;
opacity: 0.8;
}
.card:hover .logo-full{
font-size: 1rem;
opacity: 1;
letter-spacing: 3px;
margin-top: 5px;
}
.card:hover .role {
letter-spacing: 4px;
color: var(--gold);
opacity: 1;
}
.bottom-text {
position: absolute;
bottom:15px;
transform: translateX(-50%);


color: var(--gold);
font-size: 8px;
text-transform: uppercase;
letter-spacing: 5px;
opacity: 0;
transition: 0.5s;
}
.card:hover .bottom-text {
opacity: 1;
letter-spacing: 8px;
bottom: 25px;
white-space: nowrap;
transform: translate(0);
padding-left: 55px;

}
\`;
`;

export const productCardsCode = `

import styled from "styled-components";


export default function ProductCards({marca = "Nike Air", modelo = "Jordan One", valor = "299,00", image}) {
    return (
        <Container>
            <div className="card">
                {/* Circulo Inicial (Capa) */}
                <div className="container-image">
                    {/* Incone do produto pequeno (SVG) */}
                    <svg className="image-circle" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 335.76 195.21">
                        <path className="fil-shoes1" d="M332.99 147.72c-0.87,-8.61 -2.43,-5.69 -1.57,-16.93 0.7,-9.13 -0.29,-27.37 -1.46,-37.14 -0.23,-1.89 -0.43,-5.19 -1.06,-8.26l-3.31 -12.45c-0.54,-1.82 -0.16,-2.7 -0.7,-4.36 -1.5,-4.56 -2.81,-6.58 -3.32,-12.45 -0.27,-3.05 0.85,-4.81 -1.89,-7.13 -1.31,-1.11 -2.14,-1.33 -3.74,-1.23 -10.29,0.69 -19.1,-4.44 -28.23,-7.89l-5.37 -2.51c-7.84,-3.92 -16.02,-10.9 -23.59,-15.81 -5.06,-3.28 -2.36,-0.49 -4.87,-5.83 -2.48,-5.29 -11.1,-6.93 -16.27,-8.5 -2.53,-0.76 -1.72,-0.99 -3.98,-1.68 -1.14,-0.35 -3.14,-0.5 -3.63,-0.76 -2.09,-1.09 -7.48,-4.47 -9.41,-4.76 -3.83,-0.58 -7,6.85 -9.59,10.32 -1.8,2.42 -3.23,5.65 -3.64,8.83 -0.22,1.71 -1.74,3.48 -2.63,5.16 -8.27,-3.97 -8.47,-1.81 -9.27,0.86 -1.69,5.63 -4.59,10.52 -6.25,16.27 -3.05,10.56 -6.49,6.16 -11.04,12.04 -1.64,2.12 -0.97,2.39 -3.42,3.9 -5.38,3.33 -9.5,0.93 -16.05,7.03 -10.09,9.4 -3.03,2.62 -9.55,5.65 -1.43,0.66 -3.15,2.01 -4.26,3.06 -2.1,2.01 -1.92,2.22 -3.22,4.67 -11.67,0 -10.17,6.25 -14.88,7.64 -4.6,1.36 -6.75,1.85 -9.78,5.42 -1.14,1.35 -2.27,3.88 -3.22,4.66 -1.61,1.31 -2.53,0.56 -4.95,2.37 -3.18,2.38 -6.99,3.65 -9.48,5.71 -2.55,2.1 -1.2,1.6 -4.73,3.15 -5.39,2.38 -10.82,3.14 -15.13,7.39 -1.64,1.62 -16.4,4.41 -18.66,4.98 -11.91,3.03 -25.8,4.05 -37.36,8.24 -6.1,2.21 -4.85,-2.22 -11.16,4.05 -4.74,4.71 -3.68,10.8 -6.22,16.29 -1.07,2.31 -1.69,1.85 -2.68,5.2l-1.44 5.87c-0.73,4.22 -2.36,6.72 -1.86,12.16l1.02 4.62c1.95,5.05 7.38,8.45 12.31,10.21l13.44 4.02c5.09,1.37 11.26,1.47 16.51,2.63 5.72,1.26 34.16,1.33 39.85,0.87 2.59,-0.21 3.66,0.35 5.75,0.84 3.42,0.8 4.45,-0.44 7.03,-0.28 2.33,0.14 3.31,1.06 6.8,1.09 9.62,0.08 90.6,0.66 98.33,-0.28 4.23,-0.52 10.35,0.74 14.86,0.26 11.36,-1.21 24.28,-2.91 36.17,-1.87 7.05,0.61 29.63,1.01 33.07,-1.51 1.48,0.99 29.81,-0.46 33.72,-0.68 8.78,-0.5 17.29,-6.69 16.8,-15.89 -0.1,-9.37 -1.8,-17.8 -2.75,-27.26z" />
                    </svg>
                </div>
                {/* Parte 2 Conteúdo interno Revelar no hover */}
                <div className="content">
                    <div className="detail">
                        <span>
                            {" "}
                            {marca} <br /> {modelo}
                        </span>
                        <p>R$ {valor}</p>
                        <button>COMPRAR</button>
                    </div>
                    <div className="product-image">
                        <div className="box-image">
                            {/* Imagem do produto SVG */}
                            <svg
                                className="img-product"
                                 xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 116.83 182.61" 
                            >
                             <path
                                className="fil-shoes2"
                                d="M99.33 20.55c-4.24,-1.91 -3.3,-0.4 -8.3,-3.82 -4.06,-2.78 -12.82,-7.22 -17.68,-9.3 -0.94,-0.4 -2.53,-1.19 -4.13,-1.73l-6.69 -1.8c-0.99,-0.23 -1.3,-0.65 -2.22,-0.84 -2.53,-0.53 -3.82,-0.46 -6.69,-1.8 -1.49,-0.7 -2.01,-1.69 -3.83,-1.04 -0.87,0.31 -1.19,0.64 -1.58,1.41 -2.44,4.98 -7.2,7.7 -11.26,11.02l-2.61 1.83c-3.93,2.6 -9.38,4.53 -13.7,6.73 -2.89,1.47 -0.86,0.97 -4.02,0.7 -3.13,-0.27 -6.21,3.31 -8.33,5.29 -1.04,0.97 -0.92,0.53 -1.85,1.4 -0.47,0.44 -1.08,1.33 -1.33,1.49 -1.07,0.68 -4.09,2.28 -4.75,3.1 -1.3,1.63 1.31,5.1 2.23,7.24 0.64,1.49 1.76,3.02 3.13,4.07 0.74,0.56 1.15,1.74 1.7,2.61 -4.07,2.78 -3.12,3.46 -2.09,4.55 2.17,2.3 3.66,4.97 5.89,7.28 4.1,4.26 1.12,4.68 2.64,8.38 0.55,1.33 0.85,1.09 0.9,2.64 0.11,3.4 -2.12,4.67 -1.04,9.36 1.66,7.23 0.4,2.11 0.06,5.96 -0.07,0.84 0.09,2.01 0.28,2.8 0.37,1.51 0.52,1.49 1.31,2.75 -3.14,5.43 0.18,6.41 -0.44,8.98 -0.6,2.51 -0.95,3.64 -0.11,6.01 0.32,0.9 1.2,2.1 1.3,2.75 0.18,1.1 -0.42,1.33 -0.22,2.94 0.25,2.12 -0.18,4.23 0.11,5.95 0.29,1.75 0.42,0.99 0.2,3.05 -0.34,3.15 -1.45,5.88 -0.63,9.03 0.31,1.2 -2.36,8.82 -2.7,10.03 -1.79,6.36 -5.05,13.1 -6.2,19.61 -0.61,3.43 -2.34,1.66 -1.11,6.28 0.92,3.47 4.04,4.61 5.91,7.28 0.79,1.12 0.41,1.28 1.7,2.65l2.35 2.25c1.77,1.48 2.49,2.9 5.16,4.13l2.42 0.76c2.87,0.45 5.92,-1.16 8.06,-2.98l5.48 -5.18c2.01,-2 3.71,-4.85 5.66,-6.98 2.12,-2.32 9.8,-15.54 11.11,-18.32 0.6,-1.26 1.15,-1.61 1.93,-2.45 1.29,-1.38 0.99,-2.19 1.76,-3.35 0.69,-1.05 1.38,-1.26 2.33,-2.87 2.62,-4.45 24.66,-42 26.3,-45.85 0.9,-2.11 3.13,-4.62 4.12,-6.85 2.49,-5.61 5.17,-12.08 8.85,-17.34 2.18,-3.12 8.43,-13.52 8.19,-15.8 0.86,-0.42 7.8,-14 8.75,-15.88 2.13,-4.22 1.53,-9.85 -2.88,-12.09 -4.39,-2.47 -8.77,-3.95 -13.43,-6.05z"
                            /> 
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div\`
.card{
position: relative;
width: 300px;
height: 300px;
background: transparent;
border: none;
justify-content: center;
align-items: center;
display: flex;
}
.card .container-image {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #e7e7e7;
width: 190px;
height: 190px;
border-radius: 50%;
box-shadow: 0 0 3px 1px #1818183d, 2px 2px 3px #18181865, inset 2px 2px 2px #ffffff;
z-index: 2;

transition: all 0.2s ease-in-out, opacity 0.4s, border-radius 0.4s ease-in-out 0.4s;
/* transition-delay: 0.6s, 0s; */
cursor: pointer;
}

.card:hover .container-image{
opacity: 0;
border-radius: 8px;
transition-delay: 0s;
}

.card .container-image .image-circle{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 125px;
filter: drop-shadow (2px 2px 2px #1818188a);
transition: opacity 0.3s ease-in-out;

}

.card:hover .container-image .image-circle {
opacity: 0;
transition-delay: 0s;
}

.card .content {
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

background: #e7e7e7;
padding: 20px;
width: 190px;
height: 190px;
border-radius: 8px;
box-shadow: 0 0 3px 1px #1818183d, 2px 2px 3px #18181865, inset 2px 2px 2px #ffffff;

visibility: hidden;
transition: 0.3s ease-in-out;
z-index: 1;
transition: width 0.5s ease-in-out, height 0.5s ease-in-out, visibility 0.3s;
}
.card:hover .content {
width: 250px;
height: 160px;
visibility: visible;
transition-delay: 0.2s;
}
.card .content .detail {
display: flex;
flex-direction: column;
width: 40%;
color: #181818;
opacity: 0;
}
.card:hover .content .detail {
opacity: 1;
transition: opacity 0.4s ease-in-out 0.3s;
}
.card .content .detail p {
color: #333;
font-weight: 500;
margin-bottom: 10px;
}

.card .content .detail span {
margin-bottom: 5px;
font-size: 18px;
font-weigth: 800;
}
.card .content .detail button {
background: #b8854b;
margin-top: auto;
width: 85px;
height: 25px;
color: #ffffff; 
font-size: 13px;
border: none;
border-radius: 8px;
transition: 0.3s ease-in-out;
cursor: pointer;
font-weight: bold;
}

.card .content .detail button:hover{
background: #d39f63;
}

.card .content .product-image{
position: relative;
width: 50%;
height: 100%;
}

.card .content .product-image .box-image {
display: flex;
position: absolute;
top: 0;
left: -25%;
width: 100%;
height: 115%;
opacity: 0;
transform: scale(0.5);
transition: all 0.2s ease-in-out;
}

.card:hover .content .product-image .box-image {
top: -12%;
left: 0;
opacity: 1;
transform: scale(1);
transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.0);
}

.img-product {
width: 110px;
margin: auto;
filter: drop-shadow(5px 10px 10px rgba(0,0,0,0.3));
}
.fil-shoes1, .fil-shoes2 {
fill: #333333;

}
\`;
`;

export const socialCardsCode = `

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

        <Styledwrapper>
            <div className="container">
                {socialLinks.map((link) => (
                    <div key={link.id} className={\`glass \${activecard === link.id ? "clicked" : ""}\`} data-text={link.name}
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

    );
}


const Styledwrapper = styled.div\`
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
\`;
`;