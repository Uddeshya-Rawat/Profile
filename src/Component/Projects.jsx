import React from 'react'
import data from '../projectdata'

const Projects = () => {


    console.log(data)
    return (
        <div className='p-6  bg-gradient-to-b from-[#001219] via-[#005f73] to-[#001219] mt-15'>
            <div className='ml-4 mt-12'>
                <h2 className="text-4xl font-bold mb-2 underline underline-offset-2 poetsen-one-regular text-white ">Projects</h2>
                <p className='text-xl font-semibold text-white mt-6'>Check out some of my projects </p>
            </div>
            <div className="w-full px-4 sm:px-8 py-10">
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8">
                    {data.map((project, index) => (
                        <div
                            key={index}
                            className=" rounded-xl shadow-lg w-full sm:w-72 p-4 flex flex-col items-center text-center   hover:shadow-[#0a9396] shadow-[#94d2bd] transition-transform duration-500 ease-in-out hover:scale-105 border-[#94d2bd]"
                        >
                            {/* Project Title */}
                            <h2 className="text-2xl font-semibold mb-3 text-white">
                                {project.title}
                            </h2>

                            {/* Project Image */}
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-48  rounded-md mb-4 sm:hover sm:transition-transform sm:hover:scale-105"
                            />

                            {/* Links */}
                            <div className="flex justify-between gap-6 mt-2">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-white hover:underline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-white hover:underline"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Projects