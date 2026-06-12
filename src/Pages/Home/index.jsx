import styled from "styled-components";


export default function Home(){

return(
   <Container>
    <h1>Bem vindos ao My-UI de Alex Santos</h1>
    <p>Selecione um componete no menu lateral para testa-lo</p>
   </Container>
    
)

}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
color: #ffffff;
text-align: center;

h1 {
margin-bottom: 1rem;
font-size: center;
}
p {
font-size: 1.2rem;
color: #c4c4cc;
}

`;
