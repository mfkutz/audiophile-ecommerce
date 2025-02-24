import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getOrderById } from "@/api/CreateOrder"
import { formatCurrency } from "@/hooks/utils"
import { SpinnerDotted } from "spinners-react"


type orderProps = {
    onClose: () => void
    orderId: string
}


export default function Order({ onClose, orderId }: orderProps) {

    console.log('we have the id? ', orderId)

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




    const { data: product, isLoading, error } = useQuery({
        queryKey: ["order", orderId],
        queryFn: () => getOrderById({ orderId })
    })



    if (isLoading) return <div className="flex w-full h-screen justify-center items-center">
        <SpinnerDotted color="#D87D4A" />
    </div>

    if (error) return <div className="flex bg-black-ec text-white h-screen justify-center items-center">
        <div>
            Ups...something it's wrong
        </div>
    </div>

    console.log('what are here??? from Order.tsx', product)


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 -z-40" onClick={onClose}></div>

            <div
                ref={modalRef}
                className="bg-white h-fit rounded-lg py-[47px] px-[45px] w-[581px]  ">

                <img src="./checkout/icon-order-confirmation.svg" alt="icon-order" />

                <h3 className="font-bold uppercase mt-[35px]">
                    <div>
                        thank you
                    </div>
                    <div>
                        for your order
                    </div>
                </h3>

                <div className="mt-[30px] text-gray-500">You will receive an email confirmation shortly.</div>

                <div className=" mt-[30px] flex justify-between mb-[30px]">
                    <div className="bg-white-ec w-full flex flex-col  rounded-tl-lg rounded-bl-lg items-center justify-center pb-[10px] ">



                        <div className="flex items-center gap-8 mt-[22px] mb-[4px] pb-[5px] border-b">

                            <div className="flex flex-col">

                                <div className="flex">
                                    <div className="w-[100px] rounded-lg ">
                                        <img
                                            src="./cart/image-yx1-earphones.jpg"
                                            alt="img"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="flex justify-between w-full ">
                                        <div className="flex flex-col">
                                            <span className="uppercase font-bold">xx99 mk ii</span>
                                            <span className="text-[15px] font-bold text-gray-500 mt-[3px]">222</span>
                                        </div>
                                        <div className="text-[15px] font-bold text-gray-500">
                                            x1
                                        </div>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="w-[100px] rounded-lg ">
                                        <img
                                            src="./cart/image-yx1-earphones.jpg"
                                            alt="img"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="flex justify-between w-full ">
                                        <div className="flex flex-col">
                                            <span className="uppercase font-bold">xx99 mk ii</span>
                                            <span className="text-[15px] font-bold text-gray-500 mt-[3px]">$ 2,999</span>
                                        </div>
                                        <div className="text-[15px] font-bold text-gray-500">
                                            x1
                                        </div>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="w-[100px] rounded-lg ">
                                        <img
                                            src="./cart/image-yx1-earphones.jpg"
                                            alt="img"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="flex justify-between w-full ">
                                        <div className="flex flex-col">
                                            <span className="uppercase font-bold">xx99 mk ii</span>
                                            <span className="text-[15px] font-bold text-gray-500 mt-[3px]">$ 2,999</span>
                                        </div>
                                        <div className="text-[15px] font-bold text-gray-500">
                                            x1
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>



                        <div className="py-2 text-[13px] font-bold text-gray-400 text-center ">
                            {/* <div>and 2 other items(s)</div> */}
                            <div>View less</div>
                        </div>

                    </div>
                    <div className="bg-black-ec flex justify-start items-end w-[359px] rounded-tr-lg rounded-br-lg px-[35px] py-[25px]">

                        <div className="flex flex-col gap-2">
                            <div className="text-gray-600 uppercase">grand total</div>
                            <div className="text-white-ec font-bold text-[18px]">{formatCurrency(product.totalAmount)}</div>
                        </div>

                    </div>
                </div>

                <Button
                    asChild
                    variant="pay"
                >
                    <Link to="/">back to home</Link>
                </Button>


            </div>

        </>
    )
}
