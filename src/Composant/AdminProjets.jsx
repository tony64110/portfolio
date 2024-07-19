import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaRegSquarePlus } from "react-icons/fa6";
import { PiFloppyDiskBackBold } from 'react-icons/pi'
import { url } from './URL'

export default function AdminProjet() {


    const [link, setLink] = useState('')
    const [projet, setProjet] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    async function fetchProjet() {

        const response = await fetch(url + '/projets')
        const data = await response.json()
        setProjet(data)
        console.log(data);
    }

    useEffect(() => {
        fetchProjet();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(url + '/projets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ link })

        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchProjet();

        }
    }
    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(url + `/projets/${id}`,
            {
                method: 'DELETE'
            }
        )
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchProjet()
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
            <button onClick={addSkill} className='btn btn-primary btn-sm'>Ajouter un projet</button>

            {isAdd && <div className='flex gap-2'>

                <form className='flex' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <h5>Projets</h5>
                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            type="text"
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <button className='btn btn-outline btn-success my-1' title='save'><PiFloppyDiskBackBold /></button>
                    <button onClick={handleCancel} className='btn btn-error' ><FaRegSquarePlus /></button>

                </form>
            </div>}


            <table  >
                {projet && projet.map(item => <tr className='flex  justify-between' >
                    <td>{item.link}</td>
                    {/* <td>{item._id}</td> */}
                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-error text-white my-1'><MdDelete /></button></td>


                </tr>

                )}

            </table>
        </div>
    )
} 
