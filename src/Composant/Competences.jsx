import { skills } from '../constant'
export default function Competences() {



    return (
<div>
  <h3 className='bg-[#15616D] text-[#FDFFFF] font-orbitron rounded-full text-center text-3xl sm:text-3xl w-full p-4 sm:p-5 border-white shadow-2xl'>Compétences</h3>

  <div className='mt-8 md:mt-16 flex flex-wrap justify-center h-auto md:h-[300px] w-full md:w-[700px] gap-6 md:gap-12 z-10'>
    {skills.map((skill) => (
      <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#fdffffd7] rounded-3xl z-20' key={skill.name}>
        <div className='btn-back rounded-xl z-10 bg-[#fdffffd7] relative top-2 md:top-3' />
        <div className='btn-front rounded-xl flex justify-center items-center'>
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className='object-contain'
          />
        </div>
      </div>
    ))}
  </div>
</div>


    )
}
