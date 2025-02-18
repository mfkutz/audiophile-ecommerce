import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import { useCartStore } from "@/store";
import { formatCurrency } from "@/hooks/utils";

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


    const { cart, removeFromCart, clearCart, getTotalProducts, getTotalPrice } = useCartStore()

    const cantProd = getTotalProducts()
    const totalPrice = getTotalPrice()

    // console.log('see total', totalPrice)
    // const totalPrice = cart.reduce((acc, item) => acc + (item.quantity * (item.product.price)), 0)
    // console.log(cart)
    // console.log("total price", totalPrice)


    console.log(cart)


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 -z-40" onClick={onClose}></div>

            <div
                ref={modalRef}
                className="bg-white h-fit rounded-lg py-[33px] px-[30px] w-[374px]  ">

                <div className="flex items-center justify-between">
                    <h5 className="font-bold text-[18px] uppercase">
                        Cart ({cantProd})
                    </h5>
                    {
                        cart.length !== 0 ?
                            <div
                                onClick={clearCart}
                                className="hover:cursor-pointer hover:text-more-ec hover:underline"
                            >Remove all</div>
                            : null
                    }

                </div>

                <div className="mt-[20px]">

                    {cart.length === 0 ?

                        <div className="flex flex-col justify-center items-center">
                            <p className="pt-4">Your cart is empty</p>
                            <img
                                src={"./assets/shopping-bag.png"}
                                alt="cart"
                                className="w-[40px] mt-2"
                            />
                        </div>
                        : null}

                    {cart.map((item => (
                        <div className="flex justify-between items-center gap-4 mt-6" key={item.product._id}>
                            <div className="w-[94px]  rounded-lg ">
                                <img
                                    src={item.product.image.mobile}
                                    alt={item.product.name}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="flex justify-between w-full ">
                                <div className="flex flex-col">
                                    {/* <span className="uppercase font-bold">{item.product.name.split(" ",)[0]}</span> */}
                                    <span className="uppercase font-bold text-[15px]">
                                        {(() => {
                                            const words = item.product.name.split(" ")

                                            const prodIndex = words.findIndex(word => word.toLowerCase() === "mark")
                                            if (prodIndex !== -1) {
                                                return words.slice(0, prodIndex + 2).join(" ")
                                            }

                                            return words[0]
                                        })()}
                                    </span>
                                    <span className="text-[14px] font-bold text-gray-500 mt-[2px]">{formatCurrency(item.product.price)}</span>
                                </div>

                                <div className="w-[95px] h-[33px] bg-white-ec flex flex-row items-center justify-between px-2 ">
                                    <div
                                        className="hover:text-more-ec cursor-pointer px-2 text-[16px] font-bold text-black-cc opacity-40 hover:opacity-100 "
                                    // onClick={() => setQuantity((q) => q - 1)}
                                    >-</div>
                                    <div className="text-[13px] font-bold">{item.quantity}</div>
                                    <div
                                        className="hover:text-more-ec cursor-pointer px-2 text-[16px] pt-[1px] font-bold text-black-cc opacity-40 hover:opacity-100"
                                    // onClick={() => setQuantity((q) => q + 1)}
                                    >+</div>
                                </div>
                            </div>

                        </div>
                    )))}
                </div>

                <div className="uppercase mt-[40px]">

                    {cart.length > 0 ?
                        <>
                            <div className="flex justify-between mt-[25px] mb-[8px]">
                                <div className="text-gray-500 font-medium">
                                    total
                                </div>

                                <div className="font-bold text-[18px]">
                                    {formatCurrency(totalPrice)}
                                </div>
                            </div>

                            <Button
                                asChild
                                variant="pay"
                                onClick={handleCheckoutClick}
                            >
                                <Link to="/checkout">checkout</Link>
                            </Button>
                        </>
                        : null

                    }

                </div>

            </div>
        </>
    )
}
