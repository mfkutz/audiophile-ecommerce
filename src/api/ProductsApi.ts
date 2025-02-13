
import { productSchema } from "@/types"
import api from "axios"
import { isAxiosError } from "axios"

export async function getProduct() {

    const baseURL = import.meta.env.VITE_API_URL

    try {
        const { data } = await api(`${baseURL}/product`) //TODO sanitizar datos con zod
        const response = productSchema.safeParse(data)
        // console.log(response)
        if (response.success) {
            // console.log('este es', response.data)
            return response.data
        } else {
            throw new Error("Invalid data")
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}