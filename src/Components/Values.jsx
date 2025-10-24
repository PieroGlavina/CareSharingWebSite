
import 'react-vertical-timeline-component/style.min.css';
import {chiSiamo, logoDescription, ourValues, valuesDescription} from "../costants/index.jsx";
import React from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {mainLogo} from "../utils/index.js";

import CardValore from "./CardValore.jsx";

gsap.registerPlugin(ScrollTrigger);
//DEVI INSTALLARE PROP TIPES MANUALMENTE SENNO NON FUNZIONA

const LogoValore = () => {
    return (
        <div className="group relative w-70 h-70 bg-white shadow-xl rounded-full p-12 overflow-hidden cursor-pointer transition-transform">

            <div
                className="text-xl font-semibold text-center z-10 relative group-hover:opacity-0 transition-opacity duration-300 font-preuksa_regular text-custom-blue">
                <img src="src/assets/images/logoNoText.png" alt="logo" className="flex items-center justify-center"/>
            </div>

            <p className="absolute w-70 h-70 rounded-full inset-0 flex items-center justify-center text-xs text-gray-600 text-center opacity-0 font-preuksa_regular text-slate-500 group-hover:opacity-100 transition-opacity duration-300 px-4 border-2 border-custom-blue bg-white z-20">
                {logoDescription}
            </p>
        </div>
    );
};

const Values = () => {

    return (
        <section id="values" className="relative bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="font-preuksa_regular text-5xl text-custom-blue m-5 max-sm:text-4xl max-sm:mx-1 text-center">
                    I Nostri Valori
                </h2>

                <div className="h-6"></div>
                <div className="bg-zinc-500 my-5 h-[2px] w-full "/>
                <div className="h-6"></div>


                <div className="grid grid-cols-1 mx-5 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {ourValues.slice(0, 3).map((value, index) => (
                        <CardValore
                            key={index}
                            title={value.title}
                            description={value.description}
                        />
                    ))}
                </div>

                <div className="h-6"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
                    {/* Primo valore */}
                    <div className="order-1">
                        <CardValore
                            title={ourValues[3].title}
                            description={ourValues[3].description}
                        />
                    </div>

                    {/* Logo centrale su desktop, ultimo su mobile */}
                    <div className="flex justify-center order-3 md:order-2">
                        <LogoValore/>
                    </div>

                    {/* Secondo valore */}
                    <div className="order-2 md:order-3">
                        <CardValore
                            title={ourValues[4].title}
                            description={ourValues[4].description}
                        />
                    </div>
                </div>


            </div>


        </section>
    )
}
export default Values
