import { Fade } from "react-awesome-reveal";
import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#design", label: "Design" },
        { href: "#camera", label: "Câmera" },
        { href: "#performace", label: "Performace" },
        { href: "#cores", label: "Cores" },
    ];

    const buyLink = {
        href: "https://www.apple.com/br/shop/buy-iphone/iphone-17-pro",
        label: "Comprar",
        isButton: true,
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const renderLinks = (isMobileView = false) => (
        <>
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className={`${
                        isMobileView
                            ? "block w-full py-3 text-lg"
                            : "hidden md:inline-block"
                    } 
                                hover:text-gray-300 transition-colors text-white`}
                    onClick={isMobileView ? toggleMenu : undefined}
                >
                    {link.label}
                </a>
            ))}

            <a
                href={buyLink.href}
                className={`${
                    buyLink.isButton
                        ? "bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer transition-colors text-white font-medium"
                        : "hover:text-gray-300 transition-colors"
                } 
                ${isMobileView ? "block w-full text-center mt-4" : ""}`}
            >
                {buyLink.label}
            </a>
        </>
    );

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 text-gray-200">
            <Fade triggerOnce direction="down" duration={1000}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a
                        href="#"
                        className="text-xl font-bold text-white hover:text-gray-300"
                    >
                        iPhone 17 Pro
                    </a>

                    <div className="hidden md:flex items-center justify-center gap-8">
                        {renderLinks(false)}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <div
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                                isOpen
                                    ? "rotate-45 translate-y-[0.375rem]"
                                    : "rotate-0"
                            }`}
                        ></div>
                        <div
                            className={`w-6 h-0.5 bg-white transition-opacity duration-300 my-1 ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        ></div>
                        <div
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                                isOpen
                                    ? "-rotate-45 -translate-y-[0.375rem]"
                                    : "rotate-0"
                            }`}
                        ></div>
                    </button>
                </div>

                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                            ? "max-h-screen border-t border-gray-700"
                            : "max-h-0"
                    }`}
                >
                    <div className="flex flex-col items-center py-4 px-6 bg-black/90">
                        {renderLinks(true)}
                    </div>
                </div>
            </Fade>
        </nav>
    );
}

export default NavBar;
