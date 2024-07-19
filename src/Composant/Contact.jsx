import { useState, useEffect } from 'react'
import { url } from './URL'

export default function Contact() {

    const [contact, setContact] = useState([]) // oussama il ecrit useState([])

    async function getContact() { // fonction asynchrone
        const response = await fetch(url + '/contact') // on peut mettre directement l'adresse url
        const data = await response.json()
        console.log(data)
        setContact(data);

    }

    useEffect(() => { // on appelle la fonction avec useEffect
        getContact()
    }, []) // pour eviter qu'il appelle plusieurs fois on met un tableau vide et comme ça il appelle une seule fois

    return (
        <>
            <div >
                {contact.length > 0 &&
                    <> <div className='bg-[#15616d75] rounded-xl  w-full p-4 gap-20' >
                        <div className=' flex justify-center'>

                            <h3 className="bg-[#15616db5] text-[#FDFFFF] font-orbitron rounded-full text-center  text-3xl sm:text-3xl w-full p-4 sm:p-5 border-white shadow-2xl">Contact</h3>
                        </div>
                        <div className='flex items-center justify-center gap-10 text-xl font-mono text-white mt-10'>

                            <div >
                                <h5 className='flex flex-row  '> {contact[0].email}</h5>
                            </div>
                            <div >
                                <h5 className='flex flex-row  '> {contact[0].tel}</h5>
                            </div>
                            <div >
                                <h5 className='flex flex-row '> {contact[0].adresse}</h5>
                            </div>
                        </div>
                    </div>
                    </>
                }
            </div >
        </>
    )
}