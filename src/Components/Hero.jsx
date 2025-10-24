import React from 'react'
import { chiSiamo } from "../costants/index.jsx";
import { mainVideo } from "../utils/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

const Hero = () => {

    useGSAP(() => {
        gsap.to("#cta", { opacity: 1, delay: 1, y: -50 })
        gsap.to("#textAnim", { opacity: 1, delay: 0.2, y: -50 })
    }, []);

    return (
        <section className="w-full min-h-screen bg-custom-blue flex items-center justify-center py-10 px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">

                <div className="flex flex-col items-center text-center gap-5 lg:w-2/5">
                    <h1 id="textAnim" className="font-preuksa_semibold text-white text-6xl lg:text-8xl opacity-0">CareSharing</h1>
                    <p id="textAnim" className="text-white font-preuksa_regular text-2xl lg:text-4xl opacity-0">Scopriti capace di amare</p>

                    <div id="cta" className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0 mt-5">
                        <a href="#values">
                            <button
                                className="font-bold cursor-pointer text-black bg-white px-6 py-3 rounded-full w-64 max-sm:w-60 text-sm sm:text-base hover:text-custom-blue transition-all font-preuksa_regular hover:drop-shadow-2xl">
                                 I nostri valori
                            </button>
                        </a>

                        <a href="#mission">
                            <button
                                className="font-bold cursor-pointer text-black bg-white px-6 py-3 rounded-full w-64 max-sm:w-60 text-sm sm:text-base hover:text-custom-blue transition-all font-preuksa_regular hover:drop-shadow-2xl">
                                 La nostra missione
                            </button>
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-[100%] mb-10 lg:mb-0 lg:ml-10">
                    <video className="pointer-events-none w-full h-auto rounded-lg" autoPlay muted loop playsInline key={mainVideo}>
                        <source src="src/assets/videos/Timeline 1.mov" type='video/mp4; codecs="hvc1"' />
                        <source src={mainVideo} type="video/webm"/>
                    </video>
                </div>

            </div>
        </section>
    )
}

export default Hero