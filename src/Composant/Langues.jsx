import React from 'react'


export default function Langues() {

    return (

        <div className=' rounded-xl  h-auto w-full sm:w-2/3 p-4'>
            <div className='flex justify-center'>

                <h3 className="bg-[#15616D] text-[#FDFFFF] font-orbitron rounded-full text-center  text-3xl sm:text-3xl w-full p-4 sm:p-5 border-white shadow-2xl">Langues</h3>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 sm:mt-5 text-white'>

                <div className='flex justify-center items-center w-44 gap-10'>
                    <img className='w-20 h-20' src="/drapeau/england.png" alt="England" />
                    <h5> A2</h5>
                </div>
                <div className='flex justify-center items-center w-44 gap-10'>
                    <img className='w-20 h-20' src="/drapeau/spain.png" alt="Spain" />
                    <h5> A2</h5>
                </div>


            </div>
        </div>
    )
} 