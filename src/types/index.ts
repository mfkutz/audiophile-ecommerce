import { z } from "zod"

/* Auth & Users */
export const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    address: z.string(),
    zipCode: z.string(),
    city: z.string(),
    country: z.string(),
    eMoneyNumber: z.string(),
    eMoneyPin: z.string()
})


type Auth = z.infer<typeof authSchema>
export type UserRegistrationForm = Pick<Auth, "name" | "email" | "phoneNumber" | "address" | "zipCode" | "city" | "country" | "eMoneyNumber" | "eMoneyPin">