import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Abiram.jpg";
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div className="mt-20 border-b border-neutral-900 pb-4 lg:mb-35"> <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg: items-start">
                    <motion.h1 
                        initial={{x: -100,opacity: 0}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.5, delay: 0.5}}
                        className="pb-16 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8x1">
                         Abiram Pathmanathan
                    </motion.h1>
                    <motion.span 
                        initial={{x: -100,opacity: 0}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.5, delay: 0.75}}
                        className="bg-gradient-to-r font-medium from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"> Job Seeker Internship
                    </motion.span>

                    <motion.p 
                        initial={{x: -100,opacity: 0}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.5, delay: 1}}
                        className="my-2 max-w-xl py-6 font-medium text-1xl tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
                
            </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                            initial={{x: 100,opacity: 0}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration: 0.5, delay: 1.15}}
                            className="rounded-2xl" src={profilePic} alt="Image"/>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Hero