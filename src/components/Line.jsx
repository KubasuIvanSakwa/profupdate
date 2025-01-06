
function Line({ tog }) {

    return (
        <section className="flex flex-col justify-center mt-10 items-center w-full ">
            <hr className={`${tog === 'd' ? 'border-white/20 bg-[#080808]/90' : 'border-black/20 bg-[#afaeae]'} border w-[10rem]`}/>
        </section>
    )
}

export default Line