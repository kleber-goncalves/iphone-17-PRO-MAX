import { Fade, Zoom } from "react-awesome-reveal";

function Highlights() {
    const specs_hls = [
        {
            value: "48MP",
            label: "Principal",
            label2: "Sensor quad-pixel com foco automático e OIS de segunda geração",
            color: "text-blue-600",
            cascade: true,
            direction: "left",
            triggerOnce: true,
            damping: 30,
            delay: 120,
            duration: 2600,
        },
        {
            value: "12MP",
            label: "Ultra Wide",
            label2: "Campo de visão de 120° com modo noturno melhorado",
            color: "text-orange-500",
            cascade: true,
            direction: "up",
            damping: 30,
            triggerOnce: true,
            delay: 90,
            duration: 2600,
        },
        {
            value: "12MP",
            label: "Telefoto 5x",
            label2: "Zoom óptico de 5x com estabilização tetraprism",
            color: "text-blue-600",
            cascade: true,
            direction: "right",
            damping: 30,
            triggerOnce: true,
            delay: 120,
            duration: 2600,
        },
    ];

    return (
        <section
            className="flex flex-col items-center justify-center md:bg-black py-20 px-6"
            id="design"
        >
            <div className="max-w-7xl mx-auto">
                <Fade
                    direction="down"
                    cascade
                    damping={90}
                    delay={170}
                    duration={2500}
                    triggerOnce
                >
                    <div className="text-center mb-16 cursor-default">
                        <h2 className="text-xl sm:text-5xl font-bold mb-4">
                            Design Revolucionário
                        </h2>
                        <p className="text-xl text-gray-400">
                            Cada detalhe foi pensado para criar a melhor
                            experiência
                        </p>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 cursor-default">
                    <Fade
                        direction="left"
                        cascade
                        damping={20}
                        delay={90}
                        triggerOnce
                        duration={2500}
                    >
                        <div className="bg-gray-900 rounded-3xl p-6 md:p-8 h-full">
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img
                                    className="w-full rounded-2xl "
                                    src="../../src/assets/img/titanium-design.jpg"
                                    alt="iPhone-titanio"
                                />
                            </div>

                            <h3 className="font-bold mb-2 text-2xl md:text-3xl">
                                Titânio Premium
                            </h3>
                            <p className="text-gray-300">
                                Estrutura em titânio de grau aeroespacial. O
                                smartphone mais forte e leve.
                            </p>
                        </div>
                    </Fade>

                    <Fade
                        direction="right"
                        cascade
                        damping={20}
                        delay={90}
                        triggerOnce
                        duration={2500}
                    >
                        <div className="bg-gray-900 rounded-3xl p-6 md:p-8 h-full">
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img
                                    className="w-full rounded-2xl"
                                    src="../../src/assets/img/ios-features.jpg"
                                    alt="ios 2026"
                                ></img>
                            </div>

                            <h3
                                id="performace"
                                className="font-bold mb-2 text-2xl md:text-3xl"
                            >
                                ios 26
                            </h3>
                            <p className="text-gray-300 md:pb-6">
                                O sistema operacional mais avançado do mundo com
                                IA integrada
                            </p>
                        </div>
                    </Fade>
                </div>

                <Zoom
                    triggerOnce
                    cascade
                    damping={20}
                    delay={20}
                    duration={2500}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-900 rounded-3xl items-center gap-8 p-6 md:p-12 mb-16">
                        <div className="flex flex-col cursor-default order-2">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                                A18 Pro
                            </h3>
                            <h4 className="text-gray-300 mb-6 text-xl md:text-2xl leading-tight font-semibold">
                                O chip mais poderoso em um smartphone
                            </h4>

                            <ul className="list-disc space-y-3 text-gray-200 ml-5">
                                <li className="marker:text-blue-500">
                                    CPU 20% mais rápida
                                </li>
                                <li className="marker:text-red-500">
                                    GPU 25% mais eficente
                                </li>
                                <li className="marker:text-blue-500">
                                    Neural Engine com 16 núcleos
                                </li>
                                <li id="camera" className="marker:text-red-500">
                                    Ray tracing acelerado por hardware
                                </li>
                            </ul>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 order-1 md:order-2">
                            <img
                                className=" w-full rounded-2xl block"
                                src="../../src/assets/img/chip-a18-pro.jpg"
                                alt="chip a18 pro"
                            ></img>
                        </div>
                    </div>
                    <div></div>
                </Zoom>

                <div className="px-4 md:px-0 pt-10 pb-16">
                    <Fade
                        direction="down"
                        cascade
                        damping={90}
                        triggerOnce
                        delay={90}
                        duration={900}
                    >
                        <h3 className="text-3xl md:text-4xl text-center font-bold mb-8 md:mb-10 cursor-default">
                            Sistema de câmera Pro avançado
                        </h3>
                    </Fade>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {specs_hls.map((spec, index) => (
                            <Fade {...specs_hls[index]}>
                                <div
                                    key={index}
                                    className="cursor-pointer bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                                >
                                    <p
                                        className={`text-3xl md:text-4xl font-bold mb-4 ${spec.color}`}
                                    >
                                        {spec.value}
                                    </p>
                                    <h4 className="text-xl font-semibold mb-2">
                                        {spec.label}
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        {spec.label2}
                                    </p>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
