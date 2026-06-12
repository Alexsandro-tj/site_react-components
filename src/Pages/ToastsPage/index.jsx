import { useState } from "react";
import Toast from '../../components/Toast';
import styled from "styled-components";

export default function ToastsPage({message, type, onClose}){
    
    const [showToast, setShowToast] = useState(null);

    const handleShowSucces = () => {
        setShowToast({message:"Sucesso! Componente Funcionando", type: "success"});
    }
    const handleShowError = () => {
        setShowToast({message:"Erro! Algo deu errado", type:"error"})
    }
    const closeToast = () => {
        setShowToast(null);
    }
    
    
    return(
        <Container>
            <h2>Componente: Toast de Notificação</h2>
            <p>Avisos Flutuantes Temporários</p>

            <ButtonContainer>
                <ButtonSucesso onClick={handleShowSucces}>Sucesso</ButtonSucesso>
                <ButtonErro onClick={handleShowError}>Error</ButtonErro>
            </ButtonContainer>

            {showToast && (<Toast 
            message={showToast.message}
            type={showToast.type}
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
display: flex;
gap: 15px;
margin-top: 10px;
`;
const ButtonSucesso = styled.button`
padding: 12px 24px;
background-color: #00b37e;
color: #ffffff;
border: none;
border-radius: 6px;
cursor: pointer;
font-weitgh: bold;

&:hover{
background-color:#95f7d6;

}
`;
const ButtonErro = styled.button`
padding: 12px 24px;
background-color: #eb0404;
color: #ffffff;
border: none;
border-radius: 6px;
cursor: pointer;
font-weitgh: bold;

&:hover{
background-color: #e07e7e;

}
`;