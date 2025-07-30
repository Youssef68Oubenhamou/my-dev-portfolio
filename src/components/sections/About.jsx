import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {


    const frontendSkills = ["CSS" , "JavaScript" , "React JS" , "TypeScript" , "Bootstrap" , "Tailwindcss"];

    const backendSkills = ["Python" , "Node JS" , "Express JS" , "MongoDB" , "SQL" , "PHP" , "Laravel"];

    return (

        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all" >
                        <p className="text-gray-300 mb-6" >
                            Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all" >
                                <h3 className="text-xl font-bold mb-4" >Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {

                                        frontendSkills.map((tech , key) => (

                                            <span
                                                key={key}
                                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-pointer"
                                            >
                                                {tech}
                                            </span>

                                        ))

                                    }
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all" >
                                <h3 className="text-xl font-bold mb-4" >Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {

                                        backendSkills.map((tech , key) => (

                                            <span
                                                key={key}
                                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
                                            >
                                                {tech}
                                            </span>

                                        ))

                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4" >
                                👨🏻‍💻 Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2" >
                                <li>
                                    <strong>
                                        High School degree in Physics
                                        (2020-2021)
                                    </strong>
                                </li>
                                <li>
                                    <strong>
                                        Technical Specialized degree in Full Stack Web Development
                                        (2022-2024)
                                    </strong>
                                </li>
                                <li>
                                    <strong>
                                        MERN Stack Development Bootcamp at GOMYCODE
                                        (2025/6 months)
                                    </strong>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4" >
                                💼 Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300" >
                                <div>
                                    <h4 className="font-semibold" >Remote Intership at Concept PLV (2024/one month)</h4>
                                    <p>Developed a website to represent the designs and works made by the startup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>

    )

}