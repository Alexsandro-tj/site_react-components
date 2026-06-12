import styled from "styled-components";


export default function Cards({children, title, botao, color}) {
    return (
        <CardsContainer>
            {
                title && <h3 style={{ color: color, marginBottom: '10px' }}>{title}</h3>
            }
            {
                botao && <button style={{marginBottom: '10px',borderRadius: '5px'}}>{botao}</button>
            }
            {children}
        </CardsContainer>
    );
}

const CardsContainer = styled.div`
background: #202024;
padding: 20px;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
margin-top:20px;
`;