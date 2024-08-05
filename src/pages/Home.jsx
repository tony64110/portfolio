import React from 'react'
import Cenntredinterets from '../Composant/Cenntredinterets';
import Competences from '../Composant/Competences';
// import Contact from '../Composant/Contact';
import ExperiencesProfessionnelles from '../Composant/ExperiencesProfessionnelles';
import Langues from '../Composant/Langues';
import Presentation from '../Composant/Presentation';
import Formation from '../Composant/Formations';
import Nav from '../Composant/Nav'
import Projet from '../Composant/Project';
import ParticlesComponent from '../Composant/particles';
import Footer from '../Composant/Footer';

export default function Home() {
    return (
        <div className="App bg-slate-100 z-10 font-mono ">
            <header className='z-10'>
                <Nav />
            </header>

            <ParticlesComponent id="tsparticles"
                options={{
                    zIndex: -1,
                    /* other particle options */
                }}
                className="absolute inset-0"
            />

            <main className='z-10 flex justify-center items-center flex-col '>
                <div>

                    <Presentation />
                </div>
                <div className='w-2/3 h-auto  justify-center items-center'>

                    <div className='flex  flex-col gap-10 mt-20  z-10 ' >
                        <div className='justify-center items-center mb-10 rounded-xl z-10  '>
                            <div className='flex justify-center items-center z-10 mt-10 '>

                                <Competences />
                            </div>
                            <div className='flex flex-col md:flex-row justify-around items-center'>
                                <Langues />
                                <Cenntredinterets />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center mb-10 h-auto md:h-96 rounded-xl z-10'>
                            <ExperiencesProfessionnelles />
                        </div>
                        <div className='flex justify-center z-10'>
                            <Formation />
                        </div>
                        <div className='flex flex-col justify-around gap-10 mb-20 md:mb-60 z-10'>
                        </div>

                        <div className='flex justify-center z-10 '>
                            <Projet />
                        </div>

                    </div>
                </div>
                <div className='flex z-10'>

                </div>
                <Footer />
            </main>

        </div >

    )
}
