import { Link } from "react-router-dom";
import Logo from "./Logo";
import Facebook from "./socialIcons/Facebook";
import Twitter from "./socialIcons/Twitter";
import Instagram from "./socialIcons/Instagram";

export default function Footer() {
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col">


            <div className=" h-1 flex w-full">
                <div className="bg-more-ec h-1 max-w-[101px] w-full">

                </div>
            </div>


            <div className="flex md:items-center md:justify-between pt-[50px] sps:pt-[55px] md:pt-[70px] flex-col sps:items-start items-center md:flex-row">
                <Logo />
                <nav className="text-white  md:flex sps:flex-row uppercase sps:space-x-8 md:mt-0 mt-[50px] sps:mt-[32px]  flex flex-col sps:gap-0 gap-[22px] ">
                    <Link to="/" className=" tracking-[2px] font-bold text-[13px] cursor-pointer hover:text-more-ec transition-colors duration-200 ">Home</Link>
                    <Link to="/headphones" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Headphones</Link >
                    <Link to="/speakers" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Speakers</Link >
                    <Link to="/earphones" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Earphones</Link >
                </nav>
            </div>

            <div className="flex justify-between mt-[52px] sps:mt-[35px] ">
                <p className="max-w-[556px] text-[15px] text-gray-font-footer tracking-[0.3px] h-full flex leading-[24px] ">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                    visit our demo facility - we’re open 7 days a week.
                </p>
                <div className="md:flex items-end gap-4 pb-[7px] hidden ">
                    <Facebook />
                    <Twitter />
                    <Instagram />
                </div>
            </div>
            <p className="text-gray-font-footer text-[15px] mt-[58px] pb-[47px] font-semibold">
                Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
        </div>
    )
}
