import { useRef } from "react"

function Workcard({ tog, background, bgLight, duration, company, position }) {

    return (
        <section
            className={`${tog === 'd' ? `${background} border-white/20` : `${bgLight} border-black/20`}  relative border flex justify-between items-center w-[90%] p-4 rounded-[18px] min-h-fit cursor-pointer`}
        >
            <div>
                <p className="text-sm text-white/60 font-bold">{duration}</p>
                <h1 className="lg:text-2xl text-xl font-extrabold">{company}</h1>
                <p className="lg:text-xl text-lgfont-bold">{position}</p>
            </div>
            <p className="bg-white/80 absolute lg:relative bottom-1 right-1  rounded-full border-2 border-black/60 lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] flex justify-center items-center text-black/60 lg:text-3xl text-xl font-bold">+</p>
        </section>
    )
}

export default Workcard