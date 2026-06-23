import styled from "styled-components";
import { FiCopy, FiX } from "react-icons/fi";


export default function Modal({code, onClose}) {

    // função para copiar o código

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        alert("Código copiado para área de transferência!");
    };

    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <Header>
                    <span>ComponentCode.jsx</span>
                    <Actions>
                        <button onClick={handleCopy} title='Copiar'>
                            <FiCopy size={20} />
                        </button>
                        <button onClick={onClose} title='Fechar'>
                            <FiX size={20} />
                        </button>
                    </Actions>
                </Header>
                <CodeBlock>
                    {/* As Tags 'pre' e 'code' são tags semanticas para mostrar o código em tela */}
                    <code>{code}</code>
                </CodeBlock>
            </ModalContainer>
        </Overlay>


    );
}

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.6);
backdrop-filter: blur(5px);
z-index: 9999;
display: flex;
justify-content: center;
align-items: center;
`;

const ModalContainer = styled.div`
width: 80%;
max-width: 800px;
height: 80%;
background: #1e1e1e;
border-radius: 8px;
box-shadow: 0 20px 50px rgba(0,0,0,0.4);
display: flex;
flex-direction: column;
border: 1px solid #333;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 20px;
background: #252526;
border-bottom: 1px solid #333;
color: #ccc;
font-family: monospace;
`;

const Actions = styled.div`
display: flex;
gap: 10px;

button{
background: transparent;
border: 1px solid #444;
color: #fff;
padding: 5px 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
transition: 0.2s;

&:hover{
background: #333;
}
}
`;

const CodeBlock = styled.pre`
flex: 1;
padding: 20px;
overflow: auto;
color: #d4d4d4;
font-family: monospace;
font-size: 14px;
line-height: 1.5;
white-space: pre-wrap;

&::webkit-scrollbar{
width: 10px;
}

&::webkit-scrollbar-thumb {
background: #444;
border-radius: 5px;
}
`;