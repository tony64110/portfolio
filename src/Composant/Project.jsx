import React, { useEffect, useState } from 'react'
import { url } from './URL'
export default function Projet() {

    const [projet, setProjet] = useState([])

    async function fetchProjet() {
        const response = await fetch(url + '/projets')

        const data = await response.json()
        console.log(data);
        setProjet(data)

    }
    useEffect(() => {
        fetchProjet();
    }, [])


    return (
<div className='flex flex-col h-full mb-24 md:mb-48 gap-12 md:gap-24'>
    <div className='flex justify-center'>
        <h3 className="bg-[#15616D] text-[#FDFFFF] font-orbitron rounded-full text-center text-3xl w-full p-4 md:p-5 border-white shadow-2xl">Projets</h3>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10'>
        {projet && projet.map(item => (
            <div className='flex flex-col gap-2 md:gap-4 ml-4 md:ml-10 mt-3 z-10' key={item._id}>
                <h5 className='text-lg md:text-xl'>{item.link}</h5>
            </div>
        ))}
        <div>
            <a href="https://tony64110.github.io/projet/">
                <img className="rounded-2xl border-2 border-white w-32 h-32 md:w-48 md:h-48 z-10" src="/photoProjet/Outdoor-Adventure.png" alt="Outdoor Adventure" />
            </a>
            <h6 className='text-center text-white'>HTML - CSS</h6>
        </div>
        <div>
            <a href="https://tony64110.github.io/Jeu-de-tir/">
                <img className="rounded-2xl border-2 border-white w-32 h-32 md:w-48 md:h-48 z-10" src="/photoProjet/Jeudetir.png" alt="Jeu de tir" />
            </a>
            <h6 className='text-center text-white'>HTML - CSS - JS</h6>
        </div>
        <div>
            <a href="https://tony64110.github.io/ToDoList/">
                <img className="rounded-2xl border-2 border-white w-32 h-32 md:w-48 md:h-48 z-10" src="/photoProjet/Todolist.png" alt="ToDo List" />
            </a>
            <h6 className='text-center text-white'>HTML - CSS - JS</h6>
        </div>
        <div>
            <a href="https://tony64110.github.io/Calculatrice/">
                <img className="rounded-2xl border-2 border-white w-32 h-32 md:w-48 md:h-48 z-10" src="/photoProjet/calculatrice.png" alt="Calculatrice" />
            </a>
            <h6 className='text-center text-white'>HTML - CSS - JS</h6>
        </div>
    </div>
</div>

    )
}
