import { useOutletContext } from "react-router-dom"
import Workcard from "./Workcard"


function WorkExperience() {
    const [ tog ] = useOutletContext()

    const Experience = [
        {
            id: 0, 
            company: 'Mutable Tech', 
            duration: 'August 2023 - February - 2024', 
            position: 'React Front-end Web Developer', 
            background: 'bg-blue-900/20',
            backgroundLight: 'bg-blue-900/70'
        },

        {
            id: 1, 
            company: 'Rawlinz Designs Limited', 
            duration: 'March 2024 - July - 2024', 
            position: 'React Front-end Web Developer', 
            background: 'bg-green-900/20',
            backgroundLight: 'bg-green-900/70'
        }
    ]

    return (
        <section
            className="text-white w-full min-h-fit mt-10 "
        >
            <h1 className={`lg:text-xl p-2 lg:ml-10 text-lg ${tog === 'd' ? 'text-white/60' : 'text-red-900/70'} font-extrabold underline decoration-wavy mb-3`}>work experience</h1>

            <section className="flex flex-col gap-2 items-center">
                {Experience.map(work => (
                    <Workcard key={work.id} tog={tog} background={work.background} duration={work.duration} company={work.company} position={work.position} bgLight={work.backgroundLight}/>
                ))}
            </section>
        </section>
    )
}

export default WorkExperience