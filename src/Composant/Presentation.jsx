import React from 'react'


export default function Presentation() {
    return (
        <div className=' h-[70vh] flex  justify-center z-10 font-mono'>
            <div className=' bg-[#15616d65] absolute flex flex-col gap-7  text-white rounded-lg'>

                <div className='w-full flex justify-center items-center gap-20'>
<div>

                        <h2 className='text-[60px] text-center  font-extrabold  '>Anthony Dumartin</h2>
                        <h3 className='text-xl text-center '>En recherche d'alternance de Développeur Full-Stack</h3>
</div>
                    <img className='w-24 h-40 rounded-2xl mt-4' src="./drapeau/photo.jpg" alt="" />
                </div>
                <div className='   flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-5 mb-10'>

                    </div>

                    <h5 className='text-xl h-full flex justify-center items-center w-1/2 text-center  mb-10'>Actuellement étudiant à La Fabrique Numérique Paloise dans le
                        programme Bootcamp Développeur React JS, Je souhaite intégrer votre équipe en alternance pendant la durée
                        de la formation Développeur Web Full Stack de niveau 2</h5>
                </div>

            </div>
        </div>
    )
}
