import React from 'react'
import image from "../assets/image.jpg"

const Main = () => {
    return (
        <div className='mt-16 p-4 sm:p-12'>
  <div className='flex flex-col sm:flex-row sm:gap-20 sm:ml-12 justify-around p-8 gap-17 items-start'>
    {/* Text Section */}
    <div className="flex flex-col gap-3  items-start">
      <h1 className="text-white font-dancing text-5xl sm:text-5xl font-bold poetsen-one-regular">
        Welcome to my portfolio site
      </h1>
      <p className='text-2xl mt-7 text-white'>
        Hi, I'm <span className="text-teal-300 font-semibold">Uddeshya Rawat</span> — a MERN Stack Developer with a passion for building clean, responsive, and accessible user interfaces.
         I specialize in the <strong>MERN Stack</strong> — a powerful combination of <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>. It enables me to build fast, responsive, and fully dynamic web applications using end-to-end JavaScript.
      </p>
    </div>

    {/* Image Section */}
    <div>
      <img src={image} className='rounded-2xl max-w-[250px] sm:max-w-[500px] sm:max-h-[400px]' />
    </div>
  </div>
</div>
    )
}

export default Main