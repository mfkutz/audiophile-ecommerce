
import { UserRegistrationForm } from "@/types"
import { useForm } from "react-hook-form"
import ErrorMessage from "../errorMessage/ErrorMessage"

export default function Form() {

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
                            className="w-full px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] w-[309px]"
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
                                htmlFor="phoneNumber"
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


                <input
                    type="submit"
                    value='continue pay'
                    className="bg-more-ec w-full p-3 text-white font-black cursor-pointer mt-4 uppercase "
                />
            </form>

        </div>
    )
}
