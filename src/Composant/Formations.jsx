import React, { useEffect, useState } from 'react'
import { url } from './URL'

export default function Formation() {
    const [formation, setFormation] = useState([])
    async function fetchFormation() {
        const response = await fetch(url + '/formation')
        const data = await response.json()
        setFormation(data)
        console.log(data);
    }
    useEffect(() => {
        fetchFormation();
    }, [])

    return (
<div className='h-auto md:h-40'>
    <div className='flex justify-center'>
        <h3 className="bg-[#15616D] text-[#FDFFFF] font-orbitron rounded-full text-center text-3xl w-full p-4 md:p-5 border-white shadow-2xl">Formations</h3>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 mt-6 md:mt-10'>
        {formation && formation.map(item => (
            <div className='flex flex-col text-center items-center gap-2 md:gap-4' key={item._id}>
                <h5 className='text-lg md:text-xl text-[#FDFFFF]'>{item.diplome}</h5>
                <h5 className='text-lg md:text-xl text-[#FDFFFF]'>{item.etablissement}</h5>
                <h5 className='text-lg md:text-xl text-[#FDFFFF]'>{item.annee}</h5>
            </div>
        ))}
    </div>
</div>

    )
}
