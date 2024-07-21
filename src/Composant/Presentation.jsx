import React from 'react'


export default function Presentation() {
    return (
        <div className='h-[70vh] flex justify-center z-10 font-mono'>
        <div className='bg-[#15616d65] absolute flex flex-col gap-7 text-white rounded-lg p-4 md:p-6 lg:p-8'>
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20'>
                <div>
                    <h2 className='text-4xl md:text-[60px] text-center font-extrabold'>Anthony Dumartin</h2>
                    <h3 className='text-lg md:text-xl text-center'>En recherche d'alternance de Développeur Full-Stack</h3>
                </div>
                <img className='w-24 h-24 md:w-24 md:h-40 rounded-2xl mt-4 md:mt-0' src="./drapeau/photo.jpg" alt="Photo d'Anthony Dumartin" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-5 mb-4 md:mb-10'></div>
                <h5 className='text-lg md:text-xl flex justify-center items-center w-full md:w-1/2 text-center mb-4 md:mb-10'>
                    Actuellement étudiant à La Fabrique Numérique Paloise dans le programme Bootcamp Développeur React JS, Je souhaite intégrer votre équipe en alternance pendant la durée de la formation Développeur Web Full Stack de niveau 2
                </h5>
            </div>
        </div>
    </div>
    
    )
}
