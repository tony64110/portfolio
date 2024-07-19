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
        <div className=' flex flex-col h-full mb-48 gap-24'>
            <div className='flex justify-center '>

                <h3 className="bg-[#15616D] text-[#FDFFFF] font-orbitron rounded-full text-center  text-3xl  w-full p-5 border-white shadow-2xl ">Projets</h3>

            </div>
            <div className='flex flex-row jusitfy-center items-center gap-10 '>
                {projet && projet.map(item =>
                    <div className='flex flex-col gap-4 ml-10 mt-3 z-10' >
                        <h5 className='text-xl'>{item.link} </h5>
                    </div>)}
                <div >

<a href="https://tony64110.github.io/projet/"><img className="rounded-2xl border-2 border-white w-48 h-48 z-10" src="/photoProjet/Outdoor-Adventure.png" alt="" /></a>
<h6 className='text-center text-white'>HTML - CSS</h6>
</div>
                <div >

                    <a href="https://tony64110.github.io/Jeu-de-tir/"><img className="rounded-2xl border-2  border-white w-48 h-48 z-10" src="/photoProjet/Jeudetir.png" alt="" /></a>
<h6 className='text-center text-white'>HTML - CSS - JS</h6>
                
                </div>
<div>

<a href="https://tony64110.github.io/ToDoList/"><img className="rounded-2xl border-2 border-white w-48 h-48 z-10 " src="/photoProjet/Todolist.png" alt="" /></a>
<h6 className='text-center text-white'>HTML - CSS - JS </h6>




</div>
<div>

<a href="https://tony64110.github.io/Calculatrice/"><img className="rounded-2xl border-2 border-white w-48 h-48 z-10" src="/photoProjet/calculatrice.png" alt="" /></a>
<h6 className='text-center text-white'>HTML - CSS - JS</h6>
</div>
            </div>
        </div>
    )
}
