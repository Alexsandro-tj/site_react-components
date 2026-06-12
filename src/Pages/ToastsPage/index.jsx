import { useState } from "react";
import Toast from '../../components/Toast';
import styled from "styled-components";

export default function ToastsPage() {

    const [toast, setToast] = useState(null);

    const showToast = (type,message) => {
        setToast({type, message});
    }
    const closeToast = () => {
        setToast(null);
    }

    return (
        <Container>
            <h2>Componente: Toast de Notificação</h2>
            <p>Avisos Flutuantes Temporários</p>

            <ButtonContainer>
                <Button $variant='#00b37e' onClick={() => showToast('success', "Sucesso Componente funcionando")}>Sucesso</Button>
                <Button $variant='#9c0505' onClick={() => showToast("error", "Erro no componente")}>Error</Button>
                <Button $variant='#ffee00' onClick={() => showToast("warning", "cuidado com componente")}>Warning</Button>
                <Button $variant='rgba(27, 27, 244, 0.89)' onClick={() => showToast("info", "informação do componente")}>Info</Button>
            </ButtonContainer>

            {toast && (<Toast
                message={toast.message}
                type={toast.type}
                onClose={closeToast}
            />)}
        </Container>
    )
}
const Container = styled.div`
color: #ffffff;
disply: flex;
flex-direction: column;
gap: 20px;
`;

const ButtonContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
gap: 15px;
margin-top: 20px;
`;
const Button = styled.button`
padding: 15px;
background-color: ${props => props.$variant};
color: #ffffff;
border: none;
border-radius: 6px;
cursor: pointer;
font-weitgh: bold;
transition: transform 0.2s, filter 0.2s;
box-shadow: 0 4px 10px rbga(0,0,0,0.2);


&:hover{
filter: brightness (1.1);
transform: translateY(-2px);

}

&:active{
transform: translateY(0);
}
`;
