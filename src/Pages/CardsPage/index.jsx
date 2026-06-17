import styled from 'styled-components';
import Cards from '../../components/Cards';
import HoverCards from '../../components/Cards/HoverCards.jsx';
import GoldenCards from '../../components/Cards/GoldenCards.jsx';

export default function CardsPage() {

    return (
        <Container>
            <h2>Meus Cards</h2>
            <h3>1. Midias Sociais (Cards sobrepostos)</h3>
            <Div>
                <Cards />
            </Div>
            <h3>2. Hover Cards (Com efeito hover)</h3>
            <Grid className='gridContainer'>
                <HoverCards />
                <HoverCards title="React js" description="Do zero ao mercado!" />
            </Grid>
            <h3>3. Cards de Luxo (Efeito dourado)</h3>
            <Grid>
                <GoldenCards />
            </Grid>


        </Container>
    );
}
const Container = styled.div`
color: #ffffff;
display:flex;
flex-direction: column;
align-items: flex-start;
h2{
font-size: 35px;
text-align: center;
}
p {
text-align: center;
}
h3{
font-size: 30px;
padding: 10px;
border:1px solid #ffffff;
border-radius: 8px;
width: fit-content;
background-color:aquamarine;
color: #000000;
}
`;

const Grid = styled.div`
display: flex;
gap: 20px;
margin-top: 30px;
flex-wrap: wrap;
margin-bottom: 200px;

`;
const Div = styled.div`
display:flex;
`;