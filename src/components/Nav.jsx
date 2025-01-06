import { useState, useEffect, useRef } from "react";
import Dropdown from "../assets/dropdown.svg";
import Github from '/src/assets/logos/github.svg';
import Linkedin from '/src/assets/logos/linkedin.svg';
import Home from '/src/assets/logos/home.svg';
import Projects from '/src/assets/logos/projects.svg';
import { Link } from "react-router-dom";

function Nav({ tog, fn, themeref }) {
    const [toggle, setToggle] = useState(false);
    const dropdownRef = useRef(null); // Ref for dropdown container

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setToggle(false); // Close dropdown if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside); // Add event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
        };
    }, []);

    return (
        <nav className="w-[99%] rounded-full h-[3rem] pl-2 flex items-center border border-slate-500/20 justify-end fixed z-50">
            <div className="flex justify-between items-center w-full h-fit">
                <div className="flex items-center h-fit justify-between w-full relative left-[-0.7rem]">
                    <div className="bg-[url('/src/assets/me.png')] w-[2.5rem] h-[2.5rem] bg-cover rounded-full mr-2 ml-2 opacity-70"></div>
                    <div
                        className={`${tog === 'd' ? "bg-[#1b1b1b]" : "bg-[#1b1b1b]/60"}  lg:hidden border border-white/20 w-[4rem] h-[2rem] rounded-full flex justify-center p-4 items-center relative`}
                        ref={dropdownRef} // Attach ref to the dropdown container
                        onClick={() => setToggle(!toggle)}
                    >
                        <img src={Dropdown} alt="Dropdown icon" />
                        <div
                            className={`${
                                toggle ? "flex" : "hidden"
                            } ${tog === 'd' ? "bg-[#1b1b1b]" : "bg-[#1b1b1b]/90"} absolute top-[2.5rem] h-fit w-[3rem] p-3 flex-col items-center justify-center rounded-full gap-4`}
                        >
                            <Link to="/" className="w-full h-fit rounded-full hover:bg-[#202020]"
                                onClick={() => setToggle(false)}>
                                <img src={Home} alt="Home" className="h-[1.5rem] w-[1.5rem] mr-2" />
                            </Link>
                            <Link to="projects" className="w-full h-fit rounded-full hover:bg-[#202020]"
                                onClick={() => setToggle(false)}>
                                <img src={Projects} alt="Projects" className="h-[1.5rem] w-[1.5rem]" />
                            </Link>
                            <a href="https://github.com/KubasuIvanSakwa" target="_blank" rel="noopener noreferrer"
                                className="w-full h-fit rounded-full hover:bg-[#202020]"
                                onClick={() => setToggle(false)}>
                                <img src={Github} alt="Github" className="h-[1.5rem] w-[1.5rem]" />
                            </a>
                            <a href="https://www.linkedin.com/in/ivan-kubasu-sakwa-80b2b21b2/" target="_blank" rel="noopener noreferrer"
                                className="w-full h-fit rounded-full hover:bg-[#202020]"
                                onClick={() => setToggle(false)}>
                                <img src={Linkedin} alt="LinkedIn" className="h-[1.5rem] w-[1.5rem]" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between w-[11rem]">
                        <input title="change-theme" type="checkbox" onClick={fn} className="l cursor-pointer" ref={themeref}></input>
                        <a href="/assets/KUBASU IVAN SAKWA.pdf"
                            className={`border ${tog === 'dark theme' ? 'border-white/50 text-white/50' : 'border-black/50 text-black/50'} relative resume w-[6rem] rounded-r-full right-[-0.4rem] h-[2.4rem] flex items-center justify-center p-1 rounded`}
                            download
                        >
                            <span className="">resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
