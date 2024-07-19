import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaRegSquarePlus } from "react-icons/fa6";
import { PiFloppyDiskBackBold } from "react-icons/pi";
import { url } from './URL'


export default function AdminContact() {

    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const [contact, setContact] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    async function fetchContact() {
        const response = await fetch(url + '/contact')
        const data = await response.json()
        console.log(data);

        setContact(data)
        setTel(data[0].tel)
        setEmail(data[0].email)
        setAdresse(data[0].adresse)

    }
    useEffect(() => {
        fetchContact()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(url + '/contact', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tel, email, adresse })

        })
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchContact();

        }
    }
    async function handleDelete(id) {
        console.log(id);
        const response = await fetch(url + `/contact/${id}`,
            {
                method: 'DELETE'
            }
        )
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchContact()
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
            <button onClick={addSkill} className='btn btn-primary btn-sm'>Contact</button>

            {isAdd && <div className='flex gap-2'>

                <form className='flex' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>

                        <h5>Téléphone</h5>
                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            type="text"
                            onChange={(e) => setTel(e.target.value)}


                        />
                    </div >
                    <div className='flex flex-col'>

                        <h5>Email</h5>

                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}


                        />
                    </div>
                    <div className='flex flex-col'>

                        <h5>Adresse</h5>

                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            type="text"
                            onChange={(e) => setAdresse(e.target.value)}


                        />
                    </div>
                    <div className='flex flex-col'>

                    </div>
                    <button className='btn btn-outline btn-success my-1' title='save'><PiFloppyDiskBackBold /></button>
                    <button onClick={handleCancel} className='btn btn-error' ><FaRegSquarePlus /></button>

                </form>
            </div>}

            <table  >
                {contact && contact.map(item => <tr className='flex  justify-between' >
                    <th>{item.tel} : </th>
                    <td>{item.email}</td>
                    <td>{item.adresse}</td>
                    {/* <td>{item._id}</td> */}
                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-error text-white my-1'><MdDelete /></button></td>


                </tr>

                )}

            </table>

        </div>
    )
}