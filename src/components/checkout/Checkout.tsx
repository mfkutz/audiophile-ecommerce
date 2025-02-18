import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import { useCartStore } from "@/store";

type checkoutProps = {
    onClose: () => void
}

export default function Checkout({ onClose }: checkoutProps) {

    const modalRef = useRef<HTMLDivElement | null>(null)

    const handleClicOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClicOutside)

        return () => {
            document.removeEventListener("mousedown", handleClicOutside)
        }
    }, [])


    const handleCheckoutClick = () => {
        onClose();
    };


    const { cart, removeFromCart, clearCart } = useCartStore()

    console.log(cart)

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 -z-40" onClick={onClose}></div>

            <div
                ref={modalRef}
                className="bg-white h-fit rounded-lg py-[60px] px-[30px] w-[374px]  ">

                <div className="flex items-center justify-between">
                    <h5 className="font-bold text-[18px] uppercase">
                        Cart
                    </h5>
                    <div
                        onClick={clearCart}
                        className="hover:cursor-pointer"
                    >Remove all</div>

                </div>

                <div className="mt-[20px]">

                    {cart.length === 0 ? <p>Your cart is empty</p> : null}

                    {cart.map((item => (
                        <div className="flex justify-between items-center gap-4" key={item.product._id}>
                            <div className="w-[94px]  rounded-lg ">
                                <img
                                    src="./cart/image-xx99-mark-two-headphones.jpg"
                                    alt="img"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex justify-between w-full ">
                                <div className="flex flex-col">
                                    <span className="uppercase font-bold">{item.product.name}</span>
                                    <span className="text-[15px] font-bold text-gray-500 mt-[3px]">{item.product.price}</span>
                                </div>
                                <div className="text-[15px] font-bold text-gray-500">
                                    {item.quantity}
                                </div>
                            </div>

                        </div>
                    )))}

                    {/* <div className="flex justify-between items-center gap-4">
                        <div className="w-[94px]  rounded-lg ">
                            <img
                                src="./cart/image-xx99-mark-two-headphones.jpg"
                                alt="img"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between w-full ">
                            <div className="flex flex-col">
                                <span className="uppercase font-bold">xx99 mk ii</span>
                                <span className="text-[15px] font-bold text-gray-500 mt-[3px]">$ 2,299</span>
                            </div>
                            <div className="text-[15px] font-bold text-gray-500">
                                x1
                            </div>
                        </div>

                    </div> */}

                    {/* <div className="flex justify-between items-center gap-4 mt-[22px]">
                        <div className="w-[94px]  rounded-lg ">
                            <img
                                src="./cart/image-xx59-headphones.jpg"
                                alt="img"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between w-full ">
                            <div className="flex flex-col">
                                <span className="uppercase font-bold">xx59</span>
                                <span className="text-[15px] font-bold text-gray-500 mt-[3px]">$ 899</span>
                            </div>
                            <div className="text-[15px] font-bold text-gray-500">
                                x2
                            </div>
                        </div>

                    </div> */}

                    {/* <div className="flex justify-between items-center gap-4 mt-[22px]">
                        <div className="w-[94px]  rounded-lg ">
                            <img
                                src="./cart/image-yx1-earphones.jpg"
                                alt="img"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between w-full ">
                            <div className="flex flex-col">
                                <span className="uppercase font-bold">yx1</span>
                                <span className="text-[15px] font-bold text-gray-500 mt-[3px]">$ 599</span>
                            </div>
                            <div className="text-[15px] font-bold text-gray-500">
                                x1
                            </div>
                        </div>

                    </div> */}

                </div>

                <div className="uppercase mt-[40px]">


                    <div className="flex justify-between mt-[25px] mb-[25px]">
                        <div className="text-gray-500 font-medium">
                            total
                        </div>

                        <div className="font-bold text-[18px]">
                            $ 5,446
                        </div>
                    </div>


                </div>


                <Button
                    asChild
                    variant="pay"
                    onClick={handleCheckoutClick}
                >
                    <Link to="/checkout">checkout</Link>
                </Button>


            </div>
        </>
    )
}
