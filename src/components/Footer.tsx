import { Link } from "react-router-dom";
import Logo from "./Logo";
import Facebook from "./socialIcons/Facebook";
import Twitter from "./socialIcons/Twitter";
import Instagram from "./socialIcons/Instagram";

export default function Footer() {
    return (
        <div className="max-w-screen-mk mx-auto">

            <div className="flex items-center justify-between">
                <Logo />
                <nav className="text-white hidden md:flex uppercase space-x-8">
                    <Link to="/" className=" tracking-[2px] font-bold text-[13px] cursor-pointer hover:text-more-ec transition-colors duration-200 ">Home</Link>
                    <Link to="/headphones" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Headphones</Link >
                    <Link to="/speakers" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Speakers</Link >
                    <Link to="/earphones" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Earphones</Link >
                </nav>
            </div>

            <div className="flex justify-between">
                <p className="max-w-[540px] text-[15px] text-gray-400">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                    visit our demo facility - we’re open 7 days a week.
                </p>
                <div className="flex justify-end items-end gap-3">
                    <Facebook />
                    <Twitter />
                    <Instagram />
                </div>
            </div>
            <p className="text-gray-400 text-[15px]">
                Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
        </div>
    )
}
