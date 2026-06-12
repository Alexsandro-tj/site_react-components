import { Link, Outlet } from 'react-router-dom';
import ParticlesBackground from "../components/Particles";
import { MdOutlineDesignServices } from "react-icons/md";
import styled from 'styled-components';



export default function Defaultlayout() {

    return (
        <LayoutContainer>
            <ParticlesBackground />
            <Sidbar>
                <h2>My-UI <MdOutlineDesignServices size={32} color='#ffffff' />
                </h2>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/toasts">Toasts</Link>
                    <Link to="/buttons">Buttons</Link>
                    <Link to="/cards">Cards</Link>
                </nav>
            </Sidbar>

            <Content>
                {/* Outlet é onde as paginas filhas irão aparecer */}
                <Outlet />
            </Content>
        </LayoutContainer >
    );
}


const LayoutContainer = styled.div`
display: flex;
height: 100vh;
`;
const Sidbar = styled.aside`
width: 250px;
background: #121214;
padding: 20px;
border-radius: 8px;
border-right: 1px solid #323238;

h2 {
color: #ffffff;
margin-bottom: 30px;
font-size: 20px; 
}

nav {
display: flex;
flex-direction: column;
}

a {
display: block;
color: #c4c4cc;
text-decoration: none;
margin-bottom: 10px;

&:hover{
color: #00b37e;
}

}`;

const Content = styled.main`
flex: 1;
padding: 30px;
background: transparent;

`;