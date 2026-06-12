import styled, { keyframes } from "styled-components";
import { useEffect } from "react";

//props: message(text), type ('sucess', 'error'), onClose (função do pai para fechar o Toast)
export default function Toast({ message, type = "success", onClose }) {


    useEffect(() => {
        // Iniciar o timer, assim que o componentes for montado
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        // chama o onClose depois de 3 segundos e fechar o componente
        return () => {
            clearTimeout(timer);//limpar o timer quando o componente for desmontado
        };


    }, [onClose])


    return (
        <ToastContainer $type={type}>
            <ToastMessage >
                {message}
            </ToastMessage>
            <CloseButton onClick={onClose}>X</CloseButton>
        </ToastContainer>
    );
}

const slidIn = keyframes`
from { transform: translateX(100%);
opacity:0;
}
to{
transform: translateX(0);
opacity:1;
};
`
const ToastContainer = styled.div`
position: fixed;
top: 20px;
right:20px;
z-index:1000;
min-width:250px;

background-color: ${(props) => props.$type === 'success' ? '#00b37e' : '#f75a68'};

color: #ffff;
padding: 1rem;
border-radius: 6px;
box-shadow: 0 4px 12px rgba(0,0,0,3);
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;

animation: ${slidIn} 0.5s ease-out;

cursor: pointer;
`
const CloseButton = styled.button`
background: transparent;
border: none;
color:#ffffff;
cursor:pointer;
font-weight:bold;
`;
const ToastMessage = styled.span`
color: #ffffff;

`;
