import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { FiAlertCircle, FiCheckCircle, FiAlertTriangle, FiInfo, FiX } from 'react-icons/fi';

const toasTypes = {
    success: {
        color: '#00b37e',
        icon: <FiCheckCircle size={24} />
    },
    error: {
        color: '#f75a68',
        icon: <FiAlertCircle size={24} />,
    },
    warning: {
        color: '#fba94c',
        icon: <FiAlertTriangle size={24} />
    },
    info: {
        color: '#3291ff',
        icon: <FiInfo size={24} />
    }
}


//props: message(text), type ('sucess', 'error'), onClose (função do pai para fechar o Toast)
export default function Toast({ message, type, onClose }) {


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
            {toasTypes[type]?.icon}
            <Content>
                <strong style={{ textTransform: 'capitalize' }}>
                    {type}
                </strong>
                <span style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                    {message}
                </span>
            </Content>

            <CloseButton onClick={onClose}><FiX size={18} /></CloseButton>
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
min-width:300px;

background-color: ${(props) => toasTypes[props.$type].color};

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
background-filter: blur(4px);
`
const CloseButton = styled.button`
background: transparent;
border: none;
color:#ffffff;
cursor:pointer;
display: flex;
align-items: center;
justify-content: center;
font-weight:bold;
&:hover{
color:#ffffff;
}

`;
const Content = styled.div`
flex: 1;
display: flex;
flex-direction: column;

`;
