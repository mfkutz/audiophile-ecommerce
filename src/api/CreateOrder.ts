import api from "../lib/axios"
import { isAxiosError } from "axios"
import { orderSchema, OrderType } from "@/types"

const baseURL = import.meta.env.VITE_API_URL

export async function createOrder(formData: OrderType) {

    //validate data before send to backend
    const parsedOrder = orderSchema.safeParse(formData)
    console.log('parser data from frontend?', parsedOrder)
    if (!parsedOrder.success) {
        console.error("Error data", parsedOrder.error.format())
        throw new Error("Invalid data in form")
    }

    try {
        // console.log('veraqui', formData)
        const { data } = await api.post(`${baseURL}/order`, formData)
        console.log('tenemos el id axios?', data.order._id)

        // console.log('me ejecuté', data)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

//TO DO getOrderById
export async function getOrderById({ orderId }) {
    try {
        const { data } = await api(`${baseURL}/order/${orderId}`)
        console.log('hre from axios', data)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}



