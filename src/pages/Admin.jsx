import React, { useState } from 'react'
import Nav from '../Composant/Nav'

import AdminContact from '../Composant/AdminContact'
import AdminCompetences from '../Composant/AdminCompetences'
import AdminLangues from '../Composant/AdminLangues'
import AdminCentredinteret from '../Composant/AdminCentredinteret'
import AdminExperiencesProfessionnelles from '../Composant/AdminExperiencesProfessionnelle'
import AdminFormation from '../Composant/AdminFormation'
import Login from './Login'
import AdminProjet from '../Composant/AdminProjets'


export default function Admin() {

    const [username, setUserName] = useState('')
    const [pwd, setPwd] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    function handleSubmit(e) {
        e.preventDefault()
        if (username === 'ok' && pwd === 'ok') {
            setIsLogged(true)

        }
    }
    if (!isLogged) {
        return (
            <Login
                userName={username}
                pwd={pwd}
                setUserName={(e) => setUserName(e.target.value)}
                setPwd={(e) => setPwd(e.target.value)}
                handleSubmit={handleSubmit}
            />
        )
    }

    return (
        <div className='gap-10'>
            <Nav />
            <AdminContact />
            <AdminCompetences />
            <AdminLangues />
            <AdminCentredinteret />
            <AdminExperiencesProfessionnelles />
            <AdminFormation />
            <AdminProjet />

        </div>
    )
}
