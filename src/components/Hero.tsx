
export default function Hero() {
    return (
        <section className="flex max-w-screen-mk mx-auto max-h-[630px] ">
            <div>
                <p className=" text-white text-[14px] leading-[19px] tracking-[10px] uppercase mt-[130px]">New product</p>
                <h1 className="text-white mt-[27px]">XX99 Mark II</h1>
                <h2 className="text-white text-[56px] mt-[5px]">Headphones</h2>
                <p className="text-white text-[14px] mt-[33px] tracking-[1px]">Experience natural, lifelike audio and exceptional</p>
                <p className="text-white text-[14px] mt-[4px] tracking-[1px]">build quality made for the passionate music</p>
                <p className="text-white text-[14px] mt-[4px] tracking-[1px]">enthusiast.</p>
                <button className="bg-more-ec px-[34px] py-[16px] uppercase text-white text-[12px] font-semibold tracking-[1.3px] mt-[43px]">See product</button>

            </div>
            <div className="bg-blue-500 relative">
                <img src="Bitmap.svg" alt="image hero" className="absolute left-0 top-0" />
            </div>
        </section>
    )
}
