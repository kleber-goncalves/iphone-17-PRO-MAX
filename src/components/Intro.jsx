import { Fade, Zoom } from "react-awesome-reveal";

function Intro() {
    const specs = [
        {
            value: '6.3"',
            label: "Display Super Retina XDR",
            color: "text-blue-600",
        },
        {
            value: "A18 Pro",
            label: "Chip mais rápido",
            color: "text-orange-500",
        },
        { value: "48MP", label: "Sistema de câmera", color: "text-blue-600" },
        { value: "29h", label: "Bateria", color: "text-orange-500" },
    ];

    return (
        <section className="flex flex-col items-center justify-center md:not-first:bg-black py-16 md:py-20 px-4 sm:px-6">
            <div className="max-auto max-w-4xl text-center cursor-default">
                <div className="min-h-[120px] overflow-hidden">
                    <Fade
                        triggerOnce
                        cascade
                        direction="up"
                        damping={0.3}
                        delay={10}
                        duration={1500}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-4 md:mb-6">
                            iPhone 17 Pro
                        </h1>
                    </Fade>
                </div>

                <Fade
                    triggerOnce
                    direction="up"
                    cascade
                    damping={10}
                    delay={80}
                    duration={2500}
                >
                    <p className="text-xl sm:text-2xl md:text-4xl mb-4 text-gradient font-bold">
                        Titânio. Tão forte. Tão leve. Tão Pro.
                    </p>
                </Fade>
                <Fade
                    triggerOnce
                    direction="up"
                    cascade
                    damping={20}
                    delay={90}
                    duration={2500}
                >
                    <p className="text-md sm:text-lg md:text-xl text-gray-300 mb-8 md:px-0 max-w-2xl md:mb-10 max-auto">
                        O design mais refinado que já críamos. Titânio de grau
                        aeroespacial. Chip A18 Pro. Sistema de câmera Pro
                        revolucionário.
                    </p>
                </Fade>
            </div>
            <Zoom triggerOnce cascade damping={30} delay={10} duration={2500}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button className="bg-blue-600 active:scale-100 w-40 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer">
                        <a href="https://www.apple.com/br/shop/buy-iphone/iphone-17-pro">
                            Comprar
                        </a>
                    </button>
                    <button id="bateria" className="border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer">
                        <a href="https://www.apple.com/br/iphone-17-pro/">
                            Saiba mais
                        </a>
                    </button>
                </div>
            </Zoom>
            <Fade triggerOnce cascade duration={2500}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-6xl px-4 sm:px-0">
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className="cursor-pointer flex flex-col items-center bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                        >
                            <p
                                className={`text-2xl sm:text-3xl font-bold ${spec.color}`}
                            >
                                {spec.value}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-300 mt-2 text-center">
                                {spec.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Fade>
        </section>
    );
}

export default Intro;
