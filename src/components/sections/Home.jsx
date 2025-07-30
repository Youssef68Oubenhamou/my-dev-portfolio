import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {

    return (

        <section id="home" className="min-h-screen flex items-center justify-center relative" >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-cyan-400 leading-right bg-clip-text text-transparent " >
                        Hi , I'm Youssef Oubenhamou
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        As a passionate full-stack developer, I specialize in building scalable , secure , and high-performance
                        web applications. I enjoy working across the entire stack — from designing efficient backend systems and
                        APIs to crafting intuitive, responsive frontend interfaces. With a strong focus on system architecture , I strive to build
                        software that's not only functional but also robust and maintainable.
                    </p>
                    <div className="flex justify-center space-x-4">

                        <a href="#projects" className="bg-green-500 text-white py-3 px-6 rouded transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_grba(59, 130 , 246 , 0.4)]">View Projects</a>
                        <a href="#contact" className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_grba(59, 130 , 246 , 0.2)] hover:bg-green-500/10">Contact Me</a>

                    </div>
                </div>
            </RevealOnScroll>
        </section>

    )

}