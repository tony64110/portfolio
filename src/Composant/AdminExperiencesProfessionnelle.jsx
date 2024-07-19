import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaRegSave } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { url } from './URL'


export default function AdminExperiencesProfessionnelles() {

    const [annee, setAnnee] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [poste, setPoste] = useState('')
    const [experiences, setExperiences] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    async function fetchExperiences() {

        const responses = await fetch(url + '/experiences')
        const data = await responses.json()
        setExperiences(data)

        console.log(data);
    }
    useEffect(() => {
        fetchExperiences();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await fetch(url + '/experiences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ annee, entreprise, poste })
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);

            fetchExperiences()
        }
    }

    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(url + `/experiences/${id}`,
            {
                method: 'DELETE'
            }
        )
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchExperiences()
        }
    }


    function handleCancel() {
        setIsAdd(false)
    }
    function addSkill() {
        setIsAdd(true)
    }
    return (
        <div className='flex flex-col gap-1'>

            <button onClick={addSkill} className='btn btn-primary btn-sm'>Ajouter une Expérience profesionnelle</button>

            {isAdd && <div className='flex gap-2' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <h5>Année</h5>

                    <input
                        placeholder='Ajouter une nouvelle compétence'
                        className="input input-bordered input-primary w-full"
                        type="text"
                        onChange={(e) => setAnnee(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <h5>Entreprise</h5>

                    <input
                        placeholder='Ajouter une nouvelle compétence'
                        className="input input-bordered input-primary w-full"
                        type="text"
                        onChange={(e) => setEntreprise(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <h5>Poste</h5>

                    <input
                        placeholder='Ajouter une nouvelle compétence'
                        className="input input-bordered input-primary w-full"
                        type="text"
                        onChange={(e) => setPoste(e.target.value)} />
                </div>
                <button onClick={handleSubmit} className='btn btn-primary' ><FaRegSave /></button>
                <button onClick={handleCancel} className='btn btn-error' ><FaRegSquarePlus /></button>


            </div>}

            <table  >
                {experiences && experiences.map(item => <tr className='flex  justify-between' >
                    <th>{item.annee} : </th>
                    <td>{item.entreprise}</td>
                    <td>{item.poste}</td>

                    {/* <td>{item._id}</td> */}
                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-error text-white my-1'><MdDelete /></button></td>


                </tr>

                )}

            </table>
        </div>
    )
}