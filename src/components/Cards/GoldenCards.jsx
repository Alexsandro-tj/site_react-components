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
const Container = styled.div`
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


`;