import { Link, useOutletContext } from "react-router-dom"
import Introcard from "./Introcard"
import Line from "./Line"

function Hero() {
    const [ tog ] = useOutletContext()
    
    return (
        <section className={`${tog === 'd' ? 'text-white' : 'text-black'} mt-10`}>
            <Introcard tog={tog}/>
        </section>
    )
}

export default Hero