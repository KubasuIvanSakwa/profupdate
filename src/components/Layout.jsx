import { useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import close from '../assets/close.svg'
import Leftnav from "./Leftnav"
import Rightnav from "./Rightnav"

function Layout() {
    const themeRef = useRef(null)
    const [tog, setTog] = useState('dark theme')
    const theme = useRef(null)

    function handleChange(){
        if(themeRef.current.checked) {
            // console.log('checked')
            setTog('dark theme')
        }else {
            // console.log('unchecked')
            setTog('light theme')
        }
    }

    useEffect(() => {
        if(tog === 'dark theme') {
            themeRef.current.checked = true
        }
        else if(tog === 'light theme') {
            themeRef.current.checked = false
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { 
            const newColorScheme = e.matches ? 'dark' : 'light'
            newColorScheme === 'dark' ? setTog('dark theme') : setTog('light theme')
        })
    })
    
    return (
        <section className={`${tog === 'dark theme' ? 'mainpgdark' : 'mainpglight'} ease-in w-full flex justify-center h-[100vh] overflow-hidden`} ref={theme}>
            <Leftnav tog={tog}/>
            <Rightnav tog={tog}/>

            <section className="hidden w-full h-[200vh] absolute z-50 top-0 backdrop-blur-md bg-white/30 ">
                <section className="bg-transparent flex w-full h-[100vh] justify-center overflow-y-scroll">
                    <div className="relative flex flex-col gap-4 items-center bg-black h-[40rem] w-[70%] shadow-lg p-5 top-[5rem] rounded-[1.5rem] text-white">
                        <div className="w-full flex justify-end p-2 relative top-[-1rem] right-[-1rem]">
                            <div className="bg-gray-600 cursor-pointer w-[2rem] h-[2rem] p-1 rounded-full flex justify-center items-center">
                                <img src={close} />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl text-blue-500 uppercase">Mutable Tech</h1>
                            <h2 className="text-xl font-bold">August 2023 - February 2024</h2>
                            <p>
                                I worked as a React front-end web developer at Mutable Tech, a software development company specializing in e-commerce and digital marketing. I developed and maintained various web applications using React, Redux, and other technologies.
                            </p>
                        </div>
                        </div>
                </section>
            </section>
            <section className="backdrop-blur-sm lg:shadow-xl lg:w-[65vw] w-full min-h-fit overflow-y-scroll p-1 pt-3 mb-1 overflow-x-hidden">
                <svg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'
                    className="lg:absolute hidden lg:block md:block md:absolute top-[-3rem] opacity-[0.1] h-[190vh]"
                >
                    <filter id='noiseFilter'>
                        <feTurbulence 
                        type='fractalNoise' 
                        baseFrequency='5.8' 
                        numOctaves='3' 
                        stitchTiles='stitch'/>
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
                </svg>
                <Nav tog={tog} themeref={themeRef} fn={handleChange}/>
                <Outlet context={tog} />
            </section>
        </section>
    )
}

export default Layout
