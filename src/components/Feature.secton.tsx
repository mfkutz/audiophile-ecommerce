import Button from "./buttons/Button";

export default function FeatureSection() {
    return (
        <div className=" max-w-screen-mk bg-more-ec mx-auto flex justify-normal rounded-lg overflow-hidden mb-[45px] ">
            <div className="relative  w-[600px] ">
                <div className="w-[472px] h-[472px] bottom-[-125px] left-[30px] absolute border border-white-cc rounded-full z-0 opacity-20" />
                <div className="w-[542px] h-[542px] bottom-[-160px] left-[-5px] absolute border border-white-cc  rounded-full z-0  opacity-20" />
                <div className="w-[944px] h-[944px] bottom-[-350px] left-[-210px] absolute border border-white-cc rounded-full z-0  opacity-20" />
                <div className=" absolute bottom-0 left-[115px] flex max-w-[410px] text-white">
                    <img
                        src="./image-zx9.png"
                        alt=""
                    />
                </div>
            </div>

            <div className="max-w-[450px] mx-[60px] z-10">
                <h2 className="flex flex-col text-white-ec text-[56px]">
                    <span className="mt-[142px]">zx9</span>
                    <span className="mt-3">speaker</span>
                </h2>
                <p className=" text-white-cc opacity-75 mt-8 max-w-[350px] font-extralight tracking-[0.44px] text-[15px]">
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
