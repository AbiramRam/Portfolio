import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    // Animation variants for sliding in
    const leftVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const rightVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.3 }} // Stagger each experience's appearance
                    >
                        {/* Left Side (Year) */}
                        <motion.div
                            className="w-full lg:w-1/4"
                            variants={leftVariant}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.5 }} // Stagger left side
                        >
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>

                        {/* Right Side (Details) */}
                        <motion.div
                            className="w-full max-w-xl lg:w-3/4"
                            variants={rightVariant}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.7 }} // Stagger right side
                        >
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            {experience.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
