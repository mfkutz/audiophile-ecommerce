
import { OrderType, UserRegistrationForm } from "@/types"
import { useForm } from "react-hook-form"
import ErrorMessage from "../errorMessage/ErrorMessage"
import { useState } from "react"
import { Button } from "../ui/button"
import Order from "../order/Order"
import { useCartStore } from "@/store"
import { formatCurrency, useGoBack } from "@/hooks/utils"
import { useMutation } from "@tanstack/react-query"
import { createOrder } from "@/api/CreateOrder"

export default function Form() {

    const [selectedMethod, setSelectedMethod] = useState("eMoney")
    const [orderView, setOrderView] = useState(false)
    const [orderId, setOrderId] = useState("")

    const initialValues: UserRegistrationForm = {
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        eMoneyNumber: '',
        eMoneyPin: ''
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues })

    const { mutate } = useMutation({

        mutationFn: createOrder,
        onError: (error) => {
            console.log(error.message)
        },
        onSuccess: (data) => {
            //TO DO after getById endpoint in backend, fetch and print in screen the info (in Order component)
            setOrderId(data.order._id)
            reset()
            setOrderView(!orderView)
        }
    })

    const handleRegister = (formData: OrderType["customer"] & OrderType["payment"]) => {

        const SHIPPING_COST = 50

        const formattedCart = cart.map(item => ({
            productId: item.product._id,
            name: item.product.name,
            unitPrice: item.product.price,
            imageUrl: item.product.image.mobile,
            quantity: item.quantity
        })) as OrderType["orderItems"]

        const formattedOrder = {
            customer: {
                name: formData.name,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                address: formData.address,
                zipCode: formData.zipCode,
                city: formData.city,
                country: formData.country
            },
            payment: {
                eMoneyNumber: formData.eMoneyNumber,
                eMoneyPin: formData.eMoneyPin
            },
            orderItems: formattedCart,
            totalAmount: totalPrice + SHIPPING_COST,
        }

        // console.log("to send backend", formattedOrder)
        mutate(formattedOrder)
    }


    const handleMethod = (method: string) => {
        setSelectedMethod(method)
    }

    const { cart, getTotalPrice } = useCartStore()

    console.log('obtain data from here!!', cart)

    const totalPrice = getTotalPrice()

    const goBack = useGoBack()

    return (

        <div className="flex gap-[30px] relative">

            <div
                className=" absolute hover:underline hover:text-more-ec left-0 sps:top-[-60px] top-[-50px] md:top-[-78px] text-gray-text-prod text-[15px] hover:cursor-pointer"
                onClick={goBack}

            >Go Back</div>

            <div className="bg-white max-w-[730px] rounded-lg py-[60px] px-[48px] ">
                <h3>checkout</h3>
                <div className="subtitle mt-[41px] ">Billing details</div>

                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className=""
                    noValidate
                    id="mainForm"
                >
                    <div className="flex gap-4">
                        <div className="w-full">
                            <div className="flex justify-between mt-8 items-center w-[309px]">
                                <label
                                    className=" font-bold text-[12px]  "
                                    htmlFor="name"
                                >Name</label>
                                {errors.name && (
                                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                                )}
                            </div>
                            <input
                                id="name"
                                type="name"
                                placeholder="Alexei Ward"
                                className=" px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                        </div>

                        <div className="w-full">
                            <div className="flex justify-between mt-8 items-center w-[309px]">
                                <label
                                    className=" font-bold  text-[12px]"
                                    htmlFor="email"
                                >Email Address</label>
                                {errors.email && (
                                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                                )}
                            </div>
                            <input
                                id="email"
                                type="email"
                                placeholder="alexei@gmail.com"
                                className=" px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Invalid E-mail",
                                    },
                                })}
                            />
                        </div>

                    </div>


                    <div className="flex gap-4">
                        <div className="w-full">
                            <div className="flex justify-between mt-8 items-center w-[309px]">
                                <label
                                    className=" font-bold  text-[12px]"
                                    htmlFor="phoneNumber"
                                >Phone Number</label>
                                {errors.phoneNumber && (
                                    <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
                                )}
                            </div>

                            <input
                                id="phoneNumber"
                                type="text"
                                placeholder="+1 202-555-0136"
                                className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                                {...register("phoneNumber", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^\+?[0-9\s-]*$/,
                                        message: "Invalid phone number",
                                    },
                                })}
                            />
                        </div>

                    </div>





                    <div className="subtitle mt-[41px] mb-3">shipping info</div>

                    <div className="flex gap-4">
                        <div className="w-full">
                            <div className="flex justify-between mt-8 items-center">
                                <label
                                    className=" font-bold text-[12px]  "
                                    htmlFor="name"
                                >Address</label>
                                {errors.address && (
                                    <ErrorMessage>{errors.address.message}</ErrorMessage>
                                )}
                            </div>
                            <input
                                id="address"
                                type="text"
                                placeholder="1137 Williams Avenue"
                                className="w-full px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] "
                                {...register("address", {
                                    required: "Address is required",
                                })}
                            />
                        </div>
                    </div>



                    <div className="flex gap-4">
                        <div className="w-full">
                            <div className="flex justify-between mt-8 items-center w-[309px]">
                                <label
                                    className=" font-bold  text-[12px]"
                                    htmlFor="phoneNumber"
                                >Zip Code</label>
                                {errors.zipCode && (
                                    <ErrorMessage>{errors.zipCode.message}</ErrorMessage>
                                )}
                            </div>

                            <input
                                id="zipCode"
                                type="text"
                                placeholder="10001"
                                className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                                {...register("zipCode", {
                                    required: "Zip code is required",
                                    pattern: {
                                        value: /^\d{4,10}$/,
                                        message: "Zip code must be between 4 and 10 digits",
                                    },
                                })}
                            />
                        </div>

                        <div className="w-full">
                            <div className="flex justify-between mt-8 items-center w-[309px]">
                                <label
                                    className=" font-bold  text-[12px]"
                                    htmlFor="city"
                                >City</label>
                                {errors.city && (
                                    <ErrorMessage>{errors.city.message}</ErrorMessage>
                                )}
                            </div>

                            <input
                                id="city"
                                type="text"
                                placeholder="New York"
                                className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                                {...register("city", {
                                    required: "City is required",
                                })}
                            />
                        </div>

                    </div>

                    <div className="flex gap-4">
                        <div className="w-full">
                            <div className="flex justify-between mt-8 items-center w-[309px]">
                                <label
                                    className=" font-bold  text-[12px]"
                                    htmlFor="phoneNumber"
                                >Country</label>
                                {errors.country && (
                                    <ErrorMessage>{errors.country.message}</ErrorMessage>
                                )}
                            </div>

                            <input
                                id="country"
                                type="text"
                                placeholder="United States"
                                className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                                {...register("country", {
                                    required: "Country is required",
                                })}
                            />
                        </div>


                    </div>


                    <div className="subtitle mt-[41px] mb-3">payments details</div>

                    <div className="flex w-full font-bold  text-[12px] justify-between ">

                        <span className="w-full">Payment Method</span>

                        <div>

                            <button
                                type="button"
                                onClick={() => handleMethod("eMoney")}
                                className="relative px-6 py-[17px] font-bold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px] text-left pl-[53px]"
                            >
                                <div className={` absolute top-1/2 -translate-y-1/2 left-[20px] w-[12px] h-[12px] ${selectedMethod === "eMoney" ? "bg-more-ec" : ""}  rounded-full`} />
                                <div className=" absolute top-1/2 -translate-y-1/2 left-[15px] w-[22px] h-[22px] border rounded-full" />
                                e-Money
                            </button>

                            <button
                                type="button"
                                onClick={() => handleMethod("cashOnDelivery")}
                                className="relative px-6 py-[17px] font-bold text-[14px] border-gray-300 border rounded-lg mt-[16px] w-[309px] text-left pl-[53px]">
                                <div className={` absolute top-1/2 -translate-y-1/2 left-[20px] w-[12px] h-[12px] ${selectedMethod === "cashOnDelivery" ? "bg-more-ec" : ""}  rounded-full`} />
                                <div className=" absolute top-1/2 -translate-y-1/2 left-[15px] w-[22px] h-[22px] border rounded-full" />
                                Cash on Delivery
                            </button>
                        </div>


                    </div>




                    {/* /////////////////// */}


                    {selectedMethod === "eMoney" &&

                        <div className="flex gap-4 hidd">
                            <div className="w-full">
                                <div className="flex justify-between mt-8 items-center w-[309px]">
                                    <label
                                        className=" font-bold  text-[12px]"
                                        htmlFor="eMoneyNumber"
                                    >e-Money Number</label>
                                    {errors.eMoneyNumber && (
                                        <ErrorMessage>{errors.eMoneyNumber.message}</ErrorMessage>
                                    )}
                                </div>

                                <input
                                    id="eMoneyNumber"
                                    type="text"
                                    placeholder="238521993"
                                    maxLength={10}
                                    className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                                    {...register("eMoneyNumber", {
                                        required: "e-Money Number is required",
                                        pattern: {
                                            value: /^\d+$/,
                                            message: "only numbers",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Must be max 10 digits"
                                        }
                                    })}
                                />
                            </div>

                            <div className="w-full">
                                <div className="flex justify-between mt-8 items-center w-[309px]">
                                    <label
                                        className=" font-bold  text-[12px]"
                                        htmlFor="eMoneyPin"
                                    >e-Money PIN</label>
                                    {errors.eMoneyPin && (
                                        <ErrorMessage>{errors.eMoneyPin.message}</ErrorMessage>
                                    )}
                                </div>

                                <input
                                    id="eMoneyPin"
                                    type="text"
                                    placeholder="6891"
                                    maxLength={4}
                                    className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                                    {...register("eMoneyPin", {
                                        required: "e-Money Pin is required",
                                        pattern: {
                                            value: /^\d{4}$/,
                                            message: "eMoneyPin must be a 4-digit number"
                                        }
                                    })}
                                />
                            </div>

                        </div>
                    }

                    {/* //////////////////////// */}
                </form>

            </div>


            {/* SUMARY VIEW ***************************** */}
            <div className="bg-white w-full h-fit rounded-lg py-[60px] px-[30px] ">

                <h5 className="font-bold text-[18px] uppercase">
                    Sumary
                </h5>

                <div className="mt-[20px]">


                    {cart.map((item) => (

                        <div className="flex justify-between items-center gap-4 mt-6" key={item.product._id}>
                            <div className="w-[94px]  rounded-lg ">
                                <img
                                    src={item.product.image.mobile}
                                    alt={item.product.name}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex justify-between w-full ">
                                <div className="flex flex-col">
                                    {/* <span className="uppercase font-bold">xx99 mk ii</span> */}
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
                                    <span className="text-[15px] font-bold text-gray-500 mt-[3px]">{formatCurrency(item.product.price)}</span>
                                </div>
                                <div className="text-[15px] font-bold text-gray-500">
                                    x{item.quantity}
                                </div>
                            </div>

                        </div>

                    ))}





                </div>

                <div className="uppercase mt-[40px]">
                    <div className="flex justify-between">
                        <div className="text-gray-500 font-medium">
                            total
                        </div>

                        <div className="font-bold text-[18px]">
                            {formatCurrency(totalPrice)}
                        </div>
                    </div>

                    <div className="flex justify-between mt-[10px]">
                        <div className="text-gray-500 font-medium">
                            shipping
                        </div>

                        <div className="font-bold text-[18px]">
                            $ 50
                        </div>
                    </div>

                    {/* <div className="flex justify-between mt-[10px]">
                        <div className="text-gray-500 font-medium">
                            vat (included)
                        </div>

                        <div className="font-bold text-[18px]">
                            $ 1,079
                        </div>
                    </div> */}

                    <div className="flex justify-between mt-[25px] mb-[25px]">
                        <div className="text-gray-500 font-medium">
                            grand total
                        </div>

                        <div className="font-bold text-more-ec text-[18px]">
                            {formatCurrency(totalPrice + 50)}
                        </div>
                    </div>


                </div>


                <Button

                    asChild
                    variant="pay"
                >
                    {/* <Link to="/mark-two">continue & pay</Link> */}
                    <button
                        type="submit"
                        form="mainForm"
                    >continue & pay</button>
                </Button>

            </div>

            {/* //////// MODAL ////// */}

            {orderView && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <Order orderId={orderId} onClose={() => setOrderView(false)} />
                </div>
            )}

        </div>
    )
}
