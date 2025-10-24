import React from 'react'
import { footerLinks } from "../costants/index.jsx";
import { whiteLogo } from "../utils/index.js";

const Footer = () => {
    return (
        <footer className="relative py-5 px-5 bg-neutral-800">
            <div className="screen-max-width">

                <div className="flex mx-4 md:mx-16 justify-between items-center flex-wrap gap-y-6 max-md:flex-col max-md:items-center font-preuksa_regular">
                    <img src={whiteLogo} width={128} height={128} className="max-md:w-24" />

                    <div className="flex flex-row gap-5 max-md:justify-center">
                        {footerLinks.map((element) => (
                            <div className="mx-2" key={element.id}>
                                <a href={element.href}>
                                    <img src={element.src} alt={element.id} width={32} height={32} />
                                </a>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="bg-zinc-500 my-5 h-[1px] w-full" />

                <div className="flex flex-col items-center justify-center text-zinc-500 text-sm text-center px-4 font-preuksa_regular">
                    <p className="font-semibold">Copyright 2025 CareSharing. All Rights Reserved</p>
                    <div className="font-light">
                        Icons made by <a href="https://www.freepik.com" title="Freepik" className="underline">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className="underline">www.flaticon.com</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;