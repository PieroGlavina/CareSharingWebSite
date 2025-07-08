import React, {useEffect, useRef, useState} from 'react';
import { contactVideoDesktop, contactVideoMobile } from "../utils/index.js";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const formRef = useRef(null);
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Name",
                from_email: form.email,
                to_email: "1f.glavinapiero@gmail.com",
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    ).then(() => {
            setIsLoading(false);
            setForm({name: "", email: "", message: ""});
        }).catch((error) => {
            setIsLoading(false);
            alert(error)
        })



    }

    return (
        <section className="relative flex items-center justify-center min-h-[80vh] px-4 py-10">
            {/* Video di sfondo */}
            <video
                className="absolute w-full h-full object-cover pointer-events-none -z-10"
                autoPlay
                muted
                playsInline
                loop
                key={isMobile ? contactVideoMobile : contactVideoDesktop}
            >
                <source src={isMobile ? contactVideoMobile : contactVideoDesktop} type="video/mp4" />
            </video>

            {/* Form */}
            <div className="flex flex-col w-full max-w-5xl bg-white/80 p-8 rounded-2xl shadow-xl">
                <form
                    id="contact"
                    className="flex flex-col gap-7"
                    onSubmit={handleSubmit}

                >
                    <label className="text-black font-semibold">
                        Nome
                        <input
                            type="text"
                            name="name"
                            placeholder="Inserisci il tuo nome"
                            className="input w-full mt-1"
                            required
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="text-black font-semibold">
                        Indirizzo Email
                        <input
                            type="email"
                            name="email"
                            placeholder="Inserisci la tua email"
                            className="input w-full mt-1"
                            required
                            value={form.email}
                            onChange={handleChange}

                        />
                    </label>

                    <label className="text-black font-semibold">
                        Messaggio
                        <textarea
                            placeholder="Cosa possiamo fare per te?"
                            rows={4}
                            name="message"
                            className="input w-full mt-1"
                            required
                            value={form.message}
                            onChange={handleChange}

                        />
                    </label>

                    <button
                        type="submit"
                        className="btn bg-custom-blue text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-all"
                        disabled={isLoading}
                    >
                        {isLoading ? "Invio in corso..." : "Invia"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;