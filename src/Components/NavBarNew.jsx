import React, { useState } from 'react';
import { instagramLogo, mainLogo, tiktokLogo } from "../utils/index.js";
import { navLink, navList } from "../costants/index.jsx";
import CustomButton from "./CustomButton.jsx";
import { Menu, X } from 'lucide-react'; // icone hamburger e chiusura

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full py-5 px-5 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
            <nav className="flex w-full screen-max-width items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <a className="cursor-pointer" href="">
                        <h1 className="text-custom-blue text-3xl font-preuksa_semibold ml-5 max-md:text-lg">CARESHARING</h1>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1 justify-center items-center">
                    {navList.map((nav) => (
                        <a href={nav.href} key={nav.id}>
                            <div className="px-6 text-xl font-preuksa_regular cursor-pointer hover:text-custom-blue transition-all">
                                {nav.title}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Social + Button */}
                <div className="hidden lg:flex items-center gap-5 mr-5">
                    {navLink.map((link) => (
                        <a href={link.href} key={link.id}>
                            <img src={link.src} alt={link.id} width={28} height={28} />
                        </a>
                    ))}
                    <a href="#contact">
                        <CustomButton title={"Contattaci!"} />
                    </a>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white shadow-md p-5 z-40">
                    <div className="flex flex-col items-center gap-4 ">
                        {navList.map((nav) => (
                            <a
                                key={nav.id}
                                href={nav.href}
                                className="text-lg font-preuksa_regular hover:text-custom-blue transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {nav.title}
                            </a>
                        ))}

                        <div className="flex items-center gap-10">
                            {navLink.map((link) => (
                                <a href={link.href} key={link.id}>
                                    <img src={link.src} alt={link.id} width={28} height={28}/>
                                </a>
                            ))}
                            <a href="#contact">
                                <CustomButton title={"Contattaci!"}/>
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;