import { Fade, Zoom } from "react-awesome-reveal";
// Exemplo: Imagem específica para mobile
import desktopImageSrc from "../assets/img/hero.jpg";
import mobileImageSrc from "../assets/img/hero-mobile.jpg"; 


function Hero() {
    return (
        <section className="relative h-[70vh] md:h-screen  p-5 overflow-hidden bg-black ">
            <Fade
                triggerOnce
                direction="down"
                cascade
                damping={20}
                delay={40}
                duration={5000}
            >
                <div className="absolute top-17 left-0 right-0 z-0">
                    {/* 1. Imagem para Mobile (Padrão: Visível, md: Oculta) */}
                    <img
                        src={mobileImageSrc}
                        alt="Imagem do iPhone em um ambiente de luz baixa (Mobile)"
                        // hidden no desktop (md:hidden) e visível por padrão
                        className=" object-cover opacity-90 md:hidden"
                    />

                    {/* 2. Imagem para Desktop (Padrão: Oculta, md: Visível) */}
                    <img
                        src={desktopImageSrc}
                        alt="Imagem do iPhone em um ambiente de luz baixa (Desktop)"
                        // visível no desktop (md:block) e oculta por padrão (hidden)
                        className="w-full h-full  object-cover opacity-90 hidden md:block"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black"></div>
                    {/* Overlay de gradiente para melhorar a visibilidade do conteúdo ou efeito visual */}
                </div>
            </Fade>

            <div className="hidden md:block absolute bottom-5 left-1/2 z-10 animate-bounce">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="size-10"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                </svg>
            </div>
        </section>
    );
}

export default Hero;
