import Navlayout from "./Navlayout"
import Home from '/src/assets/logos/home.svg'
import Projects from '/src/assets/logos/projects.svg'

function Leftnav({ tog }) {

    return (
        <section className="fixed z-[100] left-4 top-[40%] md:hidden hidden lg:block">
            <Navlayout img1={Home} img2={Projects} url1="/" url2="projects" tog={tog}/>
        </section>
    )
}

export default Leftnav
