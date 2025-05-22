import React from 'react'
import image from "../assets/image.jpg"

const Main = () => {
    return (
        <div className='mt-16 p-16'>
            <div className='flex flex-col sm:flex-row sm:gap-8 sm:justify-around
            p-8  gap-7 '>
                <div className=" flex sm:justify-center   ">
                    <h1 className="text-white font-dancing text-4xl sm:text-5xl l font-bold poetsen-one-regular">
                        Hello, My name is <span className="text-teal-600">Uddeshya Rawat</span> <br />
                        and I am a Web Developer
                    </h1>
                </div>
                <div className=''>
                    <img src={image} className=' rounded-2xl max-w-[250px]  sm:max-w-[500px] sm:max-h-[400px]' />
                </div>
            </div>
        </div>
    )
}

export default Main