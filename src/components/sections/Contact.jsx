import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com"

export const Contact = () => {

    const [ formData , setFormData ] = useState({

        name: "",
        email: "",
        message: ""
        
    })

    const handleSubmit = (e) => {

        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID , import.meta.env.VITE_TEMPLATE_ID , e.target , import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {

                alert("Your message sent successfuly !");
                setFormData({ name: "" , email: "" , message: "" });

            })
            .catch((error) => {

                alert("Oops Something Went Wrong !")

            });

    }

    return (

        <section id="contact" className="min-h-screen flex items-center justify-center py-20" >

            <RevealOnScroll>

                <div className="px-4 w-150" >
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 leading-right bg-clip-text text-transparent text-center" >
                        Get in Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit} >
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData , name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData , email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                                placeholder="Your message..."
                                onChange={(e) => setFormData({ ...formData , message: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer" >
                            Send Message
                        </button>
                    </form>
                </div>

            </RevealOnScroll>

        </section>

    );

}