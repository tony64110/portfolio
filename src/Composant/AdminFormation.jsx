import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaRegSquarePlus } from "react-icons/fa6";
import { PiFloppyDiskBackBold } from 'react-icons/pi'
import { url } from './URL'

export default function AdminFormation() {

    const [annee, setAnnee] = useState('')
    const [etablissement, setEtablissement] = useState('')
    const [diplome, setDiplome] = useState('')
    const [formation, setFormation] = useState([])
    const [isAdd, setIsAdd] = useState(false)


    async function fetchFormation() {

        const response = await fetch(url + '/formation')
        const data = await response.json()
        setFormation(data)
        console.log(data);
    }

    useEffect(() => {
        fetchFormation();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(url + '/formation', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ annee, etablissement, diplome })

        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchFormation();

        }
    }
    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(url + `/formation/${id}`,
            {
                method: 'DELETE'
            }
        )
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchFormation()
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
            <button onClick={addSkill} className='btn btn-primary btn-sm'>Ajouter une formation</button>

            {isAdd && <div className='flex gap-2'>
                <form className='flex' onSubmit={handleSubmit}>                    <div className='flex flex-col'>
                    <h5>Année</h5>
                    <input
                        className="input input-bordered input-info w-full max-w-xs"
                        type="text"
                        onChange={(e) => setAnnee(e.target.value)}
                    />
                </div>
                    <div className='flex flex-col'>
                        <h5>Etablissement</h5>
                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            type="text"
                            onChange={(e) => setEtablissement(e.target.value)}


                        />
                    </div>
                    <div className='flex flex-col'>
                        <h5>Dîplome</h5>
                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            type="text"
                            onChange={(e) => setDiplome(e.target.value)}


                        />
                    </div>

                    <button onClick={handleSubmit} className='btn btn-outline btn-success my-1' title='save'><PiFloppyDiskBackBold /></button>
                    <button onClick={handleCancel} className='btn btn-error' ><FaRegSquarePlus /></button>

                </form>
            </div>}

            <table  >
                {formation && formation.map(item => <tr className='flex  justify-between' >
                    <th>{item.annee} : </th>
                    <td>{item.etablissement}</td>
                    <td>{item.diplome}</td>
                    {/* <td>{item._id}</td> */}
                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-error text-white my-1'><MdDelete /></button></td>


                </tr>

                )}

            </table>
        </div>
    )
} 