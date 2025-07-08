import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {cards, chiSiamo, ourValues} from "../costants/index.jsx";


const HrzScroller = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {ourValues.map((value) => {
                        return <Card value={value} key={value.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ value }) => {
    return (
        <div className="h-[300px] w-[800px] bg-slate-50 rounded-xl shadow-2xl">
            <div className="m-4">
                <h1 className="font-preuksa_regular text-5xl text-custom-blue m-5 max-sm:text-2xl max-sm:mx-1 text-center">{value.title}</h1>
                <div className="bg-zinc-500 my-5 h-[2px] w-full"/>
                <p className="font-preuksa_regular text-slate-500 text-justify text-xl">{value.description}</p>
            </div>

        </div>

    );
};

export default HrzScroller;
