import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaRegSquarePlus } from "react-icons/fa6";
import { PiFloppyDiskBackBold } from 'react-icons/pi'
import { url } from './URL';

export default function AdminCentredinteret() {

    const [activite, setActivite] = useState('')
    const [centredinteret, setCentredinteret] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    async function fetchCentredinteret() {
        const response = await fetch(url + '/centredinteret')
        const data = await response.json()
        console.log(data);
        setCentredinteret(data)

    }

    useEffect(() => {
        fetchCentredinteret();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(url + '/centredinteret', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ activite })

        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchCentredinteret();

        }
    }
    async function handleDelete(id) {
        // console.log(id);
        const response = await fetch(url + `/centredinteret/${id}`,
            {
                method: 'DELETE'
            }
        )
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchCentredinteret()
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
            <button onClick={addSkill} className='btn btn-primary btn-sm'>  Centre d'intérêt</button>

            {isAdd && <div className='flex gap-2'>

                <form className='flex' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <h5>Loisir</h5>
                            <input
                                className="input input-bordered input-info w-full max-w-xs"
                                type="text"
                                onChange={(e) => setActivite(e.target.value)}


                            />
                        </div>

                    </div>
                    <div className='flex flex-col'>
                    </div >
                    <button className='btn btn-outline btn-success my-1' title='save'><PiFloppyDiskBackBold /></button>
                    <button onClick={handleCancel} className='btn btn-error' ><FaRegSquarePlus /></button>
                </form>
            </div>}

            <table  >
                {centredinteret && centredinteret.map(item => <tr className='flex  justify-between' >
                    <th>{item.activite} </th>
                    {/* <td>{item._id}</td> */}
                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-error text-white my-1'><MdDelete /></button></td>


                </tr>

                )}

            </table>

        </div>

    )
}





