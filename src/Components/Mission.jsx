import { ourMission } from "../costants/index.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurMission = () => {
    useGSAP(() => {
        gsap.to("#missionTitle", {
            opacity: 1,
            delay: 0.5,
            y: -50,
            scrollTrigger: {
                trigger: "#missionTitle",
                start: "top bottom",
            }
        });

        gsap.to("#missionLine", {
            opacity: 1,
            delay: 1,
            y: -20,
            scrollTrigger: {
                trigger: "#missionLine",
                start: "top bottom",
            }
        });

        gsap.to("#missionText", {
            opacity: 1,
            delay: 1.3,
            y: -50,
            scrollTrigger: {
                trigger: "#missionText",
                start: "top bottom",
            }
        });
    }, []);

    return (
        <section id="mission" className="relative w-full min-h-[60vh] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-screen-lg flex flex-col items-center gap-6">
                <h1 id="missionTitle" className="font-preuksa_regular text-4xl md:text-5xl text-custom-blue text-center opacity-0">
                    Ti senti davvero parte di una comunità?
                </h1>

                <div id="missionLine" className="bg-zinc-500 h-[2px] w-full opacity-0" />

                <p id="missionText" className="font-preuksa_regular text-slate-500 text-justify text-lg md:text-2xl opacity-0 px-5 py-10">
                    {ourMission}
                </p>
            </div>
        </section>
    );
};

export default OurMission;