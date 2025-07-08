
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {chiSiamo, ourValues, valuesDescription} from "../costants/index.jsx";
import {leafVideo, leaveIcon, mainVideo} from "../utils/index.js";
import React from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
//DEVI INSTALLARE PROP TIPES MANUALMENTE SENNO NON FUNZIONA

const Values = () => {

    useGSAP(() => {
        gsap.to("#titleAnim",{
            opacity:1,
            delay:1,
            y:-50,
            scrollTrigger:{
                trigger: "#titleAnim",
                start: "top bottom",
            }

        })

    }, []);

    return (
        <section id="values" className="w-full bg-white flex items-center justify-center">

            <div className="h-full w-1/2">
                <VerticalTimeline lineColor={"#21AD9D"}>
                    {ourValues.map((value) => (
                        <VerticalTimelineElement
                            key={value.id}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <video className="pointer-events-none object-contain" autoPlay muted loop playsInline={true} key={leafVideo}>
                                        <source src={leafVideo} type="video/webm"/>
                                    </video>
                                </div>

                            }
                            iconStyle={{background: "#ffffff", width: 200, height: 200}}
                        >
                            <div>
                                <h3 className="text-black text-xl font-preuksa_semibold">{value.title}</h3>
                                <p className="text-black font-preuksa_regular ">{value.description}</p>
                            </div>
                        </VerticalTimelineElement>
                    ))}

                </VerticalTimeline>

            </div>





        </section>
    )
}
export default Values
