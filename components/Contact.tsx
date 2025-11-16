"use client";

import React, { useState, FormEvent } from "react";
import { Home, Phone, Mail } from "lucide-react"; // ⬅ Lucide Icons


interface ContactInfoItem {
    icon: React.ReactNode;
    data: string[];
}

const contactInfoList: ContactInfoItem[] = [
    {
        icon: <Home className="text-7xl opacity-[0.15] w-[80px]" />,
        data: ["28/1 Shishir Bila", "Rajshahi, Bangladesh"],
    },
    {
        icon: <Phone className="text-7xl opacity-[0.15] w-[80px]" />,
        data: ["+880 1303 186546", "+880 1727 132696"],
    },
    {
        icon: <Mail className="text-7xl opacity-[0.15] w-[80px]" />,
        data: ["manjirul2696@gmail.com", "mjshishirf@.com"],
    },
];

const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;

        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <form
            className="md:pr-12"
            noValidate
            data-validated={validated}
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <input
                    type="text"
                    required
                    className="min-h-[48px] leading-[48px] border border-transparent rounded-xl focus:outline-none focus:border focus:border-white w-full px-5"
                    placeholder="Enter Name"
                />
            </div>

            <div className="mb-4">
                <input
                    type="email"
                    required
                    className="min-h-12 leading-12 border border-transparent rounded-xl focus:outline-none focus:border focus:border-white w-full px-5"
                    placeholder="Enter Email"
                />
            </div>

            <div className="mb-4">
                <textarea
                    name="message"
                    required
                    className="min-h-12 leading-12 border border-transparent rounded-xl focus:outline-none focus:border focus:border-white w-full px-5"
                    placeholder="Enter Message"
                    rows={4}
                ></textarea>
            </div>

            <div className="text-end">
                <button
                    type="submit"
                    className="px-4 py-2 text-xl text-white transition rounded-md h-14 w-44 hover:bg-AquaDeep font-bold ring-2 ring-white"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-10 md:py-14 text-white overflow-hidden"
        >
            <div className="container relative">
                <div className="grid grid-cols-12">
                    {/* LEFT SIDE INFO */}
                    <div className="col-span-12 lg:col-span-6 mb-4 lg:mb-0">
                        <div className="h-full flex items-center">
                            <div className="max-w-full bg-Barberry shadow-2xl h-2/3 relative z-2 rounded-tr-[100px] rounded-br rounded-bl-[100px] mx-auto">
                                <div className="grid grid-cols-12">
                                    <div className="items-center md:col-span-5 col-span-6">
                                        <address className="mt-5 pl-5">
                                            {contactInfoList.map((info, i) => (
                                                <div className="flex items-center text-AquaDeep mb-8" key={i}>
                                                    <div className="text-red-700 z-1">{info.icon}</div>
                                                    <div className="ml-[-26px]">
                                                        {info.data.map((row, j) => (
                                                            <p className="tracking-widest not-italic mb-0" key={j}>
                                                                {row}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="col-span-12 text-AquaDeep lg:col-span-6 xl:col-span-5 px-6 relative">
                        <div className="absolute bg-Barberry top-0 left-0 lg:-left-[20%] right-0 bottom-0 shadow-2xl rounded-tl rounded-tr-[30px] rounded-br-[150px] rounded-bl-[50px]"></div>

                        <div className="relative rounded my-12">
                            <div className="mb-12">
                                <div className="col-span-12 w-full text-center sm:text-start mb-12">
                                    <h2 className="font-bold text-4xl text-center md:text-[55px] leading-[45px] md:leading-[70px] mb-0">
                                        Stay In Touch
                                    </h2>
                                    <div className="w-40 h-1 items-center bg-AquaDeep my-10 mx-auto mb-16"></div>
                                    <p className="text-sm leading-7 font-normal uppercase tracking-widest opacity-90 md:ml-[5%]">
                                        Have any question? Drop us a message.
                                    </p>
                                </div>
                            </div>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Contact;
