import { useRef, useState } from "react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getOrderById } from "@/api/CreateOrder"
import { formatCurrency } from "@/hooks/utils"
import { SpinnerDotted } from "spinners-react"

type orderProps = {
    orderId: string
}

export default function Order({ orderId }: orderProps) {

    const [expanded, setExpanded] = useState(false)

    const modalRef = useRef<HTMLDivElement | null>(null)

    const { data: product, isLoading, error } = useQuery({
        queryKey: ["order", orderId],
        queryFn: () => getOrderById({ orderId })
    })

    console.log('VER QUE ERROR ', error?.message)


    if (isLoading) return <div className="flex w-full bg-white-cc h-screen justify-center items-center">
        <SpinnerDotted color="#D87D4A" />
    </div>


    if ((error as Error & { status?: number })?.status === 429) {
        return (
            <div className="flex bg-black-esp w-full h-screen justify-center items-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="text-white-ec">You've made too many requests. Please wait and try again later.</div>
                    <Button variant="default" asChild>
                        <Link to={`/`}>Home</Link>
                    </Button>
                </div>
            </div>
        );
    }


    if (error || !product) return <div className="flex bg-black-ec w-full text-white h-screen justify-center items-center">
        <div className="flex flex-col items-center gap-3">
            <div>
                Ups...something it's wrong
            </div>
            <Button
                variant="default"
                asChild
            >
                <Link to={`/`}>Home</Link>
            </Button>
        </div>
    </div>

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 -z-40" ></div>

            <div
                ref={modalRef}
                className="bg-white h-fit rounded-lg py-[47px] px-[45px] w-[581px]  ">

                <img src="./assets/checkout/icon-order-confirmation.svg" alt="icon-order" />

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

                                {product.orderItems.slice(0, expanded ? product.orderItems.length : 1).map((item, index) => (
                                    <div className="flex" key={index}>
                                        <div className="w-[100px] rounded-lg ">
                                            <img
                                                src={item.imageUrl}
                                                alt="img"
                                                className="rounded-lg"
                                            />
                                        </div>
                                        <div className="flex justify-between w-full ">
                                            <div className="flex flex-col">
                                                <span className="uppercase font-bold text-[15px]">
                                                    {(() => {
                                                        const words = item.name.split(" ")
                                                        const prodIndex = words.findIndex(word => word.toLowerCase() === "mark")
                                                        if (prodIndex !== -1) {
                                                            return words.slice(0, prodIndex + 2).join(" ")
                                                        }
                                                        return words[0]
                                                    })()}
                                                </span>

                                                <span className="text-[15px] font-bold text-gray-500 mt-[3px]">{formatCurrency(item.unitPrice)}</span>
                                            </div>
                                            <div className="text-[15px] font-bold text-gray-500">
                                                x{item.quantity}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div
                            className="py-2 text-[13px] font-bold text-gray-400 text-center cursor-pointer "
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? "View less" : product.orderItems.length > 1 ? `and ${product.orderItems.length - 1} other item${product.orderItems.length - 1 > 1 ? "(s)" : ""}` : ""}
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
