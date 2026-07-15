import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let particles = [];
        let animationId;

        const PARTICLE_COUNT = 100;
        const MAX_DISTANCE = 100;

        const mouse = {
            x: null,
            y: null,
            radius: 50,
        };

        // here i can Handle the DPI 
        function resizeCanvas() {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            createParticles();
        }

        class Particle {
            constructor() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.radius = Math.random() * 2 + 1;

                this.baseX = this.x;
                this.baseY = this.y;

                this.speedX = (Math.random() - 0.5) * 0.6;
                this.speedY = (Math.random() - 0.5) * 0.6;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255,255,255,0.8)";
                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction here repulsion effect
                if (mouse.x && mouse.y) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        this.x += dx / 10;
                        this.y += dy / 10;
                    }
                }

                // Boundary wraping
                if (this.x < 0) this.x = window.innerWidth;
                if (this.x > window.innerWidth) this.x = 0;
                if (this.y < 0) this.y = window.innerHeight;
                if (this.y > window.innerHeight) this.y = 0;

                this.draw();
            }
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle());
            }
        }

        // This code is to Connect nearby particles
        function connectParticles() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MAX_DISTANCE) {
                        const opacity = 1 - distance / MAX_DISTANCE;
                        ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
                        ctx.lineWidth = 0.5;

                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => p.update());
            connectParticles();

            animationId = requestAnimationFrame(animate);
        }

        // I am Mouse tracking here
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener("mouseout", () => {
            mouse.x = null;
            mouse.y = null;
        });

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 w-full h-full pointer-events-none z-0"
        />
    );
}