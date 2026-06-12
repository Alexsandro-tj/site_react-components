import styled from'styled-components';
import Cards from '../../components/Cards';

export default function CardsPage(){

    return(
        <Container>
            <h2>
                Componente: Cards
            </h2>
            <p>
                Container Flexiveis para agrupar conteúdo
            </p>
            <Grid>
                <Cards title="Card Primario" color="#61dafb">
                    <p>
                        Este é um card primário da cor do React.
                    </p>

                </Cards>
                <Cards title="Card Secundario" color="#63fb61">
                    <p>
                        Este é um card secundario.
                    </p>
                    <button style={{marginTop: '10px',padding:'5px 10px'}}>Ação</button>

                </Cards>
            </Grid>
        </Container>
    );
}
const Container = styled.div`
color: #ffffff;
`;

const Grid = styled.div`
display: flex;
gap: 20px;
margin-top: 30px;
flex-wrap: wrap;
`;
