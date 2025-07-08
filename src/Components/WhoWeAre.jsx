import React, { useEffect, useState } from 'react';
import { chiSiamo } from "../costants/index.jsx";
import ParticleNetwork from "../Animations/ParticleNetwork.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WhoWeAre = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth - 20,
        height: window.innerHeight - 20
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth - 20,
                height: window.innerHeight - 20
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useGSAP(() => {
        gsap.to("#whowearetitle", {
            opacity: 1,
            delay: 0.5,
            y: -50,
            scrollTrigger: {
                trigger: "#whowearetitle",
                start: "top bottom",
            }
        });

        gsap.to("#whoweareline", {
            opacity: 1,
            delay: 1,
            y: -20,
            scrollTrigger: {
                trigger: "#whoweareline",
                start: "top bottom",
            }
        });

        gsap.to("#whoweareparagraph", {
            opacity: 1,
            delay: 1.3,
            y: -50,
            scrollTrigger: {
                trigger: "#whoweareparagraph",
                start: "top bottom",
            }
        });

    }, []);

    return (
        <section id="whoweare" className="relative w-full min-h-screen flex items-center justify-center px-4 py-10">

            <div className="absolute inset-0 -z-10 pointer-events-none">
                <ParticleNetwork width={dimensions.width} height={dimensions.height} />
            </div>

            <div className="w-full max-w-screen-lg flex flex-col items-center gap-6 py-10">
                <h1 id="whowearetitle" className="font-preuksa_regular text-4xl md:text-5xl text-custom-blue text-center opacity-0 px-2">
                    Quante volte hai pensato di voler dare una mano ma non sapevi da dove cominciare?
                </h1>

                <div id="whoweareline" className="bg-zinc-500 h-[2px] w-full opacity-0" />

                <p id="whoweareparagraph" className="font-preuksa_regular text-slate-500 text-justify text-lg md:text-2xl opacity-0 px-5 py-10">
                    {chiSiamo}
                </p>
            </div>
        </section>
    );
}

export default WhoWeAre;