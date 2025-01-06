import { Link } from 'react-router-dom'

function Navlayout({ img1, img2, url1, url2, tog }) {

    return (
        <section className={`${tog === 'd' ? 'bg-[#1b1b1b]' : 'bg-[#1b1b1b]/80'} fixed border border-white/10 flex flex-col gap-[2rem] justify-center h-[8.8rem] w-[4%] rounded-full`}>
            {!url1.includes('http') && <Link
                to={url1}
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img1} alt=""/>
            </Link>}
            {url1.includes('http') && <a
                href={url1}
                target='_blank'
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img1} alt=""/>
            </a>}
            {!url2.includes('http') && <Link
                to={url2}
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img2} alt=""/>
            </Link>}
            {url2.includes('http') && <a
                href={url2}
                target='_blank'
                className='p-3 w-full h-fit rounded-full hover:bg-[#202020]'
            >
                <img src={img2} alt=""/>
            </a>}
        </section>
    )
}

export default Navlayout
