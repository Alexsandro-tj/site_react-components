import styled from "styled-components";

export default function HoverCards({title = "Hover me", description = "O texto aparece ao passar o mouse sobre o card" }) {

    return (
        <Container>
            <div className="cards">
                <div className="align">
                    <span className="red" />
                    <span className="yellow" />
                    <span className="green" />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
.cards{
width: 190px;
height: 120px;
padding: 0.5rem;
margin-bottom: 50px;

background: rgba(198,198,198,0.34);
backdrop-filter: blur(5px);

border-radius: 8px;
border-bottom: 3px solid rgba(255,255,255,0.440);
boder-left: 2px outset rgba(255,255,255,0.545) ;
box-shadow: -40px 50px 30px rgba(0,0,0,0.280);

transform: skewX(10deg);

transition: 0.4s;

overflow: hidden;
color: #ffffff;
font-family: sans-serif;

}
.cards:hover{
height: 254px;
transform: skewX(0deg);
}
.align{
padding: 1rem;
display: flex;
flex-direction: row;
gap: 5px;
align-self: flex-start;
}

.red {
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #ff605c;
box-shadow: -5px 5px 5px rgba(0,0,0,0.280);
}
.yellow {
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #ffbd44;
box-shadow: -5px 5px 5px rgba(0,0,0,0.280);
}
.green {
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #00ca4b;
box-shadow: -5px 5px 5px rgba(0,0,0,0.280);
}
.cards h1 {
text-align: center;
margin: 1.3rem;
color: rgba(218,244,237);
text-shadow: -10px 5px 10px rgba(0,0,0,0.573);
}
`;