import Button from "./buttons/Button";

export default function FeatureSection() {
    return (
        <div className="bg-more-ec max-w-screen-mk mx-auto flex justify-center rounded-lg">


            <div className="relative  w-[600px] overflow-hidden">
                <div className="w-[420px] h-[420px] bottom-[120px] left-[200px] absolute border border-gray-400 rounded-full  ">

                </div>
                <div className=" absolute bottom-0 left-[60px] flex max-w-[410px] text-white">
                    <img
                        src="./image-zx9.png"
                        alt=""
                    />
                </div>
            </div>


            <div className="max-w-[450px]">
                <h2 className="flex flex-col text-white-ec text-[56px]">
                    <span className="mt-[142px]">zx9</span>
                    <span className="mt-3">speaker</span>
                </h2>
                <p className=" text-white-cc opacity-75 mt-8 max-w-[350px] font-extralight tracking-[1px] text-[15px]">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <Button
                    background="bg-black-cc mb-[123px]"
                    hover="bg-gray-btn"
                    action="see product"
                />
            </div>


        </div>
    )
}
