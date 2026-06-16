import styled from "styled-components";

export default function Hovercards(title = "Hover me", description = "O texto aparece ao passar o mouse sobre o card") {

    return (
        <Container>
            <div className="cards">
                <div className="align">
                    <span className="red" />
                    <span className="yealoow" />
                    <span className="green" />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
.cards{
width: 190px;
heigth: 120px;
padding: 0.5rem;

backgorund: rgba(198,198,198,0.34);
backdrop-filter: blur(5px);

border-radius: 8px;
border-bottom: 3px solid rgba(255,255,255,0.440);
boder-left: 2px solid rgba(255,255,255,0.545) outset;
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


`;