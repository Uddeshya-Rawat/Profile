import React from 'react'
import react from "../assets/React.png"
import javascript from "../assets/javascript.svg"
import tailwind from '../assets/Tailiwnd.png'
import html from "../assets/HTML.png"
import css from "../assets/CSS.png"
import redux from '../assets/Redux.png'
import router from '../assets/Router.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/MongoDB.png'

const Techs = () => {
    return (
        <div className=" mt-12">
            <h2 className="text-4xl font-bold mb-2 underline underline-offset-2 poetsen-one-regular text-white">
                TechStack
            </h2>
            <p className="text-xl font-semibold text-white mt-6">
                These are the Tech Stack I use most often :-
            </p>

            <div className="grid grid-cols-2  md:grid-cols-3 gap-8 mt-9  p-5 rounded-2xl">

                <div className="p-2 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300  shadow-lg shadow-blue-300">
                    <img src={react} alt="React Logo" className=" w-24 h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">React.JS</h3>
                </div>

                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-400">
                    <img src={javascript} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">JavaScript</h3>
                </div>
                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500">
                    <img src={tailwind} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">Tailwind CSS</h3>
                </div>
                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500">
                    <img src={html} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">HTML</h3>
                </div>
                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-700">
                    <img src={css} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">Cascading Style Sheet</h3>
                </div>
                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-500">
                    <img src={redux} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">Redux Toolkit</h3>
                </div>
                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-white">
                    <img src={router} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">React-Router</h3>
                </div>
                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-500">
                    <img src={node} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">Node.js</h3>
                </div>
                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-white">
                    <img src={express} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">Express.JS</h3>
                </div>
                <div className="p-4 flex flex-col items-center  rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-700">
                    <img src={mongo} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-2">Mongo DB</h3>
                </div>
            </div>
        </div>

    )
}

export default Techs