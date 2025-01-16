
import { UserRegistrationForm } from "@/types"
import { useForm } from "react-hook-form"
import ErrorMessage from "../errorMessage/ErrorMessage"
import { useState } from "react"

export default function Form() {

    const [selectedMethod, setSelectedMethod] = useState("")

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


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues })


    const handleRegister = (formData) => {
        console.log(formData)
    }


    const handleMethod = (method: string) => {
        setSelectedMethod(method)
    }

    return (
        <div className="bg-white max-w-[730px] rounded-lg py-[60px] px-[48px]">
            <h3>checkout</h3>
            <div className="subtitle mt-[41px] mb-3">Billing details</div>

            <form
                onSubmit={handleSubmit(handleRegister)}
                className=""
                noValidate
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
                            className="relative px-6 py-[17px] font-bold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px] text-left pl-[53px]">
                            <div className={` absolute top-1/2 -translate-y-1/2 left-[20px] w-[12px] h-[12px] ${selectedMethod === "cashOnDelivery" ? "bg-more-ec" : ""}  rounded-full`} />
                            <div className=" absolute top-1/2 -translate-y-1/2 left-[15px] w-[22px] h-[22px] border rounded-full" />
                            Cash on Delivery
                        </button>
                    </div>


                </div>




                {/* /////////////////// */}

                <div className="flex gap-4">
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
                            className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
                            {...register("eMoneyNumber", {
                                required: "e-Money Number is required",
                                pattern: {
                                    value: /^\d+$/,
                                    message: "only numbers",
                                },
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


                <input
                    type="submit"
                    value='continue pay'
                    className="bg-more-ec w-full p-3 text-white font-black cursor-pointer mt-4 uppercase "
                />
            </form>

        </div>
    )
}
