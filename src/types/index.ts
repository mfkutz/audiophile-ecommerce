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
    eMoneyNumber: z
        .string()
        .regex(/^\d+$/, "eMoneyNumber must contain only numbers"), // only num
    eMoneyPin: z
        .string()
        .regex(/^\d{4}$/, "eMoneyPin must be a 4-digit number"), // only 4 digits
})


type Auth = z.infer<typeof authSchema>
export type UserRegistrationForm = Pick<Auth, "name" | "email" | "phoneNumber" | "address" | "zipCode" | "city" | "country" | "eMoneyNumber" | "eMoneyPin">