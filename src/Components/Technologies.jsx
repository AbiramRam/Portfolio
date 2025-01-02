import { RiReactjsLine } from "react-icons/ri"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa"; 
import { FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
    // Animation settings for floating effect with different delays
    const createFloatAnimation = (delay) => ({
        y: [0, -15, 0], // Moves up and down
        transition: {
            duration: 2, // 2 seconds for a full cycle
            repeat: Infinity, // Infinite loop
            ease: "easeInOut", // Smooth easing
            delay, // Individual delay for staggered animations
        },
    });

    return (
        <div className="border-b border-neutral-700 pb-24">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                    animate={createFloatAnimation(0)}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div 
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                    animate={createFloatAnimation(0.2)}
                >
                    <TbBrandNextjs className="text-7xl text-white" />
                </motion.div>

                <motion.div 
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                    animate={createFloatAnimation(0.4)}
                >
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>

                <motion.div 
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                    animate={createFloatAnimation(0.6)}
                >
                    <DiMysql className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div 
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                    animate={createFloatAnimation(0.8)}
                >
                    <DiPhp className="text-7xl text-indigo-600" />
                </motion.div>

                <motion.div 
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                    animate={createFloatAnimation(1)}
                >
                    <FaJava className="text-7xl text-red-600" />
                </motion.div>

                <motion.div 
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                    animate={createFloatAnimation(1.2)}
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>

                <motion.div 
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                    animate={createFloatAnimation(1.4)}
                >
                    <FaChartBar className="text-7xl text-purple-500" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
