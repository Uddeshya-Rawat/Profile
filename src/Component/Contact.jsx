import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className=' p-8 ml-5  '>



            <h2 className="text-4xl font-bold mb-2 underline underline-offset-2 poetsen-one-regular text-white ">Contact</h2>
            <p className='text-white mt-6 text-xl'> Let's Connect :-</p>



            <div className="flex  mt-5   sm:space-x-4 sm:mt-6 w-full  sm:justify-around flex-col sm:flex-row gap-4">

                <a
                    href="https://www.linkedin.com/in/uddeshya-rawat-ab99982a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4  rounded-xl bg-white/5 hover:bg-white/10 transition text-white"
                >
                    <FaLinkedin size={28} />
                    <div>
                        <h3 className="font-semibold">LinkedIn</h3>
                        <p className="text-sm text-gray-300">Connect professionally</p>
                    </div>
                </a>


                <a
                    href="https://github.com/Uddeshya-Rawat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4  rounded-xl bg-white/5 hover:bg-white/10 transition text-white "
                >
                    <FaGithub size={28} />
                    <div>
                        <h3 className="font-semibold">GitHub</h3>
                        <p className="text-sm text-gray-300">Check out my code</p>
                    </div>
                </a>


                {/* Email Card */}
                <a
                    href="mailto:uddeshyarawat4@email.com"
                    className="flex p-4  items-center gap-4  rounded-xl bg-white/5 hover:bg-white/10 transition text-white"
                >
                    <FaEnvelope size={28} />
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-sm text-gray-300">Drop a Message</p>
                    </div>
                </a>
            </div>



            {/* FORM */}

            <form
                action="https://formspree.io/f/mblovnye"
                method="POST"
                className="max-w-md mx-auto space-y-4 p-4   rounded-lg shadow mt-15"
            >
                <h2 className="text-2xl font-semibold text-white">Contact Me</h2>
                <label for="name" className='text-white'>Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full p-2 border rounded text-white"
                />
                <label for="email" className='text-white'>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full p-2 border rounded text-white"
                />
                <label for="message" className='text-white'>Message</label>
                <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full p-2 border rounded h-32 text-white"
                />

                <button
                    type="submit"
                    className=" text-white px-4 py-2 rounded shadow-sm shadow-white"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact