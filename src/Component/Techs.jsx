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
        <div className=" sm:mt-30 mt-25 ">
            <h2 className="text-4xl font-bold mb-2 underline underline-offset-2 poetsen-one-regular text-white">
                TechStack
            </h2>
            <p className="text-xl font-semibold text-white mt-6">
                These are the Tech Stack I use most often :-
            </p>

            <div className="grid grid-cols-2  md:grid-cols-4 gap-8 mt-9  p-5">

                <a href="https://react.dev/" target="blank"><div className="floating flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={react} alt="React Logo" className=" w-30 h-24  rounded-2xl mt-2" />
                    <h3 className="text-white mt-1 text-2xl">React.JS</h3>
                </div>
</a>
             <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank">   <div className="floating2 flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={javascript} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-1 text-2xl">JavaScript</h3>
                </div></a>
                <a href="https://tailwindcss.com/docs/installation/using-vite" target="blank"><div className="floating flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={tailwind} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-1 text-2xl">Tailwind CSS</h3>
                </div></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="blank"><div className="floating2 flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={html} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-1 text-2xl">HTML</h3>
                </div></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank"><div className="floating2 flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={css} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-1 text-2xl">Cascading Style Sheet</h3>
                </div></a>
                <a href="https://redux-toolkit.js.org/" target="blank"><div className="floating2 flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={redux} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-1 text-2xl">Redux Toolkit</h3>
                </div></a>
                <a href="https://reactrouter.com/" target="blank"><div className="floating flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={router} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-1 text-2xl">React-Router</h3>
                </div></a>
                <a href="https://nodejs.org/docs/latest/api/" target="blank"> <div className="floating2 flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={node} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-1 text-2xl">Node.js</h3>
                </div></a>
                <a href="https://expressjs.com/" target="blank"><div className="floating flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-2xl">
                    <img src={express} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl" />
                    <h3 className="text-white mt-1 text-2xl">Express.JS</h3>
                </div></a>
                <a href="https://www.mongodb.com/docs/" target='blank'><div className="floating2 flex flex-col  justify-center text-center items-center sm:hover:shadow-2xl sm:hover:shadow-white sm:hover:rounded-xl">
                    <img src={mongo} alt="JavaScript Logo" className=" w-30  h-24  rounded-2xl " />
                    <h3 className="text-white mt-1 text-2xl">Mongo DB</h3>
                </div></a>
            </div>
        </div>

    )
}

export default Techs