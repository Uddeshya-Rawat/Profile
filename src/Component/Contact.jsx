import React from 'react'


const Contact = () => {
    return (
        <div className=' p-8 ml-5 sm:p-24  '>



            <h2 className="text-4xl font-bold mb-2 underline underline-offset-2 poetsen-one-regular  text-white ">Contact</h2>
            <p className='text-white mt-6 text-xl'> Let's Connect :-</p>



           


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