import { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";

import blueImg from "/src/assets/img/iphone-blue.jpg";
import silverImg from "/src/assets/img/iphone-silver.jpg";
import orangeImg from "/src/assets/img/iphone-orange.jpg";

function Colors() {
    const colors = [
        {
            id: "blue",
            name: "Titânio Azul",
            image: blueImg,
            colorClass: "bg-[#2b3145]",
        },
        {
            id: "silver",
            name: "Titânio Natural",
            image: silverImg,
            colorClass: "bg-gray-300",
        },
        {
            id: "orange",
            name: "Titânio Laranja",
            image: orangeImg,
            colorClass: "bg-orange-500",
        },
    ];
    const models = [
        {
            name: "Pro Max",
            screen: "Tela de 6.9 polegadas com ProMotion 120Hz e Always-On display",
            storage: "256GB, 512GB ou 1TB",
            battery: "Bateria com até 33h de vídeo",
            weight: "Peso: 221g",
            cascade: true,
            direction: "left",
            damping: 30,
            delay: 120,
            triggerOnce: true,
            duration: 2600,
        },
        {
            name: "Pro",
            screen: "Tela de 6.3 polegadas com ProMotion 120Hz e Always-On display",
            storage: "128GB, 256GB ou 512GB",
            battery: "Bateria com até 29h de vídeo",
            weight: "Peso: 199g",
            cascade: true,
            direction: "right",
            damping: 30,
            triggerOnce: true,
            delay: 120,
            duration: 2600,
        },
    ];

    const [selectedColor, setSelectedColor] = useState("blue");

    return (
        <section id="cores" className="bg-black py-16 md:py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center  md:mb-16">
                    <Zoom
                        triggerOnce
                        cascade
                        damping={90}
                        delay={170}
                        duration={2500}
                    >
                        <h2 className="text-4xl md:text-5xl mb:text-6xl font-bold mb-4 cursor-default">
                            Escolha sua cor
                        </h2>
                    </Zoom>
                    <Fade
                        triggerOnce
                        direction="down"
                        cascade
                        damping={20}
                        delay={40}
                        duration={5000}
                    >
                        <p className="text-lg md:text-xl text-gray-400 cursor-default">
                            Três acabamentos em titânio expetaculares.
                        </p>
                    </Fade>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <Zoom
                            triggerOnce
                            cascade
                            damping={100}
                            delay={130}
                            duration={3000}
                        >
                            <div className="relative flex items-center justify-content-center min-h-[300px] md:min-h-[500px] transition-all">
                                <img
                                    src={
                                        colors.find(
                                            (color) =>
                                                color.id === selectedColor
                                        ).image
                                    }
                                    alt="iphone 17"
                                    className="w-full max-w-sm md:max-w-full max-h-[500px] md:max-h-[700px] mx-auto object-contain"
                                />
                            </div>
                        </Zoom>
                        <Zoom
                            triggerOnce
                            cascade
                            damping={100}
                            delay={130}
                            duration={1000}
                        >
                            <div className="absolute bottom-10 md:bottom-8 left-0 right-0 text-center">
                                <div className="px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-md bg-black/40 inline-block shadow-xl">
                                    <Fade
                                        triggerOnce
                                        direction="down"
                                        cascade
                                        damping={20}
                                        delay={40}
                                        duration={4500}
                                    >
                                        <h3 className="text-lg md:text-2xl font-semibold cursor-default">
                                            {
                                                colors.find(
                                                    (color) =>
                                                        color.id ===
                                                        selectedColor
                                                ).name
                                            }
                                        </h3>
                                    </Fade>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
                <Zoom
                    triggerOnce
                    cascade
                    damping={100}
                    delay={130}
                    duration={3000}
                >
                    <div className="flex justify-center items-center gap-4">
                        {colors.map((color) => (
                            <button
                                key={color.id}
                                onClick={() => setSelectedColor(color.id)}
                                aria-pressed={selectedColor === color.id}
                                className={`relative transition duration-30 group focus:outline-none cursor-pointer`}
                            >
                                <div
                                    className={`w-10 h-10 md:w-16 md:h-16 rounded-full border-4 ${
                                        color.colorClass
                                    } ${
                                        selectedColor === color.id
                                            ? "border-white transform scale-105"
                                            : "border-gray-600 hover:border-gray-500"
                                    }`}
                                ></div>
                                <span
                                    className={`absolute md:-bottom-10 left-1/2 transform -translate-x-1/2 text-2xl  transition-opacity duration-200 ${
                                        selectedColor === color.id
                                            ? "opacity-100 text-white"
                                            : "opacity-0"
                                    }`}
                                    aria-hidden="true"
                                >
                                    •
                                </span>
                            </button>
                        ))}
                    </div>
                </Zoom>

                <div className="grid gap-6 md:gap-8 mt-20 grid-cols-1 md:grid-cols-2 cursor-default">
                    {models.map((model, index) => (
                        <Fade {...model}>
                            <div
                                key={index}
                                className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-6 md:p-8 border border-gray-800"
                            >
                                <div className="text-3xl md:text-4xl mb-4">
                                    📱
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3">
                                    {model.name}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-snug mb-4">
                                    {model.screen}
                                </p>
                                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                                    <li>{model.storage}</li>
                                    <li>{model.battery}</li>
                                    <li>{model.weight}</li>
                                </ul>
                            </div>
                        </Fade>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Zoom
                        triggerOnce
                        cascade
                        damping={100}
                        delay={130}
                        duration={3000}
                    >
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 mb-4 md:mb-8 hover:scale-105 shadow-lg shadow-blue-500/50 w-full md:w-auto cursor-pointer">
                            <a href="https://www.apple.com/br/shop/buy-iphone/iphone-17-pro">
                                Compre agora á partir de R$ 9.299,00
                            </a>
                        </button>
                    </Zoom>
                    <Fade
                        triggerOnce
                        direction="down"
                        cascade
                        damping={80}
                        delay={90}
                        duration={2500}
                    >
                        <p className="cursor-default text-gray-400 text-sm md:text-base">
                            Ou em até 12x de R$ 774,92 sem juros
                        </p>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Colors;
