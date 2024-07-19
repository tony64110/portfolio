import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaRegSquarePlus } from "react-icons/fa6";
import { PiFloppyDiskBackBold } from 'react-icons/pi'
import { url } from './URL'



export default function AdminCompetence() {

    const [skill, setSkill] = useState('')
    const [competences, setCompetences] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    async function fetchCompetence() {
        const response = await fetch(url + '/competence')
        const data = await response.json()
        setCompetences(data)

    }
    useEffect(() => {
        fetchCompetence()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(url + '/competence', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ skill })

        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchCompetence();

        }
    }
    async function handleDelete(id) {
        console.log(id)
        const response = await fetch(url + `/competence/${id}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            fetchCompetence()
        }
    }

    function handleCancel() {
        setIsAdd(false)
    }
    function addSkill() {
        setIsAdd(true)
    }
    return (
        <div className='flex flex-col'>
            <button onClick={addSkill} className='btn btn-primary btn-sm'>Ajouter une competence</button>
            {isAdd && <div className='flex gap-2'>
                <div>


                    <form className='flex' onSubmit={handleSubmit}>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <h5>Compétence</h5>
                                <input
                                    className="input input-bordered input-info w-full max-w-xs"
                                    type="text"
                                    onChange={(e) => setSkill(e.target.value)}


                                />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                        </div >

                        <button className='btn btn-outline btn-success my-1' title='save'><PiFloppyDiskBackBold /></button>

                        <button onClick={handleCancel} className='btn btn-error' ><FaRegSquarePlus /></button>
                    </form>
                </div>
            </div>}
            <table  >
                {competences && competences.map(item => <tr className='flex  justify-between' >
                    <th>{item.skill} </th>
                    {/* <td>{item._id}</td> */}
                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-error text-white my-1'><MdDelete /></button></td>


                </tr>

                )}

            </table>
        </div>
    )
}
