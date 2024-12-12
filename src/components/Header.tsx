import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="max-w-screen-mk flex items-center justify-between mx-auto py-[38px]">
            <div className="flex items-center max-w-[768px] flex-1 justify-between">
                <Logo />
                <nav className="text-white flex uppercase space-x-8 ">
                    <Link to="/" className=" tracking-[2px] font-bold text-[13px] cursor-pointer ">Home</Link>
                    <Link to="/headphones" className=" tracking-[2px] font-bold text-[13px]">Headphones</Link >
                    <Link to="/speakers" className=" tracking-[2px] font-bold text-[13px]">Speakers</Link >
                    <Link to="/earphones" className=" tracking-[2px] font-bold text-[13px]">Earphones</Link >
                </nav>
            </div>
            <img src="/icon-cart.svg" alt="cart logo" />
        </header>
    )
}
