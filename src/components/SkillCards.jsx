import { useOutletContext } from "react-router-dom"


function SkillCards({ logo, name, desc }) {

    const [ tog ] = useOutletContext()

    return (
        <div className={`${tog === 'd' ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A]/80'} relative flex h-[5rem] w-full rounded-2xl  p-2 items-center`}>
            <div
                className={`${logo} h-[4rem] ml-3 w-[5rem] bg-no-repeat relative top-[0.3rem] mr-3`}
            >

            </div>
            <div className="flex flex-col w-full">
                <p className="text-xl text-white font-bold">{name}</p>
                <p className="text-white/70 font-light">{desc}</p>
            </div>
        </div>
    )
}

export default SkillCards