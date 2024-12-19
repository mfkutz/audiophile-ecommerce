import Button from "./buttons/Button";

export default function FeatureSection() {
    return (
        <div className="flex-col md:flex md:flex-row max-w-screen-mk bg-more-ec mx-auto justify-normal rounded-lg overflow-hidden mb-[45px] ">
            <div className="relative  md:w-[600px] mt-14 md:mt-0  ">
                <div className="w-[472px] h-[472px] bottom-[-125px] left-[30px] absolute border border-white-cc rounded-full z-0 opacity-20" />
                <div className="w-[542px] h-[542px] bottom-[-160px] left-[-5px] absolute border border-white-cc  rounded-full z-0  opacity-20" />
                <div className="w-[944px] h-[944px] bottom-[-350px] left-[-210px] absolute border border-white-cc rounded-full z-0  opacity-20" />

                <div className=" flex md:absolute md:bottom-0 md:left-[115px] justify-center  text-white  ">

                    <div className="md:max-w-[410px] max-w-[197px]">
                        <img
                            src="./image-zx9.png"
                            alt=""
                            className=" "
                        />
                    </div>



                </div>


            </div>

            <div className="md:max-w-[450px] md:mx-[60px] mx-[30px] z-10  text-center md:text-left" >
                <h2 className="flex flex-col text-white-ec text-[56px]  ">
                    <span className="md:mt-[142px] mt-14 text-white-ec text-[56px]">zx9</span>
                    <span className="md:mt-3 sps:mt-5 mt-11 text-white-ec text-[56px]">speaker</span>
                </h2>
                <p className=" text-white-cc opacity-75 mt-8 md:max-w-[350px] font-extralight tracking-[0.44px] text-[15px]">
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
