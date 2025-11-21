import { Fade, Zoom } from "react-awesome-reveal";
import { useState } from "react";
import { useLayoutEffect } from "react";
function Footer() {
    const sections = [
        {
            title: "Comprar e Saber Mais",
            links: [
                {
                    label: "iPhone 17 Pro",
                    href: "https://www.apple.com/br/iphone-17-pro/",
                },
                {
                    label: "iPhone 17",
                    href: "https://www.apple.com/br/iphone-17/",
                },
                {
                    label: "iPhone Air",
                    href: "https://www.apple.com/br/iphone-air/",
                },
                {
                    label: "Comparar modelos",
                    href: "https://www.apple.com/br/iphone/compare/",
                },
                {
                    label: "Acessórios",
                    href: "https://www.apple.com/br/shop/accessories/all",
                },
            ],
        },
        {
            title: "Especificações",
            links: [
                {
                    label: "Características técnicas",
                    href: "#performace",
                },
                {
                    label: "Câmera",
                    href: "#camera",
                },
                {
                    label: "Bateria",
                    href: "#bateria",
                },
                {
                    label: "Display",
                    href: "#bateria",
                },
                {
                    label: "Tv e Casa",
                    href: "https://support.apple.com/pt-br/apple-account?cid=gn-ols-appleaccount-psp-helpful_topics",
                },
            ],
        },

        {
            title: "Suporte",
            links: [
                {
                    label: "Suporte do iPhone",
                    href: "https://support.apple.com/pt-br/iphone?cid=gn-ols-iphone-psp-explore",
                },
                {
                    label: "AppleCare+",
                    href: "https://checkcoverage.apple.com/?locale=pt_BR",
                },
                {
                    label: "IOS 19",
                    href: "https://support.apple.com/pt-br/100100",
                },
                {
                    label: "Cumunidade",
                    href: "https://communities.apple.com/pt/welcome?cid=gn-com-community-lp-get_help",
                },
                {
                    label: "Gerencie um Conta Apple",
                    href: "https://support.apple.com/pt-br/apple-account?cid=gn-ols-appleaccount-psp-helpful_topics",
                },
            ],
        },
        {
            title: "Apple",
            links: [
                {
                    label: "Liderança da Apple",
                    href: "https://www.apple.com/br/leadership/",
                    //"Sobre a Apple", "Newsroom", "Privacidade", "Carreiras"
                },
                {
                    label: "Newsroom",
                    href: "https://www.apple.com/br/newsroom/",
                },
                {
                    label: "Investidores",
                    href: "https://investor.apple.com/investor-relations/default.aspx",
                },
                {
                    label: "Oportunidades de Carreira",
                    href: "https://www.apple.com/careers/br/",
                },
                {
                    label: "Contato",
                    href: "https://www.apple.com/br/contact/",
                },
            ],
        },
    ];

    const buttonLinks = [
        {
            label: "Políticas de privacidade",
            href: "https://www.apple.com/br/legal/privacy/",
        },
        {
            label: "Termos de uso",
            href: "https://www.apple.com/br/legal/internet-services/terms/site.html",
        },
        {
            label: "Avisos Legais",
            href: "https://www.apple.com/br/legal/",
        },
    ];

    const [openSection, setOpenSection] = useState(null);
    const [isMobile, setIsMobile] = useState(false); // 1. NOVO

    useLayoutEffect(() => {
        const checkMobile = () => {
            // Define o isMobile baseado no breakpoint MD do Tailwind (768px)
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile(); // Executa na montagem
        window.addEventListener("resize", checkMobile); // Executa ao redimensionar

        return () => window.removeEventListener("resize", checkMobile); // Limpa o listener
    }, []);

    // Hook para verificar o breakpoint (simulado aqui, mas idealmente usaria window.innerWidth ou um hook de mídia)

    return (
        <Fade
            triggerOnce
            direction="up"
            cascade
            damping={20}
            delay={40}
            duration={3500}
        >
            <footer className="bg-gray-900 border-t border-gray-800 ">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-10 mb-8 md:gap-8">
                        {sections.map((section, index) => (
                            <div key={index}>
                                <div
                                    className="flex justify-between items-center cursor-pointer md:cursor-default"
                                    onClick={() =>
                                        isMobile &&
                                        setOpenSection(
                                            openSection === index ? null : index
                                        )
                                    }
                                >
                                    <h4 className="font-semibold mb-2 md:mb-4 text-white transition-colors cursor-default">
                                        {section.title}
                                    </h4>
                                    <svg
                                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 md:hidden ${
                                            openSection === index
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </div>

                                <ul
                                    className={`space-y-2 text-sm text-gray-400 transition-all duration-300 overflow-hidden ${
                                        isMobile
                                            ? openSection === index
                                                ? "max-h-96 pt-2"
                                                : "max-h-0" // Acordeão no mobile
                                            : "max-h-full" // Sempre visível no desktop
                                    }`}
                                >
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href} // Boa prática: URLs descritivas
                                                className="hover:text-white transition-colors block py-0.5"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-6 pt-6 pb-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <p className="text-xs text-gray-500 cursor-default order-2 md:order-1">
                                &copy; 2025 Apple Inc. Todos os direitos
                                reservados.
                            </p>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm order-1 md:order-2">
                                {buttonLinks.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.href}
                                        className="text-gray-400 hover:text-white"
                                    >
                                        {link.label}
                                        {linkIndex < buttonLinks.length - 1 && (
                                            <span className="ml-6 text-gray-600 hidden sm:inline-block">
                                                |
                                            </span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 cursor-default">
                            Site criado para fins educacionais e de
                            demonstração.
                        </p>
                    </div>
                </div>
            </footer>
        </Fade>
    );
}

export default Footer;
