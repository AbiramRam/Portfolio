import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
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
                Projects
            </motion.h1>

            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.3 }} // Stagger each project item
                    >
                        {/* Left Side (Image) */}
                        <motion.div
                            className="w-full lg:w-1/4"
                            variants={leftVariant}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.5 }} // Stagger image animation
                        >
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded"
                            />
                        </motion.div>

                        {/* Right Side (Details) */}
                        <motion.div
                            className="w-full max-w-xl lg:w-3/4"
                            variants={rightVariant}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.7 }} // Stagger details animation
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>

                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="mr-2 rounded bg-neutral-900 px-2 text-blue-900"
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

export default Projects;
