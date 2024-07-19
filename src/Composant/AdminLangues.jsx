import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaRegSquarePlus } from "react-icons/fa6";
import { PiFloppyDiskBackBold } from 'react-icons/pi'
import { url } from './URL'

export default function AdminLangues() {

    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [langues, setLangues] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    async function fetchLangues() {

        const response = await fetch(url + '/langues')
        const data = await response.json()
        setLangues(data)
        console.log(data);
    }

    useEffect(() => {
        fetchLangues();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(url + '/langues', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, level })

        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchLangues();

        }
    }
    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(url + `/langues/${id}`,
            {
                method: 'DELETE'
            }
        )
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchLangues()
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
            <button onClick={addSkill} className='btn btn-primary btn-sm'>Ajouter une langue</button>

            {isAdd && <div className='flex gap-2'>

                <form className='flex' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <h5>Langue</h5>
                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h5>Niveau</h5>
                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            type="text"
                            onChange={(e) => setLevel(e.target.value)}


                        />
                    </div>

                    <button className='btn btn-outline btn-success my-1' title='save'><PiFloppyDiskBackBold /></button>
                    <button onClick={handleCancel} className='btn btn-error' ><FaRegSquarePlus /></button>

                </form>
            </div>}


            <table  >
                {langues && langues.map(item => <tr className='flex  justify-between' >
                    <th>{item.name} : </th>
                    <td>{item.level}</td>
                    {/* <td>{item._id}</td> */}
                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-error text-white my-1'><MdDelete /></button></td>


                </tr>

                )}

            </table>
        </div>
    )
} 
