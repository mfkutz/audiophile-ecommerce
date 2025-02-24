import api from "../lib/axios"
import { isAxiosError } from "axios"
import { orderSchema, OrderType } from "@/types"

const baseURL = import.meta.env.VITE_API_URL

export async function createOrder(formData: OrderType) {

    //validate data before send to backend
    const parsedOrder = orderSchema.safeParse(formData)
    if (!parsedOrder.success) {
        console.error("Error data", parsedOrder.error.format())
        throw new Error("Invalid data in form")
    }

    try {
        const { data } = await api.post(`${baseURL}/order`, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

//TO DO getOrderById
export async function getOrderById({ orderId }: { orderId: string }) {
    try {
        const { data } = await api(`${baseURL}/order/${orderId}`)
        const response = orderSchema.safeParse(data)
        console.log('y aqui que fuera del if pero dentro del try', response)
        if (response.success) {
            console.log('y aqui que', response)
            return response.data
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const customError = new Error(error.response.data.error) as Error & { status: number };
            customError.status = error.response.status;
            throw customError;
        }
        throw new Error("Unknown error");
    }
}



