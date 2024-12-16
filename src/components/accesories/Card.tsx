
export default function Card() {
    return (
        <div
            className="flex flex-col border bg-white-ec rounded-md w-full text-center h-[160px] sps:h-[200px] justify-end py-7 items-center relative"
        >
            <div className=" bg-black w-[140px] h-[20px] rounded-full blur-xl absolute top-[35%]"></div>
            <img
                src="./image-removebg-preview(41).png"
                alt=""
                className="absolute top-[-30%] sps:top-[-40%] w-[79.95px] sps:w-[122.95px]"
            />
            <p className="uppercase font-bold text-[15px] sps:text-[18px] mb-[5px] tracking-wider ">headphones</p>
            <button
                className=" flex items-center gap-2 uppercase text-[13px] tracking-[1.5px] font-semibold text-gray-700 hover:text-more-ec"
            >shop
                <img src="./icon-arrow-right.svg" alt="" />
            </button>
        </div>
    )
}
