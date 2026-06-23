import { useState } from 'react';
import styled from 'styled-components';
import Cards from '../../components/Cards';
import HoverCards from '../../components/Cards/HoverCards.jsx';
import GoldenCards from '../../components/Cards/GoldenCards.jsx';
import ProductCards from '../../components/Cards/ProductCards.jsx';
import { goldenCardsCode, hoverCardsCode, productCardsCode, socialCardsCode } from '../../utils/codeStrings.js';
import Modal from '../../components/Modal/index.jsx';

export default function CardsPage() {

    const [selectedCode, setSelectedCode] = useState(null);

    return (
        <Container>
            <h2>Meus Cards</h2>
            {/* modal só aparece se for verdadeiro */}
            {selectedCode && (<Modal
                code={selectedCode}
                onClose={() => setSelectedCode(null)}
            />
            )}

            <h3>1. Midias Sociais (Cards sobrepostos)</h3>
            <Div>
                <Cards />
            </Div>
            <ViewCodeBtn onClick={() => setSelectedCode(socialCardsCode)}>
                &lt;/&gt; Ver Código
            </ViewCodeBtn>

            <h3>2. Hover Cards (Com efeito hover)</h3>
            <Grid className='gridContainer'>
                <HoverCards />
                <HoverCards title="React js" description="Do zero ao mercado!" />
            </Grid>
            <ViewCodeBtn onClick={() => setSelectedCode(hoverCardsCode)}>
                &lt;/&gt; Ver Código
            </ViewCodeBtn>

            <h3>3. Cards de Luxo (Efeito dourado)</h3>
            <Grid>
                <GoldenCards />
            </Grid>
            <ViewCodeBtn onClick={() => setSelectedCode(goldenCardsCode)}>
                &lt;/&gt; Ver Código
            </ViewCodeBtn>

            <h3>4. Cards de Produtos (Sequencial)</h3>
            <Grid>
                <ProductCards />
            </Grid>
            <ViewCodeBtn onClick={() => setSelectedCode(productCardsCode)}>
                &lt;/&gt; Ver Código
            </ViewCodeBtn>

        </Container>
    );
}
const Container = styled.div`
color: #ffffff;
display:flex;
flex-direction: column;
align-items: flex-start;
padding: 100px;

h2{
font-size: 35px;
text-align: center;
margin-bottom: 30px;
}
p {
text-align: center;
}
h3{
font-size: 22px;
padding: 10px 20px;
border:1px solid #ffffff;
border-radius: 8px;
width: fit-content;
background-color: #00b37e;
color: #ffffff;
width: fit-content;
margin-top: 40px;
display: flex;
align-items: center;
gap: 10px;
}
`;

const Grid = styled.div`
display: flex;
height:250px;
gap: 40px;
margin-top: 30px;
flex-wrap: wrap;
margin-bottom: 50px;

`;
const Div = styled.div`
display:flex;
`;

const ViewCodeBtn = styled.button`
background: transparent;
border: 1px solid #00b37e;
color: #00b37e;
padding: 8px 16px;
border-radius: 4px;
font-family: monospace;
font-weight: 600;
transition: 0.2s;

&:hover{
background: #00b37e;
color: #000000;
}

`;