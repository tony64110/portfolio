import React, { useEffect, useState } from 'react'
import { url } from './URL'

export default function ExperiencesProfessionnelles() {
    const [experiences, setExperiences] = useState([])
    async function fetchExperiences() {
        const response = await fetch(url + '/experiences')
        const data = await response.json()
        setExperiences(data)
        console.log(data);
    }
    useEffect(() => {
        fetchExperiences();
    }, [])
    return (
<div className='h-auto md:h-60'>
    <div className='flex justify-center'>
        <h3 className="bg-[#15616D] text-[#FDFFFF] font-orbitron rounded-full text-center text-3xl w-auto p-4 md:p-5 border-white shadow-2xl">Expériences professionnelles</h3>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-6 md:mt-10'>
        {experiences && experiences.map(item =>
            <div className='flex flex-col text-center items-center gap-2 md:gap-4' key={item._id}>
                <h5 className='text-lg md:text-xl text-[#FDFFFF]'>{item.entreprise}</h5>
                <h5 className='text-lg md:text-xl text-[#FDFFFF]'>{item.poste}</h5>
                <h5 className='text-lg md:text-xl text-[#FDFFFF]'>{item.annee}</h5>
            </div>
        )}
    </div>
</div>


    )
}
