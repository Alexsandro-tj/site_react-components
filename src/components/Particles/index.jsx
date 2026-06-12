import { useEffect, useRef } from "react";


export default function ParticlesBackground() {

    /* useRef para referenciar o elemento canvans no html */
    const canvasRef = useRef(null);
    /* useEffect para fazer o componente nascer e renderizar */
    useEffect(() => {
        // acessar o canvas
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        //definir o tamanho do canvas    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //criar particulas 
        const particlesArray = [];
        const numberOfParticles = 300; //mude para testar a performace

        // classe para criar as particulas

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1; // tamanho da particula entre 1 e 4
                this.speedX = Math.random() * 1.5 - 0.75; // Velocidade da particula
                this.speedY = Math.random() * 1.5 - 0.75;

            }
            //Atualizar a posição das particulas

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                //Se bater na borda, inverter a direção

                //condicional no eixo x
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX *= -1;
                }
                //condicional no eixo y
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY *= -1;
                }
            }
            //renderizar na tela
            draw() {
                ctx.fillStyle = "#00ff88"; // cor da particula
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        //inicar as particulas
        function init() {
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle())
            }
        }
        function animate() {
            // Limpas o canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            //Atualizar e renderizar cada particuala
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }

            //Chamar a animação novamente
            requestAnimationFrame(animate)
        };

        init();
        animate();

        const handleResize = () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        };
        window.addEventListener("resize",handleResize)

        return () => {window.removeEventListener("resize", handleResize)

        }

    }, []); // array vazio, para rodar apenas uma vez
    return (
        <canvas ref={canvasRef} style={{
            position:"fixed",
            left:0,
            top:0,
            zIndex: -1,
            background: "#121214"
        }} />
    );
}