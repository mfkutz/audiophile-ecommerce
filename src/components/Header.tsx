import { Link } from "react-router-dom";
import Logo from "./Logo";
import Hamburguer from "./Hamburguer";
import MenuMobile from "./menuMobile/MenuMobile";
import Checkout from "./checkout/Checkout";
import { useState } from "react";

export default function Header() {
    const [cartView, setCartView] = useState(false)



    return (

        <header className="   max-w-screen-mk flex items-center justify-between mx-auto py-[38px]  xl:px-0 border-b border-b-neutral-700 px-5 sps:px-0 ">
            <div className="flex items-center lg:max-w-[768px] w-[78%] lg:flex-1 md:justify-between gap-10 ">
                <Hamburguer />
                {/* <div className=" top-0">
                    <MenuMobile />
                    </div> */}
                <Logo />
                <nav className="text-white hidden md:flex uppercase space-x-8">
                    <Link to="/" className=" tracking-[2px] font-bold text-[13px] cursor-pointer hover:text-more-ec transition-colors duration-200 ">Home</Link>
                    <Link to="/headphones" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Headphones</Link >
                    <Link to="/speakers" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Speakers</Link >
                    <Link to="/earphones" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Earphones</Link >
                </nav>
            </div>
            <div className="relative">
                <img
                    src="./assets/shared/desktop/icon-cart.svg"
                    alt="cart logo"
                    className="cursor-pointer"
                    onClick={() => setCartView(!cartView)}
                >

                </img>

                <div className={`absolute top-[90px] right-0 z-50 ${cartView ? "" : "hidden"} `}>
                    <Checkout onClose={() => setCartView(false)} />
                </div>
            </div>

        </header>
    )
}
