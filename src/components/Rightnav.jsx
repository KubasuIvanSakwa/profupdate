import Navlayout from "./Navlayout"
import Github from '/src/assets/logos/github.svg'
import Linkedin from '/src/assets/logos/linkedin.svg'

function Rightnav({ tog }) {

    return (
        <section className="text-red-400 fixed z-[100] right-[4rem] top-[40%] md:hidden hidden lg:block">
            <Navlayout img1={Github} img2={Linkedin} url1="https://github.com/KubasuIvanSakwa" url2="https://www.linkedin.com/in/kubasuivansakwa/" tog={tog}/>
        </section>
    )
}

export default Rightnav
