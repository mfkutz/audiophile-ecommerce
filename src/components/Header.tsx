import { Link } from "react-router-dom";
import Logo from "./Logo";
import Hamburguer from "./Hamburguer";
import MenuMobile from "./menuMobile/MenuMobile";
import Checkout from "./checkout/Checkout";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store";

export default function Header() {
    const [cartView, setCartView] = useState(false)
    // const [cantProd, setCantProd] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [viewCircle, setViewCircle] = useState(false)
    const { cart, removeFromCart, clearCart, getTotalProducts } = useCartStore()

    const cantProd = getTotalProducts()

    useEffect(() => {
        // const prodInCart = cart.map(item => item.quantity)
        // const totalProducts = prodInCart.reduce((acc, cur) => acc + cur, 0)


        // setCantProd(totalProducts)

        if (cart.length > 0) {
            // console.log("Me ejecuté")
            setViewCircle(true)
            setIsAnimating(true)
        } else {
            setViewCircle(false)
            setIsAnimating(false)
        }

        setTimeout(() => {
            setIsAnimating(false)
        }, 300);

    }, [cart, removeFromCart, clearCart])





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

                {/* Circle anim */}
                <div
                    className={`absolute top-[-12px] right-[-20px] w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-semibold transition-transform duration-200 ease-out ${isAnimating ? " scale-125" : "scale-100"} ${viewCircle ? "" : "hidden"}`}
                >
                    {cantProd}
                </div>


            </div>

        </header>
    )
}
